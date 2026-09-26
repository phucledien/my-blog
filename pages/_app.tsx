import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import SidebarContext from "../context/SidebarContext";

function App({ Component, pageProps }: AppProps) {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const router = useRouter();

  // Close the mobile menu once a link inside it is followed.
  useEffect(() => {
    const close = () => setIsShowSidebar(false);
    router.events.on("routeChangeStart", close);
    return () => router.events.off("routeChangeStart", close);
  }, [router.events]);

  return (
    <SidebarContext.Provider
      value={{ isShow: isShowSidebar, setIsShow: setIsShowSidebar }}
    >
      <Component {...pageProps} />
    </SidebarContext.Provider>
  );
}

export default App;
