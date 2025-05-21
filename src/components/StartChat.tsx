import { useChats } from "../context/useChats";
import { useSwitcher } from "../context/useSwitch";
import type { Chat } from "../types/types";

function StartChat() {
  const { setIsChatting } = useSwitcher();
  const { chats, setChats } = useChats();
  const startChat = () => {
    setIsChatting(true);
    if (chats.length === 0) {
      const newChat: Chat = {
        id: `Chat ${new Date().toLocaleDateString(
          "en-GB"
        )} ${new Date().toLocaleTimeString()}`,
        messages: [],
      };
      setChats([newChat]);
    }
  };
  return (
    <div>
      <button
        onClick={startChat}
        className="px-12 text-4xl py-6 cursor-pointer font-extrabold uppercase shadow-md rounded-md bg-linear-65 from-purple-500 to-pink-500 active:scale-[98%] transition text-white"
      >
        Chat Ai
      </button>
    </div>
  );
}

export default StartChat;
