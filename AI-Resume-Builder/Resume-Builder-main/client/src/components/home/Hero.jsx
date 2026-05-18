import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div className="min-h-screen pb-20">
        {/* Navbar */}
        <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
          <a href="#"></a>

          <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
            <a href="#">Home</a>
            <a href="#features">Features</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#cta">Contact</a>
          </div>

          <div className="flex gap-2">
            <Link
              to="/app?state=register"
              className="hidden md:block px-6 py-2 bg-purple-600 hover:bg-purple-700 active:scale-95 transition-all rounded-full text-white"
              hidden={user}
            >
              Get started
            </Link>

            <Link
              to="/app?state=login"
              className="hidden md:block px-6 py-2 border rounded-full text-slate-700 hover:bg-slate-50"
              hidden={user}
            >
              Login
            </Link>

            <Link
              to="/app"
              className="hidden md:block px-8 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white"
              hidden={!user}
            >
              Dashboard
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden"
          >
            ☰
          </button>
        </nav>

        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">

          <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-10 md:leading-[70px]">
            AI-Powered Resume Builder
          </h1>

          <p className="max-w-md text-center text-base my-7">
            Role-Specific Content Suggestions for students and job seekers.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="bg-purple-600 text-white rounded-full px-9 h-12 flex items-center"
            >
              Build Resume
            </Link>

            <button className="border rounded-full px-7 h-12 text-slate-700">
              AI Suggestions
            </button>
          </div>

          {/* 👇 KEEP ONLY THIS TEXT */}
          <p className="text-center mt-10 text-gray-500">
            Developed by Kavya D
          </p>

        </div>
      </div>
    </>
  );
};

export default Hero;