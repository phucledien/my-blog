import Link from "next/link";
import { useRouter } from "next/router";
import utilStyles from "../styles/utils.module.css";

// A link is active on its own page and on any page nested under it,
// e.g. "/til" stays highlighted on "/til/some-post".
function isActive(asPath: string, href: string): boolean {
  const path = asPath.split(/[?#]/)[0];
  return path === href || (href !== "/" && path.startsWith(`${href}/`));
}

export default function ActiveLink({
  children,
  href,
  external = false,
}: {
  children: React.ReactNode;
  href: string;
  external?: boolean;
}) {
  const { asPath } = useRouter();

  if (external) {
    return (
      <a
        className={utilStyles.activeLink}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      className={utilStyles.activeLink}
      href={href}
      aria-current={isActive(asPath, href) ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
