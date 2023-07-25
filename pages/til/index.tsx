import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import UtilStyles from "../../styles/utils.module.css";

export default function () {
  return (
    <Layout>
      <Head>
        <title>Oliver's TIL</title>
      </Head>
      <div className={UtilStyles.container}>TIL</div>
    </Layout>
  );
}
