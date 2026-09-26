import { useEffect, useState } from "react";

export function useScrolledPast(offset: number): boolean {
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsPast(window.scrollY >= offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return isPast;
}
