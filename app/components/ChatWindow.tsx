import { useState, useEffect, useRef } from "react";
import { UserCircle, ListCollapse, User, Settings, LogOut } from "lucide-react";

export function ChatWindow({
  messages,
  input,
  setInput,
  handleSend,
  toggleSidebar,
  isSidebarOpen,
}: {
  messages: { sender: "bot" | "user"; text: string }[];
  input: string;
  setInput: (input: string) => void;
  handleSend: () => void;
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex-1 flex flex-col">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center bg-gray-200 p-4 shadow-md z-10">
        <div className="cursor-pointer" onClick={toggleSidebar}>
          {!isSidebarOpen && <ListCollapse size={28} />}
        </div>
        <div className="text-lg font-semibold">HDS AGENTS</div>
        <div className="relative" ref={menuRef}>
          <UserCircle size={28} className="cursor-pointer" onClick={toggleMenu} />
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-20">
              <div className="p-2 border-b">
                <div className="font-semibold">Nagaraj Alva</div>
                <div className="text-sm text-gray-600">nagaraj.alva@example.com</div>
              </div>
              <ul className="py-1">
                <li className="flex items-center p-2 cursor-pointer hover:bg-gray-100">
                  <User size={20} className="mr-2" />
                  Profile
                </li>
                <li className="flex items-center p-2 cursor-pointer hover:bg-gray-100">
                  <Settings size={20} className="mr-2" />
                  Settings
                </li>
                <li className="flex items-center p-2 cursor-pointer hover:bg-gray-100">
                  <LogOut size={20} className="mr-2" />
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Messages Section */}
      <div className="flex-1 p-4 mt-16 overflow-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`my-2 p-2 rounded-md max-w-xs ${
              message.sender === "user" ? "bg-blue-500 text-white ml-auto" : "bg-gray-300 text-black"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="p-4 bg-gray-100 flex items-center">
        <textarea
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          className="flex-1 p-2 border rounded-md"
          placeholder="Type a message..."
          rows={1}
          style={{ maxHeight: "5em", overflow: "hidden" }}
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}