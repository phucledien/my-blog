import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import { MenuNavbar } from "../components/navbar";
import { SITE_NAME } from "../lib/site";
import utilStyles from "../styles/utils.module.css";

export default function NotFound() {
  return (
    <Layout home>
      <Head>
        <title>{`Page not found · ${SITE_NAME}`}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className={utilStyles.container}>
        <MenuNavbar title="Not found" />
        <h1 className={utilStyles.postTitle}>404</h1>
        <p className={`${utilStyles.mono} ${utilStyles.description}`}>
          This page doesn&apos;t exist. <Link href="/">Head back home</Link>.
        </p>
      </div>
    </Layout>
  );
}
