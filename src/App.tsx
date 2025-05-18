import ChatPage from "./components/ChatPage";
import StartChat from "./components/StartChat";

function App() {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-gray-800 text-white">
      {/* <StartChat /> */}
      <ChatPage />
    </div>
  );
}

export default App;
