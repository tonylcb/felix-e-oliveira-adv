import { createContext, useContext, useState } from "react";

// @ts-expect-error
const AppContext = createContext();

export function MenuMobileProvider({ children }) {
  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <AppContext.Provider value={{ menuMobile, setMenuMobile }}>
      {children}
    </AppContext.Provider>
  );
}
export function useMenuMobile() {
  return useContext(AppContext);
}
