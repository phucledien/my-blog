import utilStyles from "../styles/utils.module.css";
import Sidebar, { SidebarSection } from "./sidebar";
import ActiveLink from "./activelink";
import { projects } from "../data/projects";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <>
      <Sidebar>
        <SidebarSection>
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/blog">Blog</ActiveLink>
          <ActiveLink href="/til">TIL</ActiveLink>
          <ActiveLink href="/projects">Projects</ActiveLink>
        </SidebarSection>

        <SidebarSection title="Projects">
          {projects.map(({ id, title }) => (
            <ActiveLink key={id} href={`/projects/${id}`}>
              {title}
            </ActiveLink>
          ))}
        </SidebarSection>

        <SidebarSection title="Contacts">
          <ActiveLink href="https://twitter.com/phucledien" external>
            Twitter
          </ActiveLink>
          <ActiveLink href="https://mastodon.social/@phucld" external>
            Mastodon
          </ActiveLink>
          <ActiveLink href="https://github.com/phucledien" external>
            Github
          </ActiveLink>
        </SidebarSection>
      </Sidebar>
      <div className={utilStyles.default}>
        <main className={home ? utilStyles.index : undefined}>{children}</main>
      </div>
    </>
  );
}
