'use client';
import { useState } from "react";
import { ChatWindow } from "./components/ChatWindow";
import { Sidebar } from "./components/Sidebar";

export default function ChatGPTUI() {
  const [messages, setMessages] = useState<{ sender: "bot" | "user"; text: string }[]>([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);

  const [input, setInput] = useState<string>("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: input },
      { sender: "bot", text: "This is a mock response to your query." },
    ]);

    setInput("");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <ChatWindow
          messages={messages}
          input={input}
          setInput={setInput}
          handleSend={handleSend}
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
    </div>
  );
}