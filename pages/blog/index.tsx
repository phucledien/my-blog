import type { GetStaticProps } from "next";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { PostList, sectionTitles } from "../../components/posts";
import { getSortedPosts, type PostMeta } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

type Props = { posts: PostMeta[] };

export default function SectionIndex({ posts }: Props) {
  return (
    <Layout>
      <Seo title={sectionTitles.blog} description="Longer-form writing on software engineering and the things I build." path="/blog" />
      <div className={utilStyles.blog}>
        <PostList section="blog" posts={posts} isIndex />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { posts: getSortedPosts("blog") },
});
