import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface AddAgentPopupProps {
  onClose: () => void;
}

export function AddAgentPopup({ onClose }: AddAgentPopupProps) {
  const [agentName, setAgentName] = useState("");
  const [agentEmail, setAgentEmail] = useState("");
  const [role, setRole] = useState("admin");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Agent Added:", { agentName, agentEmail, role });
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg flex flex-col text-black">
        <div className="flex items-center border-b border-gray-300 pb-2 mb-4">
          <h2 className="text-lg font-bold flex-1 text-center">Add Agents</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Agent Name</label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 p-2 rounded text-black"
              placeholder="Enter agent's name"
              value={agentName}
              onChange={(e) => setAgentName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Agent Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-2 rounded text-black"
              placeholder="Enter agent's email"
              value={agentEmail}
              onChange={(e) => setAgentEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium">Role</label>
            <select
              id="role"
              className="w-full border border-gray-300 p-2 rounded text-black"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="support">Support</option>
              <option value="manager">Manager</option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="bg-gray-200 px-4 py-2 rounded">Close</button>
            <button type="submit" className="bg-[#B1000E] text-white px-4 py-2 rounded">Add Agent</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
