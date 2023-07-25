import Head from "next/head";
import Layout from "../../components/layout";
import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticPaths, GetStaticProps } from "next";
import Navbar from "../../components/navbar";
import ActiveLink from "../../components/activelink";

export default function Post({
  allPostsData,
  postData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className={utilStyles.blog}>
        <aside className={utilStyles.aside}>
          <Navbar title="Blog" />
          <div>
            <nav>
              {allPostsData.map(({ id, date, title }) => (
                <div key={id}>
                  <ActiveLink href={`/blog/${id}`}>
                    <div className={utilStyles.post}>
                      <div className={utilStyles.title}>{title}</div>
                      <span className={utilStyles.date}>{date}</span>
                    </div>
                  </ActiveLink>
                </div>
              ))}
            </nav>
          </div>
        </aside>
        <div className={utilStyles.postContainer}>
          <Navbar title={postData.title} />
          <article className={utilStyles.articlePost}>
            <div className={utilStyles.container}>
              <header className={utilStyles.postHeader}>
                <h1 className={utilStyles.postTitle}>{postData.title}</h1>
                <div className={utilStyles.meta}>
                  <time className={utilStyles.postSubheader}>
                    {postData.date}
                  </time>
                </div>
              </header>
              <div
                className={`${utilStyles.content} ${utilStyles.mono}`}
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
              ></div>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPostsData = getSortedPostsData();
  const postData = await getPostData(params.id);
  return {
    props: {
      allPostsData,
      postData,
    },
  };
};
