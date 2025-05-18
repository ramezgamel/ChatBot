export default function ChatList() {
  return (
    <div className="hidden md:block px-2 md:min-w-[270px]">
      <h2 className="text-2xl flex justify-between py-4">
        ChatList <Edit classes="cursor-pointer" />
      </h2>
      <i></i>
      <ul className="list-none">
        <li className="p-2 flex justify-between items-center cursor-pointer mb-2 bg-gradient-to-r from-violet-700 to-violet-400 rounded-md">
          <h4>Chat 17/05/2025 21:38:55 PM</h4>
          <span className="bg-red-400 rounded-full w-4 h-4 block text-center text-xs">
            X
          </span>
        </li>
        <li className="p-2 mb-2 flex justify-between cursor-pointer items-center bg-gray-700 rounded-md">
          <h4>Chat 17/05/2025 21:38:55 PM</h4>
          <span className="bg-red-400 rounded-full w-4 h-4 block text-center text-xs">
            X
          </span>
        </li>
        <li className="p-2 mb-2 flex justify-between cursor-pointer items-center bg-gray-700 rounded-md">
          <h4>Chat 17/05/2025 21:38:55 PM</h4>
          <span className="bg-red-400 rounded-full w-4 h-4 block text-center text-xs">
            X
          </span>
        </li>
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
