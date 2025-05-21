import { createContext, useContext, useState, type ReactNode } from "react";
import type { Chat } from "../types/types";

const myContext = createContext<
  { chats: Chat[]; setChats: (v: Chat[]) => void } | undefined
>(undefined);
export const ChatsProvider = ({ children }: { children: ReactNode }) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const defaultValue = {
    chats,
    setChats,
  };
  return (
    <myContext.Provider value={defaultValue}>{children}</myContext.Provider>
  );
};
export const useChats = () => {
  const context = useContext(myContext);
  if (!context) throw new Error("useChats must be used within a MyProvider");
  return context;
};
