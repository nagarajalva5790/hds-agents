import React from "react";
import { motion } from "framer-motion";

interface AddAgentPopupProps {
  onClose: () => void;
}

export function AddAgentPopup({ onClose }: AddAgentPopupProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-black">
        <h1 className="text-2xl font-bold mb-4 text-center border-b-2 border-gray-300 shadow-sm pb-2">Add Agents</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium  ">
              Agent Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter agent's name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Agent Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter agent's email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium mb-2">
              Role
            </label>
            <select id="role" className="w-full border border-gray-300 p-2 rounded">
              <option value="admin">Admin</option>
              <option value="support">Support</option>
              <option value="manager">Manager</option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 px-4 py-2 rounded"
            >
              Close
            </button>
            <button type="submit" className="bg-[#B1000E] text-white px-4 py-2 rounded">
              Add Agent
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}