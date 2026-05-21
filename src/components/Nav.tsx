import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <span className="font-serif font-bold text-[#1a2b45] text-2xl tracking-tight">
            Clarev
          </span>
          <span className="font-serif font-bold text-[#2563a8] text-2xl tracking-tight">
            AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm transition-colors ${
                isActive("/") ? "text-[#1a2b45] font-semibold" : "text-muted-foreground hover:text-[#1a2b45]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`text-sm transition-colors ${
                isActive("/services") ? "text-[#1a2b45] font-semibold" : "text-muted-foreground hover:text-[#1a2b45]"
              }`}
            >
              Services
            </Link>
            <Link
              href="/pricing"
              className={`text-sm transition-colors ${
                isActive("/pricing") ? "text-[#1a2b45] font-semibold" : "text-muted-foreground hover:text-[#1a2b45]"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/#faq"
              className="text-sm text-muted-foreground hover:text-[#1a2b45] transition-colors"
            >
              FAQ
            </Link>
          </div>
          <Link
            href="/#contact"
            className="bg-[#1a2b45] text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-[#1a2b45]/90 transition-colors"
            data-testid="nav-contact-button"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-[#1a2b45]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-border p-4 flex flex-col gap-4">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base block p-2 ${
              isActive("/") ? "text-[#1a2b45] font-semibold bg-gray-50 rounded-md" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base block p-2 ${
              isActive("/services") ? "text-[#1a2b45] font-semibold bg-gray-50 rounded-md" : "text-muted-foreground"
            }`}
          >
            Services
          </Link>
          <Link
            href="/pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base block p-2 ${
              isActive("/pricing") ? "text-[#1a2b45] font-semibold bg-gray-50 rounded-md" : "text-muted-foreground"
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/#faq"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base block p-2 text-muted-foreground"
          >
            FAQ
          </Link>
          <Link
            href="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-[#1a2b45] text-white px-5 py-3 rounded-md text-base font-medium text-center mt-2 block"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
