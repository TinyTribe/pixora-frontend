"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed left-1/2 top-6 -translate-x-1/2 w-full max-w-4xl flex items-center justify-between px-4 sm:px-6 py-2 bg-[#10241C] rounded-full shadow-md border border-black/10 z-50">
      <div className="flex items-center gap-3">
        <Image src="/logo.svg" alt="Pixora Logo" width={82} height={28} priority className="sm:w-[102px] sm:h-[32px] w-[82px] h-[28px]" />
        <span className="text-2xl text-emerald-500 font-logo hidden">Pixora</span>
        <span className="mx-2 sm:mx-3 text-2xl text-emerald-500 hidden sm:inline">•</span>
        <ul className="hidden sm:flex gap-6 text-sm text-white/90">
          <li><a href="#" className="hover:text-emerald-400 transition">How it works</a></li>
          <li><a href="#" className="hover:text-emerald-400 transition">Find a designer</a></li>
          <li><a href="#" className="hover:text-emerald-400 transition">Find jobs</a></li>
        </ul>
      </div>
      <div className="hidden sm:flex gap-4 items-center">
        <a href="#" className="text-white/80 hover:text-emerald-400 transition">Contact</a>
        <button className="bg-emerald-400 hover:bg-emerald-500 text-black px-5 py-2 rounded-full font-semibold transition shadow-none cursor-pointer">Connect Wallet</button>
      </div>
      {/* Hamburguesa mobile */}
      <button className="sm:hidden p-2" onClick={() => setOpen(true)} aria-label="Open menu">
        <Menu className="w-7 h-7 text-emerald-400" />
      </button>
      {/* Drawer mobile fullscreen con animación y overlay real */}
      {open && (
        <div className="fixed inset-0 z-[999] flex flex-col justify-center items-center bg-black/90 animate-fadeIn h-screen">
          <button
            className="absolute top-6 right-6 z-10"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-8 h-8 text-emerald-400" />
          </button>
          <div className="flex flex-col justify-center items-center gap-8 animate-slideUp">
            <ul className="flex flex-col gap-6 text-2xl text-white font-medium items-center">
              <li><a href="#" className="hover:text-emerald-400 transition">How it works</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Find a designer</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Find jobs</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Contact</a></li>
            </ul>
            <button className="bg-emerald-400 hover:bg-emerald-500 text-black px-8 py-3 rounded-full font-semibold transition shadow-none cursor-pointer text-lg mt-4">
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// Animaciones CSS necesarias (agrega en tu global.css o tailwind.config.js):
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// .animate-fadeIn { animation: fadeIn 0.2s ease; }
// @keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
// .animate-slideUp { animation: slideUp 0.3s cubic-bezier(.4,0,.2,1); } 