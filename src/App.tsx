import ChatPage from "./components/ChatPage";
import StartChat from "./components/StartChat";
import { useSwitcher } from "./context/useSwitch";

function App() {
  // const [isChatting, setIsChatting] = useState(false);
  const { isChatting } = useSwitcher();
  return (
    <div className="h-[100vh] flex justify-center items-center bg-gray-800 text-white">
      {isChatting ? <ChatPage /> : <StartChat />}
    </div>
  );
}

export default App;
