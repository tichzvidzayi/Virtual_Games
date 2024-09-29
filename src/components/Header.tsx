import React from "react";

const Header: React.FC = () => {
  return (
    <header
      className="bg-cover bg-center bg-no-repeat h-screen text-white flex flex-col justify-between p-8"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(128, 90, 213, 0.7), rgba(91, 33, 182, 0.7)), url("artboard.png")'
      }}
    >
      {/* Top Navigation Bar */}
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold font-lato flex items-center gap-2">
          <img src="logo.png" alt="Board Logo" className="h-8" />
          <h2>board</h2>
        </div>
        <nav className="flex gap-10 text-base">
          <a href="#products" className="text-white hover:text-purple-300">
            PRODUCTS
          </a>
          <a href="#apps-games" className="text-white hover:text-purple-300">
            APPS & GAMES
          </a>
          <a href="#features" className="text-white hover:text-purple-300">
            FEATURES
          </a>
          <a href="#support" className="text-white hover:text-purple-300">
            SUPPORT
          </a>
          <a href="#about" className="text-white hover:text-purple-300">
            ABOUT
          </a>
          <img src="cart.png" alt="Arrow Icon" className="h-6 ml-4" />
        </nav>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-start text-left w-1/2 mt-20 relative">
        <h1 className="text-white font-ondo font-extrabold text-6xl leading-tight tracking-widest uppercase">
          LET YOUR MIND
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            EXPLORE
          </span>{" "}
          NEW WORLD
        </h1>

        <p className="text-lg mt-6 mb-8 text-gray-200 leading-relaxed font-lato">
          Playing electronic games, whether through consoles, computers, mobile
          phones or another medium altogether. Gaming is a nuanced term that
          suggests regular gameplay, possibly as a hobby.
        </p>

        <div className="flex gap-6">
          <a
            href="#buy"
            className="px-10 py-4 text-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all"
          >
            Buy Now
          </a>
          <a
            href="#play"
            className="px-10 py-4 text-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all"
          >
            Play Now
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex gap-12 mt-12">
        <div className="text-left font-lato">
          <span className="block text-4xl font-bold">300+</span>
          <p className="text-gray-300 text-lg">Unique Style</p>
        </div>
        <div className="text-left font-lato">
          <span className="block text-4xl font-bold">200+</span>
          <p className="text-gray-300 text-lg">Project Finished</p>
        </div>
        <div className="text-left font-lato">
          <span className="block text-4xl font-bold">500+</span>
          <p className="text-gray-300 text-lg">Happy Customers</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
