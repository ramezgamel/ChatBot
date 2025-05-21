import { useState } from "react";
import Chat from "./Chat";
import ChatList from "./ChatList";

export default function ChatPage() {
  const [activeChatId, setActiveChatId] = useState("");
  return (
    <div className="flex w-full h-full">
      <ChatList setActiveChatId={setActiveChatId} activeChatId={activeChatId} />
      <Chat activeChatId={activeChatId} />
    </div>
  );
}
