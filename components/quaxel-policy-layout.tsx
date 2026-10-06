import type { ReactNode } from "react";
import Link from "next/link";
import Layout from "./layout";
import Seo from "./seo";
import { BackNavbar } from "./navbar";
import styles from "../styles/quaxel-policy.module.css";

export default function QuaxelPolicyLayout({ title, description, path, children }: {
  title: string; description: string; path: string; children: ReactNode;
}) {
  return <Layout>
    <Seo title={`${title} · Quaxel`} description={description} path={path} label="Quaxel" />
    <BackNavbar title={title} backHref="/projects/quaxel" />
    <article className={styles.page}>
      <header>
        <Link href="/projects/quaxel" className={styles.back}>← Quaxel</Link>
        <h1>{title}</h1>
        <p className={styles.date}>Updated October 6, 2026</p>
      </header>
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}>
        <nav aria-label="Quaxel pages">
          <Link href="/projects/quaxel">About Quaxel</Link>
          <Link href="/projects/quaxel/support">Support</Link>
          <Link href="/projects/quaxel/privacy">Privacy</Link>
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Terms of Use</a>
        </nav>
        <p>Oliver Le · <a href="mailto:phucledien@gmail.com">phucledien@gmail.com</a></p>
      </footer>
    </article>
  </Layout>;
}
