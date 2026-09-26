import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type Section = "blog" | "til";

export type PostMeta = {
  id: string;
  title: string;
  date: string;
  description: string;
};

export type Post = PostMeta & { contentHtml: string };

const folders: Record<Section, string> = {
  blog: "blogs",
  til: "tils",
};

// Keep the path scoped under "posts" so the bundler only traces that folder.
function directory(section: Section): string {
  return path.join(process.cwd(), "posts", folders[section]);
}

function readPostFile(section: Section, id: string) {
  const fullPath = path.join(directory(section), `${id}.md`);
  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
  const meta: PostMeta = {
    id,
    title: data.title,
    date: data.date,
    description: data.description ?? excerpt(content),
  };
  return { meta, content };
}

// First paragraph of the post as plain text, used when no `description` is set.
function excerpt(markdown: string, maxLength = 160): string {
  const paragraph =
    markdown
      .replace(/^#.*$/gm, "")
      .split(/\n\s*\n/)
      .map((block) => block.trim())
      .find((block) => block && !/^(#|```|<|-|\d+\.)/.test(block)) ?? "";
  const text = paragraph
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[`*_>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > maxLength
    ? `${text.slice(0, maxLength - 1).trimEnd()}…`
    : text;
}

export function getPostIds(section: Section): string[] {
  return fs
    .readdirSync(directory(section))
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

export function getSortedPosts(section: Section): PostMeta[] {
  return getPostIds(section)
    .map((id) => readPostFile(section, id).meta)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(section: Section, id: string): Promise<Post> {
  const { meta, content } = readPostFile(section, id);
  const contentHtml = (await remark().use(html).process(content)).toString();
  return { ...meta, contentHtml };
}
