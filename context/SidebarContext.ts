import { createContext, useContext } from "react";

const SidebarContext = createContext({
  isShow: false,
  setIsShow: (_isShow: boolean) => {},
});

export function useSidebar() {
  return useContext(SidebarContext);
}

export default SidebarContext;
