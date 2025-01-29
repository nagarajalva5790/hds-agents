import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, X, Clock } from "lucide-react";

interface SearchPopupProps {
  onClose: () => void;
}

export function SearchPopup({ onClose }: SearchPopupProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const searchHistory = [
    { title: "ChatGPT UI Next.js", date: "Yesterday" },
    { title: "Adiyogi Caption Idea", date: "Previous 30 Days" },
    { title: "Synonyms for Brother", date: "Previous 30 Days" },
    { title: "Return to Cult Fitness", date: "Previous 30 Days" },
    { title: "Creative Birthday Wishes", date: "Previous 30 Days" },
  ];

  const filteredHistory = searchHistory.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg h-5/6 flex flex-col">
        <div className="flex items-center border-b border-gray-300 pb-2 mb-2">
          <Search className="text-gray-500 mr-2" size={18} />
          <input
            type="text"
            className="w-full border-none focus:outline-none text-black"
            placeholder="Search chats..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <X size={18} />
          </button>
        </div>

        <h3 className="text-sm font-medium text-gray-600 mb-2">Search History</h3>
        <ul className="space-y-2 flex-1 overflow-auto">
          {filteredHistory.length > 0 ? (
            filteredHistory.map((item, index) => (
              <li key={index} className="flex items-center text-gray-800">
                <Clock className="text-gray-400 mr-2" size={16} />
                <div className="flex-1">
                  <p className="text-sm">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-500 text-sm text-center">No results found</p>
          )}
        </ul>
      </div>
    </motion.div>
  );
}
