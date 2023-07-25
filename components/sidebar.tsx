import Link from "next/link";
import sidebarStyles from "./sidebar.module.css";
import { useRouter } from "next/router";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <nav className={sidebarStyles.container}>
      <header className={sidebarStyles.header}>Oliver.Le</header>
      {children}
    </nav>
  );
}

export const SidebarSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className={sidebarStyles.section}>
      {title.length !== 0 && (
        <h4 className={sidebarStyles.sectionTitle}>{title}</h4>
      )}
      {children}
    </section>
  );
};

export const SidebarRow = ({
  title,
  href,
  shouldShowNewTab = false,
}: {
  title: string;
  href: string;
  shouldShowNewTab?: boolean;
}) => {
  const { asPath } = useRouter();
  return (
    <Link
      className={sidebarStyles.sectionRow}
      href={href}
      target={shouldShowNewTab ? "_blank" : null}
      aria-current={asPath === href ? "page" : null}
    >
      {title}
    </Link>
  );
};
