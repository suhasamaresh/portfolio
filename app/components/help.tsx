import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy, FiCheck } from "react-icons/fi";

const TerminalCommands = () => {
  const [copiedCommand, setCopiedCommand] = useState<null | string>(null);

  const copyToClipboard = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const commands = [
    { name: "about", description: "Complete profile with education, journey & achievements" },
    { name: "projects", description: "Portfolio of digital creations and technical innovations" },
    { name: "skills", description: "Technical expertise and programming proficiency matrix" },
    { name: "work", description: "Professional experience and measurable impact" },
    { name: "leadership", description: "Community leadership and mentoring experience" },
    { name: "contact", description: "Get in touch and connect professionally" },
    { name: "help", description: "Show this command guide" },
    { name: "clear", description: "Clear the terminal screen" },
  ];

  const firstHalf = commands.slice(0, 4);
  const secondHalf = commands.slice(4);

  return (
    <div
      className="
        bg-[#0d0d12]
        p-6
        border-2
        border-green-400
        rounded-xl
        max-w-md
        w-full
        mx-auto
        font-mono
        shadow-lg
        shadow-green-400/30
        transition-colors
        text-sm
      "
      style={{ overflow: "visible" }}
    >
      <div className="text-gray-400 mb-4">
        Use these commands to explore my portfolio:
      </div>
      <div className="ml-4 space-y-2">
        {commands.slice(0, 6).map((command, index) => (
          <motion.div
            key={command.name}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex items-center gap-3 p-2 hover:bg-[#0c1718] rounded transition-colors"
          >
            <button
              onClick={() => copyToClipboard(command.name)}
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              {copiedCommand === command.name ? <FiCheck size={16} /> : <FiCopy size={16} />}
            </button>
            <span className="text-green-400 font-bold">{command.name}</span>
            <span className="text-gray-300">- {command.description}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TerminalCommands;
