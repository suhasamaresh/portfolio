"use client";
import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      style={{ backgroundColor: "#151415" }}
    >
      <div className="text-white text-lg font-light drop-shadow-lg text-center max-w-3xl mx-auto">
        Hello, this is the projects component!
      </div>
    </motion.div>
  );
};

export default Projects;
