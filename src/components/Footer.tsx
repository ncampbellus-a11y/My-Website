import React from "react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#1a2b45] text-white pt-12 pb-6 px-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <Link href="/" className="flex items-center gap-1">
            <span className="font-serif font-bold text-white text-2xl tracking-tight">
              Clarev
            </span>
            <span className="font-serif font-bold text-[#7eb3e8] text-2xl tracking-tight">
              AI
            </span>
          </Link>

          <div className="flex flex-wrap gap-6 text-sm text-gray-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>

          <div className="text-sm text-gray-300 flex flex-col gap-1">
            <a href="mailto:hello@clarevai.com" className="hover:text-white transition-colors">hello@clarevai.com</a>
            <span>ClarevAI.com</span>
          </div>
        </div>

        <div className="border-t border-[#2a3b55] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2025 ClarevAI. All rights reserved.</p>
          <p className="font-medium tracking-wide text-gray-300">Automate. Convert. Scale.</p>
        </div>
      </div>
    </footer>
  );
}
