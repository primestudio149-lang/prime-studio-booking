import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Sparkles, Menu, X, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: createPageUrl("Home") },
    { name: "About", path: createPageUrl("About") },
    { name: "Booking", path: createPageUrl("Booking") },
    { name: "Social", path: createPageUrl("Social") },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-pink-500/30 transition-all duration-300">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Prime Studio
                </h1>
                <p className="text-xs text-gray-400 hidden md:block">Digital Excellence</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    isActive(item.path)
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              <Link to={createPageUrl("Booking")}>
                <Button className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white border-0 shadow-lg shadow-blue-500/20">
                  Book Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? "bg-gradient-to-r from-blue-500/20 to-pink-500/20 text-white border border-blue-500/30"
                        : "text-gray-400 hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to={createPageUrl("Booking")} onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white border-0">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-16 md:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/10 mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-950/20" />
        
        <div className="relative container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold">Prime Studio</h2>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Crafting professional, affordable, and modern websites for everyone.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/primestudio000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 border border-white/10 flex items-center justify-center transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="mailto:primestudio149@gmail.com"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 border border-white/10 flex items-center justify-center transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2 text-gray-400">
                  <Mail className="w-4 h-4 mt-0.5 text-blue-400" />
                  <a href="mailto:primestudio149@gmail.com" className="hover:text-white transition-colors">
                    primestudio149@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2 text-gray-400">
                  <Instagram className="w-4 h-4 mt-0.5 text-pink-400" />
                  <a href="https://instagram.com/primestudio000" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    @primestudio000
                  </a>
                </li>
                <li className="flex items-start gap-2 text-gray-400">
                  <span className="text-blue-400">📍</span>
                  <span>India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Prime Studio. All rights reserved.</p>
            <p className="mt-2">
              Built with passion by the Prime Studio team
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
