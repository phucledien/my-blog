import type { ReactNode } from "react";
import Link from "next/link";
import Layout from "./layout";
import Seo from "./seo";
import { BackNavbar } from "./navbar";
import styles from "../styles/stackback-policy.module.css";

export default function StackbackPolicyLayout({ title, description, path, children }: {
  title: string;
  description: string;
  path: string;
  children: ReactNode;
}) {
  return (
    <Layout>
      <Seo title={`${title} · Stackback`} description={description} path={path} label="Stackback" />
      <BackNavbar title={title} backHref="/projects/stackback" />
      <article className={styles.page}>
        <header>
          <Link href="/projects/stackback" className={styles.back}>← Stackback</Link>
          <h1>{title}</h1>
          <p className={styles.date}>Updated October 3, 2026</p>
        </header>
        <div className={styles.content}>{children}</div>
        <footer className={styles.footer}>
          <nav aria-label="Stackback pages">
            <Link href="/projects/stackback/support">Support</Link>
            <Link href="/projects/stackback/privacy">Privacy</Link>
            <Link href="/projects/stackback/terms">Terms</Link>
          </nav>
          <p>Phuc Le · <a href="mailto:phucledien@gmail.com">phucledien@gmail.com</a></p>
        </footer>
      </article>
    </Layout>
  );
}
