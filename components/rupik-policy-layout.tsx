import type { ReactNode } from "react";
import Link from "next/link";
import Layout from "./layout";
import Seo from "./seo";
import { BackNavbar } from "./navbar";
import styles from "../styles/rupik-policy.module.css";

export default function RupikPolicyLayout({ title, description, path, children }: {
  title: string; description: string; path: string; children: ReactNode;
}) {
  return <Layout>
    <Seo title={`${title} · Rupik`} description={description} path={path} label="Rupik" />
    <BackNavbar title={title} backHref="/projects/rupik" />
    <article className={styles.page}>
      <header>
        <Link href="/projects/rupik" className={styles.back}>← Rupik</Link>
        <h1>{title}</h1>
        <p className={styles.date}>Updated October 12, 2026</p>
      </header>
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}>
        <nav aria-label="Rupik pages">
          <Link href="/projects/rupik">About Rupik</Link>
          <Link href="/projects/rupik/support">Support</Link>
          <Link href="/projects/rupik/privacy">Privacy</Link>
          <Link href="/projects/rupik/terms">Terms</Link>
        </nav>
        <p>Phuc Le · <a href="mailto:phucledien@gmail.com">phucledien@gmail.com</a></p>
      </footer>
    </article>
  </Layout>;
}
