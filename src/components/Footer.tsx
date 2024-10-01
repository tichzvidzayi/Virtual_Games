import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-purple-900 text-white p-8 relative overflow-hidden">
        {/* Color Dodge Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('footerbg.png')",
            mixBlendMode: "color-dodge"
          }}
        ></div>

        {/* Footer Content */}
        <img src="banner.png" alt="reviews" className="w-full" />
        <div className="relative z-10 flex flex-wrap pt-4 justify-between items-start pb-6">
          {/* Brand Section */}
          <div className="flex-1 mr-8 min-w-[250px]">
            <h2 className="flex items-center space-x-2 mb-4">
              <img src="logo.png" alt="Brand Logo" className="w-10 h-10" />
              <span className="font-bold text-2xl">Board</span>
            </h2>
            <p className="text-sm text-gray-300">
              A well-designed gaming header often incorporates elements such as
              game characters, iconic symbols, vibrant colors, and dynamic
              visuals.
            </p>
          </div>

          {/* Company Links */}
          <div className="flex-1 mx-8 min-w-[160px]">
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400 hover:text-white cursor-pointer">
                Products
              </li>
              <li className="text-gray-400 hover:text-white cursor-pointer">
                Apps & Games
              </li>
              <li className="text-gray-400 hover:text-white cursor-pointer">
                Features
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="flex-1 mx-8 min-w-[160px]">
            <h3 className="text-lg font-semibold mb-3">Help</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400 hover:text-white cursor-pointer">
                Support
              </li>
              <li className="text-gray-400 hover:text-white cursor-pointer">
                About
              </li>
              <li className="text-gray-400 hover:text-white cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="flex-1 mx-8 min-w-[160px]">
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400 hover:text-white cursor-pointer">
                Youtube Playlist
              </li>
              <li className="text-gray-400 hover:text-white cursor-pointer">
                How To - Blog
              </li>
              <li className="text-gray-400 hover:text-white cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="relative z-10 flex justify-between items-center gap-6 py-4">
          {[
            "twitch.png",
            "roblox.png",
            "asus.png",
            "canon.png",
            "microsoft.png"
          ].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={logo.split(".")[0]}
              className="h-6 opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mt-4 relative z-10">
          {["facebook.png", "twitter.png", "instagram.png"].map((icon, idx) => (
            <img
              key={idx}
              src={icon}
              alt={icon.split(".")[0]}
              className="w-6 h-6 rounded-full bg-gray-800 p-1 hover:bg-purple-700 transition-all cursor-pointer"
            />
          ))}
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-4 mt-6 text-center text-sm text-gray-400 relative z-10">
          <p>© 2024 Board. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
