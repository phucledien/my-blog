import { useEffect, useState, type RefObject } from "react";

// With a target, track its bottom edge crossing the viewport offset.
export function useScrolledPast(
  offset: number,
  targetRef?: RefObject<HTMLElement | null>,
): boolean {
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setIsPast(
        targetRef?.current
          ? targetRef.current.getBoundingClientRect().bottom <= offset
          : window.scrollY >= offset,
      );
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [offset, targetRef]);

  return isPast;
}
