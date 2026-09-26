import Layout from "../components/layout";
import Seo from "../components/seo";
import { MenuNavbar } from "../components/navbar";
import { ogImageUrl } from "../lib/site";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Seo
        path="/"
        image={{
          src: ogImageUrl("Things I'm learning, projects I've built, and some random thoughts."),
          width: 1200,
          height: 630,
        }}
      />
      <div className={utilStyles.container}>
        <MenuNavbar title="Home" />
        <div className={`${utilStyles.mono} ${utilStyles.description}`}>
          <p>
            👋 Xin chào, I&apos;m Oliver. This is the place, where I would share
            the things I&apos;m learning, projects I did and been working on,
            and maybe just some random thoughts. Moreover, the idea of having my
            own space on the internet is kinda fun.
          </p>
          <p>
            Everything here is my own opinion, take it with a grain of salt!
          </p>
        </div>
      </div>
    </Layout>
  );
}
