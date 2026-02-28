"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 backdrop-blur bg-black/40 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <Link href="/" className="font-bold text-xl">
          OROZCO
        </Link>

        <div className="flex gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`hover:text-indigo-400 transition ${
                active === link.name ? "text-indigo-400" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}