import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import utilStyles from "../styles/utils.module.css";

export default function ActiveLink({
  children,
  href,
  shouldShowNewTab = false,
}: {
  children: React.ReactNode;
  href: string;
  shouldShowNewTab?: boolean;
}) {
  const { asPath } = useRouter();
  return (
    <Link
      className={utilStyles.activeLink}
      href={href}
      target={shouldShowNewTab ? "_blank" : null}
      aria-current={asPath === href ? "page" : null}
    >
      {children}
    </Link>
  );
}
