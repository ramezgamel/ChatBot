import { createContext, useContext, useState, type ReactNode } from "react";
import type { Switcher } from "../types/types";

const MyContext = createContext<Switcher | undefined>(undefined);

export const SwitcherProvider = ({ children }: { children: ReactNode }) => {
  const [isChatting, setIsChatting] = useState<boolean>(false);

  const value: Switcher = {
    isChatting,
    setIsChatting,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

// Custom hook for easy usage
export const useSwitcher = (): Switcher => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useSwitcher must be used within a MyProvider");
  }
  return context;
};
