import Chat from "./Chat";
import ChatList from "./ChatList";

export default function ChatPage() {
  return (
    <div className="flex w-full h-full">
      <ChatList />
      <Chat />
    </div>
  );
}
