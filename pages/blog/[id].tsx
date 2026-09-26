import type { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { PostArticle, PostList, sectionTitles } from "../../components/posts";
import { getPost, getPostIds, getSortedPosts, type Post, type PostMeta } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

type Props = { posts: PostMeta[]; post: Post };

export default function PostPage({ posts, post }: Props) {
  return (
    <Layout>
      <Seo
        title={post.title}
        description={post.description}
        path={`/blog/${post.id}`}
        label={sectionTitles.blog}
        type="article"
        publishedTime={post.date}
      />
      <div className={utilStyles.blog}>
        <PostList section="blog" posts={posts} />
        <PostArticle section="blog" post={post} />
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getPostIds("blog").map((id) => ({ params: { id } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({ params }) => ({
  props: {
    posts: getSortedPosts("blog"),
    post: await getPost("blog", params!.id),
  },
});
