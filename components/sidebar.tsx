import { useContext } from "react";
import sidebarStyles from "./sidebar.module.css";
import utilStyles from "../styles/utils.module.css";
import SidebarContext from "../context/SidebarContext";
import { SITE_NAME } from "../lib/site";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const { isShow, setIsShow } = useContext(SidebarContext);

  return (
    <nav
      aria-label="Main navigation"
      className={`${sidebarStyles.sidebar} ${isShow ? sidebarStyles.show : ""}`}
    >
      <header className={sidebarStyles.header}>
        {SITE_NAME}
        <button
          className={`${utilStyles.button} ${utilStyles.onlyMobile}`}
          onClick={() => setIsShow(false)}
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className={sidebarStyles.xIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </header>
      {children}
    </nav>
  );
}

export function SidebarSection({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={sidebarStyles.section}>
      {title && <h4 className={sidebarStyles.sectionTitle}>{title}</h4>}
      {children}
    </section>
  );
}
