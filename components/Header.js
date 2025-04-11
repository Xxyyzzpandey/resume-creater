
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-800/80 backdrop-blur-md border-b border-gray-700 shadow-lg">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 2xl:max-w-screen-2xl">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent transition-all duration-300 hover:brightness-110">
            CreResume
          </span>
        </Link>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
        <Link
            href="/editor"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition"
          >
            Build Resume
          </Link>
          {session ? (
            <button
              onClick={() => signOut()}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm transition"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/signup"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm transition"
            >
              Login/Signup
            </Link>
          )}
          
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link
            href="/editor"
            className="block py-2 text-sm text-gray-300 hover:text-white transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Build Resume
          </Link>
          {session ? (
            <button
              onClick={() => signOut()}
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Logout
            </button>
          ) : (
            <Link href="/signup" className="text-sm text-gray-300 hover:text-white transition">
              Login/Signup
            </Link>
          )}
        </div>
      )}
    </header>
  );
};


export default Header;
