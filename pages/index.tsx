import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Navbar, { menuIcon } from "../components/navbar";
import { useContext } from "react";
import SidebarContext from "../context/SidebarContext";

export default function Home() {
  const { setIsShow } = useContext(SidebarContext);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.container}>
        <Navbar
          title="Home"
          isShowTitle
          leadingItem={{
            icon: menuIcon,
            onClick: () => {
              setIsShow(true);
            },
          }}
        />
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
