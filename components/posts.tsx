import utilStyles from "../styles/utils.module.css";
import ActiveLink from "./activelink";
import DateLabel from "./date";
import { BackNavbar, MenuNavbar } from "./navbar";
import type { Post, PostMeta, Section } from "../lib/posts";

export const sectionTitles: Record<Section, string> = {
  blog: "Blog",
  til: "TIL",
};

// The column listing every post in a section. On mobile it is only visible on the index page.
export function PostList({
  section,
  posts,
  isIndex = false,
}: {
  section: Section;
  posts: PostMeta[];
  isIndex?: boolean;
}) {
  const title = sectionTitles[section];
  return (
    <aside className={`${utilStyles.aside} ${isIndex ? utilStyles.show : ""}`}>
      {isIndex && <MenuNavbar title={title} />}
      <div className={utilStyles.postsContainer}>
        <nav aria-label={`${title} posts`}>
          {posts.map(({ id, date, title }) => (
            <ActiveLink key={id} href={`/${section}/${id}`}>
              <div className={utilStyles.post}>
                <div className={utilStyles.title}>{title}</div>
                <span className={utilStyles.date}>
                  <DateLabel dateString={date} />
                </span>
              </div>
            </ActiveLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export function PostArticle({ section, post }: { section: Section; post: Post }) {
  return (
    <div className={utilStyles.postContainer}>
      <BackNavbar title={post.title} backHref={`/${section}`} />
      <article className={utilStyles.articlePost}>
        <div className={utilStyles.container}>
          <header className={utilStyles.postHeader}>
            <h1 className={utilStyles.postTitle}>{post.title}</h1>
            <div className={utilStyles.meta}>
              <DateLabel dateString={post.date} />
            </div>
          </header>
          <div
            className={`${utilStyles.content} ${utilStyles.mono}`}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </article>
    </div>
  );
}
