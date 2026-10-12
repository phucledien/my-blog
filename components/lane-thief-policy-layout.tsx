import type { ReactNode } from "react";
import Link from "next/link";
import Layout from "./layout";
import Seo from "./seo";
import { BackNavbar } from "./navbar";
import styles from "../styles/lane-thief-policy.module.css";

export default function LaneThiefPolicyLayout({ title, description, path, children }: {
  title: string; description: string; path: string; children: ReactNode;
}) {
  return <Layout>
    <Seo title={`${title} · Lane Thief`} description={description} path={path} label="Lane Thief" />
    <BackNavbar title={title} backHref="/projects/lane-thief" />
    <article className={styles.page}>
      <header>
        <Link href="/projects/lane-thief" className={styles.back}>← Lane Thief</Link>
        <h1>{title}</h1>
        <p className={styles.date}>Updated October 12, 2026</p>
      </header>
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}>
        <nav aria-label="Lane Thief pages">
          <Link href="/projects/lane-thief">About Lane Thief</Link>
          <Link href="/projects/lane-thief/support">Support</Link>
          <Link href="/projects/lane-thief/privacy">Privacy</Link>
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Terms of Use</a>
        </nav>
        <p>Oliver Le · <a href="mailto:phucledien@gmail.com">phucledien@gmail.com</a></p>
      </footer>
    </article>
  </Layout>;
}
