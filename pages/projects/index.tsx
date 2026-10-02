import Link from "next/link";
import { useRef } from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { MenuNavbar } from "../../components/navbar";
import ProjectImage from "../../components/project-image";
import { projects } from "../../data/projects";
import utilStyles from "../../styles/utils.module.css";
import styles from "../../styles/projects.module.css";
import { useScrolledPast } from "../../hooks/useScrolledPast";

export default function Projects() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isScrolledPastTitle = useScrolledPast(48, titleRef);

  return (
    <Layout>
      <Seo
        title="Projects"
        description="Things I've built and contributed to: games, agent skills, and apps for macOS and iOS."
        path="/projects"
      />
      <MenuNavbar title="Projects" isShowTitle={isScrolledPastTitle} />
      <div className={styles.page}>
        <header className={utilStyles.postHeader}>
          <h1 ref={titleRef} className={utilStyles.postTitle}>
            Projects
          </h1>
          <p className={`${utilStyles.mono} ${utilStyles.description}`}>
            Things I&apos;ve built and contributed to: games, agent skills, and
            apps for macOS and iOS.
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
                    {project.year && (
                      <span className={styles.year}>{project.year}</span>
                    )}
                  </div>
                  <p className={styles.tagline}>{project.tagline}</p>
                  {project.stack.length > 0 && (
                    <ul className={styles.tags}>
                      {project.stack.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
