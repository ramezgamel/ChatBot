import { useChats } from "../context/useChats";

export default function ChatList({
  setActiveChatId,
  activeChatId,
}: {
  setActiveChatId: (v: string) => void;
  activeChatId: string;
}) {
  const { chats, setChats } = useChats();
  const startNewChat = () => {
    const newChat = {
      id: `Chat ${new Date().toLocaleDateString(
        "en-GB"
      )} ${new Date().toLocaleTimeString()}`,
      messages: [],
    };
    setChats([...chats, newChat]);
  };
  const deleteChat = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const filteredChats = chats.filter((chat) => chat.id !== id);
    setChats(filteredChats);
  };
  return (
    <div className="hidden md:block px-2 md:min-w-[270px]">
      <h2 className="text-2xl flex justify-between py-4">
        ChatList{" "}
        <button onClick={startNewChat}>
          <Edit classes="cursor-pointer" />
        </button>
      </h2>
      <ul className="list-none">
        {chats.map((chat, i) => (
          <li
            key={chat.id}
            onClick={() => setActiveChatId(chat.id)}
            className={`p-2 mb-2 flex justify-between cursor-pointer items-center bg-gray-700 rounded-md ${
              ((!activeChatId && i === 0) || activeChatId === chat.id) &&
              "!bg-blue-400"
            }`}
          >
            <h4>{chat.id}</h4>
            <span
              onClick={(e) => deleteChat(e, chat.id)}
              className="bg-red-400 rounded-full w-4 h-4 block text-center text-xs"
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Edit = ({ classes }: { classes?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`size-6 ${classes}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
    />
  </svg>
);
