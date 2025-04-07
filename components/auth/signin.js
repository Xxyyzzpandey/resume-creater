'use client';

import Link from 'next/link';
import { useState } from 'react';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router=useRouter();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.ok) {
      alert("login successfull")
      router.push("/");
    } else {
      alert("login in failed");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black text-white px-6 py-12">
      <div className="w-full max-w-md bg-black/50 border border-gray-700 rounded-2xl shadow-2xl p-8 backdrop-blur-lg">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Signin To Your Account
        </h1>

        <form className="space-y-6" onSubmit={handleLogin}>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm mb-1 text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg bg-gray-800 border border-gray-600 px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required/>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm mb-1 text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded-lg bg-gray-800 border border-gray-600 px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required/>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm shadow-md hover:scale-105 transition duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Footer Text */}
        <p className="mt-6 text-center text-xs text-gray-400">
          Create Account?{' '}
          <Link href="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
