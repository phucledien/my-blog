import navbarStyles from "./navbar.module.css";

export default function Navbar({ title }: { title: string }) {
  return (
    <nav className={`${navbarStyles.navigationBar} ${navbarStyles.onlyMobile}`}>
      <div className={navbarStyles.left}>
        <button className={navbarStyles.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            // className="h-6 w-6 menu-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className={`${navbarStyles.title} ${navbarStyles.show}`}>
        {title}
      </div>
      <div className={navbarStyles.right}></div>
    </nav>
  );
}
