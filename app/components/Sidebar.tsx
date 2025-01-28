import { useState, useEffect } from "react";
import { ListCollapse, UserCircle, Plus, Search } from "lucide-react";
import Image from "next/image";
import { Coffee, Code, Book, Music, Film } from "lucide-react";

import { AddAgentPopup } from "./AddAgentPopup";
import { SearchPopup } from "./SearchPopup";

export function Sidebar({ isSidebarOpen, toggleSidebar }: { isSidebarOpen: boolean; toggleSidebar: () => void }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [isAddAgentPopupVisible, setAddAgentPopupVisible] = useState(false);
  const [isSearchPopupVisible, setSearchPopupVisible] = useState(false);

  const openAddAgentPopup = () => setAddAgentPopupVisible(true);
  const closeAddAgentPopup = () => setAddAgentPopupVisible(false);

  const openSearchPopup = () => setSearchPopupVisible(true);
  const closeSearchPopup = () => setSearchPopupVisible(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCollapse = () => {
    toggleSidebar();
  };

  const agents = [
    { name: "Siemens' Industrial Copilot", icon: <Coffee size={24} /> },
    { name: "SAP AI Business Services", icon: <Code size={24} /> },
    { name: "Google Duplex for Business", icon: <Book size={24} /> },
    { name: "Microsoft Azure AI for Manufacturing", icon: <Music size={24} /> },
    { name: "IBM Watson AIOps", icon: <Film size={24} /> },
  ];

  return (
    <div
      className={`bg-[#B1000E] text-white flex flex-col transition-all duration-300 ${!isSidebarOpen ? "hidden" : "w-64"
        } ${isMobile ? "absolute z-50 h-full" : "relative"} ${isSidebarOpen ? "block" : "hidden"}`}
    >
      {/* Top Section */}
      <div className="py-4 px-4 flex items-center justify-between">
        {/* Breadcrumbs Icon */}
        <div className="cursor-pointer" onClick={toggleCollapse}>
          <ListCollapse size={28} />
        </div>

        {/* Search and Add Agent Icons */}
        <div className="flex gap-4">
          <Search size={24} className="cursor-pointer" onClick={openSearchPopup} />
          <Plus size={24} className="cursor-pointer" onClick={openAddAgentPopup}/>
        </div>
      </div>

      {/* Logo and App Name */}
      <div className="flex items-center justify-center px-4 mt-4">
        <Image src="/Hitachi_logo.svg" alt="HDS Agents" width={40} height={40} />
        <span className="text-lg font-extrabold ml-2 shadow-lg">HDS AGENTS</span>
      </div>

      {/* Agents List */}
      <ul className="space-y-2 p-4">
        {agents.map((agent, index) => (
          <li key={index}>
            <div
              className={`cursor-pointer hover:bg-[#99000C] p-2 rounded flex items-center space-x-2`}
            >
              {agent.icon}
              <span className="font-bold">{agent.name}</span>
            </div>
          </li>
        ))}
      </ul>
      {isAddAgentPopupVisible && <AddAgentPopup onClose={closeAddAgentPopup} />}
      {isSearchPopupVisible && <SearchPopup onClose={closeSearchPopup} />}
    </div>
  );
}