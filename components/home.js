
'use client';

import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white relative overflow-hidden px-6 py-20 flex flex-col items-center justify-center">
      {/* Background Glow Circles */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-600 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-pink-500 rounded-full opacity-30 blur-3xl animate-pulse delay-200"></div>

      <div className="z-10 max-w-6xl mx-auto text-center space-y-10">
        {/* Big Bold Gradient Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-text-glow">
          Build Jaw-Dropping Resumes
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Ditch the boring. Create a stunning, professional resume in minutes — “Stand Out. Get Noticed. Get Hired.”
        </p>

        {/* Call to Action Button */}
        <Link
          href="/editor"
          className="inline-block mt-4 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-lg font-bold shadow-[0_0_30px_rgba(99,102,241,0.6)] transition hover:scale-105 hover:shadow-[0_0_40px_rgba(147,51,234,0.8)] duration-300"
        >
          🚀 Start Building Your Resume →
        </Link>
      </div>

      {/* Resume Preview Section */}
      <div className="mt-20 w-full flex justify-center px-4">
        <div className="relative group w-full max-w-3xl">
          {/* Glowing border effect */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-fuchsia-500 via-blue-500 to-sky-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500" />

          {/* Image container */}
          <div className="relative bg-black/40 backdrop-blur-lg border border-gray-700 rounded-3xl p-3 shadow-2xl">
            <img
              src="/rsimage.png"
              alt="Resume Preview"
              className="rounded-xl w-full border border-gray-600 shadow-xl animate-float hover:scale-[1.02] hover:rotate-[0.5deg] transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 text-center text-xs text-gray-500 z-10">
        &copy; {new Date().getFullYear()} CreResume — Built to Impress.
      </footer>

      {/* Extra Animation Keyframes */}
      <style jsx>{`
        @keyframes text-glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.2),
                         0 0 20px rgba(0, 255, 255, 0.2),
                         0 0 40px rgba(0, 128, 255, 0.1);
          }
          50% {
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.4),
                         0 0 30px rgba(0, 255, 255, 0.3),
                         0 0 60px rgba(0, 128, 255, 0.2);
          }
        }

        .animate-text-glow {
          animation: text-glow 4s infinite ease-in-out;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}

