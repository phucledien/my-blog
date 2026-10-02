import { useContext, useEffect, useRef, useState } from "react";
import sidebarStyles from "./sidebar.module.css";
import utilStyles from "../styles/utils.module.css";
import SidebarContext from "../context/SidebarContext";
import { SITE_NAME } from "../lib/site";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const { isShow, setIsShow } = useContext(SidebarContext);
  const [isMobile, setIsMobile] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const isModalOpen = isMobile && isShow;

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1024px)");
    const update = () => {
      setIsMobile(media.matches);
      if (!media.matches) setIsShow(false);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [setIsShow]);

  useEffect(() => {
    if (!isModalOpen) return;

    const sidebar = sidebarRef.current!;
    // Safari does not always focus a button after a touch, so retain the opener explicitly.
    const opener =
      document.querySelector<HTMLElement>(
        'button[aria-controls="site-menu"][aria-expanded="true"]',
      ) ?? (document.activeElement as HTMLElement | null);
    const content = document.querySelector<HTMLElement>("[data-sidebar-content]");
    const previousInert = content?.inert ?? false;
    const previousClip = content?.style.getPropertyValue("clip-path") ?? "";
    const previousClipPriority = content?.style.getPropertyPriority("clip-path") ?? "";
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const body = document.body;
    const properties = [
      "position", "top", "left", "right", "width", "overflow", "padding-right",
      "background-image",
    ];
    const previousStyles = properties.map((property) => ({
      property,
      value: body.style.getPropertyValue(property),
      priority: body.style.getPropertyPriority(property),
    }));
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // A fixed body stops iOS background scrolling while preserving the page's position.
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = `-${scrollX}px`;
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    // Safari paints page content behind its floating controls, beyond fixed overlays.
    // Leave a solid root canvas there and clip the inactive page to the visible viewport.
    body.style.backgroundImage = "none";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
    if (content) {
      content.inert = true;
      content.style.clipPath = `inset(${scrollY}px 0 max(0px, calc(100% - ${scrollY}px - 100dvh)) 0)`;
    }
    closeRef.current?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsShow(false);
      } else if (event.key === "Tab") {
        const controls = Array.from(sidebar.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        )).filter((element) => element.getClientRects().length > 0);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (!sidebar.contains(document.activeElement)) {
          event.preventDefault();
          (event.shiftKey ? last : first)?.focus();
        } else if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    const onFocusIn = (event: FocusEvent) => {
      if (!sidebar.contains(event.target as Node)) {
        closeRef.current?.focus({ preventScroll: true });
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusin", onFocusIn);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusin", onFocusIn);
      if (content) {
        content.inert = previousInert;
        if (previousClip) content.style.setProperty("clip-path", previousClip, previousClipPriority);
        else content.style.removeProperty("clip-path");
      }
      previousStyles.forEach(({ property, value, priority }) => {
        if (value) body.style.setProperty(property, value, priority);
        else body.style.removeProperty(property);
      });
      window.scrollTo(scrollX, scrollY);
      if (opener?.isConnected && opener.getClientRects().length > 0) {
        opener.focus({ preventScroll: true });
      }
    };
  }, [isModalOpen, setIsShow]);

  return (
    <div
      id="site-menu"
      ref={sidebarRef}
      role={isModalOpen ? "dialog" : undefined}
      aria-modal={isModalOpen || undefined}
      aria-label={isModalOpen ? "Site menu" : undefined}
      className={`${sidebarStyles.sidebar} ${isShow ? sidebarStyles.show : ""}`}
    >
      <nav
        aria-label="Main navigation"
        onClick={(event) => {
          if ((event.target as Element).closest("a[href]")) setIsShow(false);
        }}
      >
        <header className={sidebarStyles.header}>
          <span>{SITE_NAME}</span>
          <button
            ref={closeRef}
            className={`${utilStyles.button} ${utilStyles.onlyMobile} ${sidebarStyles.closeButton}`}
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
    </div>
  );
}

export function SidebarBackdrop() {
  const { isShow, setIsShow } = useContext(SidebarContext);
  return isShow ? (
    <button
      className={sidebarStyles.backdrop}
      aria-label="Dismiss menu"
      tabIndex={-1}
      onClick={() => setIsShow(false)}
    />
  ) : null;
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
