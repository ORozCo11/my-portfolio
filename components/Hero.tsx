
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-between px-6 max-w-6xl mx-auto">

      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 max-w-xl"
      >
        <h1 className="text-6xl font-bold leading-tight">
          Hi, I'm <span className="text-indigo-500">Orozco</span>
        </h1>

        <p className="text-zinc-400 text-lg">
          Full-stack developer crafting modern, scalable, and interactive web
          experiences.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-zinc-700 rounded-lg hover:border-indigo-500 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE IMAGE PLACEHOLDER */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hidden md:block"
      >
        <div className="w-80 h-80 bg-zinc-800 rounded-2xl flex items-center justify-center text-zinc-500">
          Your Image Here
        </div>
      </motion.div>
    </section>
  );
}