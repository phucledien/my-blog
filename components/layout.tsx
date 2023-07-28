import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Sidebar, { SidebarSection } from "./sidebar";
import ActiveLink from "./activelink";

export const siteTitle = "Oliver.Le";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.default}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Oliver.Le" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Sidebar>
        <SidebarSection title="">
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/blog">Blog</ActiveLink>
          <ActiveLink href="/til">TIL</ActiveLink>
        </SidebarSection>

        {/* <SidebarSection title="Projects">
          <ActiveLink href="/projects/beans">Beans</ActiveLink>
          <ActiveLink href="/projects/hidden">Hidden Bar</ActiveLink>
          <ActiveLink href="/projects/sudofm">Sudo.fm</ActiveLink>
        </SidebarSection> */}

        <SidebarSection title="Contacts">
          <ActiveLink href="https://twitter.com/phucledien" shouldShowNewTab>
            Twitter
          </ActiveLink>
          <ActiveLink href="https://mastodon.social/@phucld" shouldShowNewTab>
            Mastodon
          </ActiveLink>
          <ActiveLink href="https://github.com/phucledien" shouldShowNewTab>
            Github
          </ActiveLink>
        </SidebarSection>
      </Sidebar>
      <main className={home ? utilStyles.index : null}>{children}</main>
    </div>
  );
}
