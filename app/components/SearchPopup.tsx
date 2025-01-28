import React from "react";
import { motion } from "framer-motion";

interface SearchPopupProps {
  onClose: () => void;
}

export function SearchPopup({ onClose }: SearchPopupProps) {
  const searchHistory = ["Agent Smith", "Agent Johnson", "Support Query"];

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Search</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            Close
          </button>
        </div>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded mb-4"
          placeholder="Search..."
        />
        <h3 className="text-sm font-medium mb-2">Search History</h3>
        <ul className="space-y-2">
          {searchHistory.map((item, index) => (
            <li key={index} className="border-b border-gray-200 pb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
