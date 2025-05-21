import { useState, type FormEvent } from "react";
import { useSwitcher } from "../context/useSwitch";
import type { Message, Chat as ChatType } from "../types/types";
import { useChats } from "../context/useChats";

export default function Chat({
  activeChatId,
}: {
  activeChatId: string | null;
}) {
  const { setIsChatting } = useSwitcher();
  const [input, setInput] = useState("");
  const { chats, setChats } = useChats();
  const activeChat: ChatType =
    chats.filter((chat) => chat.id !== activeChatId)[0] ?? chats[0];
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === "") return alert("Input is Empty");
    const newMessage: Message = {
      type: "prompt",
      text: input,
      timeStamp: new Date().toLocaleTimeString(),
    };

    setChats(
      chats.map((chat) => {
        if (chat.id === activeChat.id) {
          return { id: chat.id, messages: [...chat.messages, newMessage] };
        }
        return chat;
      })
    );

    setInput("");
  };

  return (
    <div className=" h-full w-full pr-4 flex flex-col">
      <h3 className="text-2xl flex justify-between py-4 font-bold text-center ">
        Chat with Ai
        <button onClick={() => setIsChatting(false)}>
          <ArrowRight classes="cursor-pointer" />
        </button>
      </h3>
      <ul className="bg-gray-700 justify-between px-4 py-2 flex grow flex-col rounded-md">
        <div>
          {activeChat.messages.map((msg, i) => (
            <li
              key={i}
              className={msg.type === "prompt" ? "flex justify-end" : ""}
            >
              <div className={msg.type === "prompt" ? "ask" : ""}>
                <div>{msg.text}</div>
                <div className="text-sm text-right">{msg.timeStamp}</div>
              </div>
            </li>
          ))}
        </div>
        <span>Typing....</span>
      </ul>
      <form
        onSubmit={handleSubmit}
        className="h-12 px-4 flex items-center bg-gray-700 my-4 rounded-md "
      >
        <SmileFace />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Type a Message"
          className="grow h-full outline-0 px-4 "
          name="message"
        />
        <button type="submit">
          <Airplane classes=" cursor-pointer" />
        </button>
      </form>
    </div>
  );
}
const SmileFace = ({ classes }: { classes?: string }) => (
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
      d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
    />
  </svg>
);
const Airplane = ({ classes }: { classes?: string }) => (
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
      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
    />
  </svg>
);

const ArrowRight = ({ classes }: { classes?: string }) => (
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
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
);
