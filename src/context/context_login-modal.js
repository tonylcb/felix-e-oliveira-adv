import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function LoginModalProvider({ children }) {
  const [loginModal, setLoginModal] = useState(false);

  return (
    <AppContext.Provider value={{ loginModal, setLoginModal }}>
      {children}
    </AppContext.Provider>
  );
}
export function useLoginModal() {
  return useContext(AppContext);
}
