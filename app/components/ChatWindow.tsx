import { useState, useEffect, useRef } from "react";
import { UserCircle, ListCollapse, User, Settings, LogOut, Mic, SendHorizontal, Paperclip, Image } from "lucide-react";
import { Card } from "./ui/Card";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

type Message = {
  sender: "bot" | "user";
  text: string;
};

type ChatWindowProps = {
  messages: Message[];
  input: string;
  setInput: (input: string) => void;
  handleSend: () => void;
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
};

export function ChatWindow({
  messages,
  input,
  setInput,
  handleSend,
  toggleSidebar,
  isSidebarOpen,
}: ChatWindowProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex flex-col w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center bg-gray-200 p-4 shadow-md">
        <div className="cursor-pointer" onClick={toggleSidebar}>
          {!isSidebarOpen && <ListCollapse size={28} />}
        </div>
        <div className="text-lg font-semibold">HDS AGENTS</div>
        <div className="relative" ref={menuRef}>
          <UserCircle size={28} className="cursor-pointer" onClick={toggleMenu} />
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              <div className="p-2 border-b">
                <div className="font-semibold">Nagaraj Alva</div>
                <div className="text-sm text-gray-600">nagaraj.alva@example.com</div>
              </div>
              <ul className="py-1">
                <li className="flex items-center p-2 cursor-pointer hover:bg-gray-100">
                  <User size={20} className="mr-2" /> Profile
                </li>
                <li className="flex items-center p-2 cursor-pointer hover:bg-gray-100">
                  <Settings size={20} className="mr-2" /> Settings
                </li>
                <li className="flex items-center p-2 cursor-pointer hover:bg-gray-100">
                  <LogOut size={20} className="mr-2" /> Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Messages Section */}
      <div className="flex-1 p-4 overflow-auto bg-gray-50">
        {messages.map((message, index) => (
          <Card
            key={index}
            className={`my-2 p-3 rounded-md max-w-xs ${
              message.sender === "user" ? "bg-blue-500 text-white ml-auto" : "bg-gray-300 text-black"
            }`}
          >
            {message.text}
          </Card>
        ))}
      </div>

      {/* Input Section */}
      <div className="p-4 bg-gray-100 flex items-center gap-2 border-t">
        <Button variant="ghost" className="p-1 md:p-2">
          <Paperclip size={20} />
        </Button>
        <Button variant="ghost" className="p-1 md:p-2">
          <Image size={20} alt-text='' />
        </Button>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSend();
        }
          }}
          className="flex-1 p-2 border rounded-md"
          placeholder="Message ChatGPT"
        />
        <Button variant="ghost" className="p-1 md:p-2">
          <Mic size={20} />
        </Button>
        <Button onClick={handleSend} className="bg-blue-500 text-white">
          <SendHorizontal size={20} />
        </Button>
      </div>
    </div>
  );
}
