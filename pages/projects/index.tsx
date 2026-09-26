import Link from "next/link";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { MenuNavbar } from "../../components/navbar";
import ProjectImage from "../../components/project-image";
import { projects } from "../../data/projects";
import utilStyles from "../../styles/utils.module.css";
import styles from "../../styles/projects.module.css";

export default function Projects() {
  return (
    <Layout>
      <Seo
        title="Projects"
        description="Things I've built: games, agent skills, and macOS apps."
        path="/projects"
      />
      <MenuNavbar title="Projects" />
      <div className={styles.page}>
        <header className={utilStyles.postHeader}>
          <h1 className={utilStyles.postTitle}>Projects</h1>
          <p className={`${utilStyles.mono} ${utilStyles.description}`}>
            Things I&apos;ve built: games, agent skills, and macOS apps.
          </p>
        </header>

        <ul className={styles.grid}>
          {projects.map((project, index) => (
            <li key={project.id}>
              <Link href={`/projects/${project.id}`} className={styles.card}>
                <div
                  className={`${styles.media} ${
                    project.coverFit === "contain" ? styles.contain : ""
                  }`}
                >
                  <ProjectImage
                    src={project.cover.src}
                    alt={project.cover.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    priority={index < 2}
                  />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTitleRow}>
                    <h2 className={styles.cardTitle}>{project.title}</h2>
                    <span className={styles.year}>{project.year}</span>
                  </div>
                  <p className={styles.tagline}>{project.tagline}</p>
                  <ul className={styles.tags}>
                    {project.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
