import type { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { BackNavbar } from "../../components/navbar";
import ProjectImage from "../../components/project-image";
import { getProject, projects } from "../../data/projects";
import utilStyles from "../../styles/utils.module.css";
import styles from "../../styles/projects.module.css";

type Props = { id: string };

export default function ProjectPage({ id }: Props) {
  const project = getProject(id)!;
  const { ogImage } = project;

  return (
    <Layout>
      <Seo
        title={project.title}
        description={project.tagline}
        path={`/projects/${project.id}`}
        label="Project"
        image={
          ogImage && {
            src: ogImage.src,
            width: ogImage.width,
            height: ogImage.height,
            alt: project.cover.alt,
          }
        }
      />
      <BackNavbar title={project.title} backHref="/projects" />
      <article className={styles.page}>
        <header className={styles.hero}>
          {project.icon && (
            <ProjectImage
              src={project.icon}
              alt=""
              width={72}
              height={72}
              className={styles.icon}
            />
          )}
          <h1 className={utilStyles.postTitle}>{project.title}</h1>
          <p className={styles.heroTagline}>{project.tagline}</p>
          <div className={utilStyles.meta}>
            <span>
              {[project.year, project.role].filter(Boolean).join(" · ")}
            </span>
          </div>
          <div className={styles.actions}>
            {project.homepage && (
              <a
                className={`${styles.button} ${styles.primary}`}
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.homepageLabel ?? "Visit"} ↗
              </a>
            )}
            {project.repo && (
              <a
                className={styles.button}
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source on GitHub ↗
              </a>
            )}
          </div>
        </header>

        <figure
          className={`${styles.coverFigure} ${
            project.coverFit === "contain" ? styles.contain : ""
          }`}
        >
          <ProjectImage
            src={project.cover.src}
            alt={project.cover.alt}
            sizes="(max-width: 1024px) 100vw, 960px"
            priority
          />
        </figure>

        <div className={`${utilStyles.content} ${utilStyles.mono} ${styles.body}`}>
          {project.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {project.sprites && (
            <ul className={styles.sprites}>
              {project.sprites.map((sprite) => (
                <li key={sprite.alt}>
                  <ProjectImage src={sprite.src} alt={sprite.alt} width={72} height={72} unoptimized />
                  <span>{sprite.alt}</span>
                </li>
              ))}
            </ul>
          )}

          <h2 className={styles.sectionTitle}>Highlights</h2>
          <ul className={styles.highlights}>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          {project.stack.length > 0 && (
            <>
              <h2 className={styles.sectionTitle}>Stack</h2>
              <ul className={styles.tags}>
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        {project.gallery.length > 0 && (
          <section className={styles.gallerySection}>
            <h2 className={styles.sectionTitle}>Showcase</h2>
            <div
              className={`${styles.gallery} ${
                project.gallery.length === 1 ? styles.single : ""
              }`}
            >
              {project.gallery.map((image) => (
                <figure key={image.alt} className={styles.shot}>
                  <ProjectImage
                    src={image.src}
                    alt={image.alt}
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                  {image.caption && <figcaption>{image.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.map(({ id }) => ({ params: { id } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({ params }) => ({
  props: { id: params!.id },
});
