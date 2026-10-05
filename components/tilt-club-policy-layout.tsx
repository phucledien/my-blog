import type { ReactNode } from "react";
import Link from "next/link";
import Layout from "./layout";
import Seo from "./seo";
import { BackNavbar } from "./navbar";
import styles from "../styles/tilt-club-policy.module.css";

export default function TiltClubPolicyLayout({ title, description, path, children }: {
  title: string;
  description: string;
  path: string;
  children: ReactNode;
}) {
  return (
    <Layout>
      <Seo title={`${title} · Tilt Club`} description={description} path={path} label="Tilt Club" />
      <BackNavbar title={`${title} · Tilt Club`} backHref="/projects" />
      <article className={styles.page}>
        <header>
          <Link href="/projects" className={styles.back}>← Projects</Link>
          <p className={styles.appName}>Tilt Club</p>
          <h1>{title}</h1>
          <p className={styles.date}>Updated October 5, 2026</p>
        </header>
        <div className={styles.content}>{children}</div>
        <footer className={styles.footer}>
          <nav aria-label="Tilt Club support and policies">
            <Link href="/projects/tilt-club/support">Support</Link>
            <Link href="/projects/tilt-club/privacy">Privacy</Link>
            <Link href="/projects/tilt-club/terms">Terms</Link>
          </nav>
          <p>Phuc Le · <a href="mailto:phucledien@gmail.com">phucledien@gmail.com</a></p>
        </footer>
      </article>
    </Layout>
  );
}
