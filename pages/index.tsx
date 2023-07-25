import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.container}>
        <div className={`${utilStyles.mono} ${utilStyles.description}`}>
          👋 Xin chào, I'm Oliver. This is the place, where I would share the
          things I'm learning, projects I did and been working on, and maybe
          just some random thoughts. Moreover, the idea of having my own space
          on the internet is kinda fun.
          <p>
            Everything here is my own opinion, take it with a grain of salt!
          </p>
        </div>
      </div>
    </Layout>
  );
}
