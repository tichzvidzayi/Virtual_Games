import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-900 text-white p-12 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('footerbg.png')" }}
      ></div>

      <div className="relative z-10 flex flex-wrap justify-between pb-8">
        <div className="flex-1 mr-8 min-w-[250px]">
          <h2
            className="flex items-center"
            style={{
              width: "127px",
              height: "44px",
              left: "168.3px",
              fontFamily: "Ondo",
              fontWeight: 800,
              fontSize: "39.78px"
            }}
          >
            <img
              src="logo.png"
              alt="Brand Logo"
              className="mr-2"
              style={{ width: "59.15px", height: "44.97px" }}
            />
            Board
          </h2>
          <br></br>

          <p className="font-lato text-custom-base font-normal leading-custom-lh tracking-custom-ls text-left">
            A well-designed gaming header often incorporates elements such as
            game characters, iconic symbols, vibrant colors, and dynamic
            visuals.
          </p>
        </div>

        <div className="flex-1 mx-8 min-w-[200px]">
          <h3 className="text-lg font-semibold mb-5">COMPANY</h3>
          <p className="text-sm text-gray-400 mb-4">Products</p>
          <p className="text-sm text-gray-400 mb-4">Apps & Games</p>
          <p className="text-sm text-gray-400 mb-4">Features</p>
        </div>

        <div className="flex-1 mx-8 min-w-[200px]">
          <h3 className="text-lg font-semibold mb-5">HELP</h3>
          <p className="text-sm text-gray-400 mb-4">Support</p>
          <p className="text-sm text-gray-400 mb-4">About</p>
          <p className="text-sm text-gray-400 mb-4">Contact Us</p>
        </div>

        {/* Resources Section */}
        <div className="flex-1 mx-8 min-w-[200px]">
          <h3 className="text-lg font-semibold mb-5">RESOURCES</h3>
          <p className="text-sm text-gray-400 mb-4">Youtube Playlist</p>
          <p className="text-sm text-gray-400 mb-4">How To - Blog</p>
          <p className="text-sm text-gray-400 mb-4">Terms & Conditions</p>
        </div>
      </div>

      {/* Logos Section */}
      <div className="flex justify-between items-center gap-8 flex-wrap py-5 relative z-10">
        <img
          src="twitch.png"
          alt="Twitch"
          className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
        <img
          src="roblox.png"
          alt="Roblox"
          className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
        <img
          src="asus.png"
          alt="Asus"
          className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
        <img
          src="canon.png"
          alt="Canon"
          className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
        <img
          src="microsoft.png"
          alt="Microsoft"
          className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Social Media Section */}
      <div className="flex justify-center gap-6 mt-5 relative z-10">
        <img
          src="facebook.png"
          alt="Facebook"
          className="w-6 cursor-pointer hover:opacity-80 transition-opacity"
        />
        <img
          src="twitter.png"
          alt="Twitter"
          className="w-6 cursor-pointer hover:opacity-80 transition-opacity"
        />
        <img
          src="instagram.png"
          alt="Instagram"
          className="w-6 cursor-pointer hover:opacity-80 transition-opacity"
        />
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 pt-5 mt-5 text-center text-sm text-gray-400 relative z-10">
        <p>© 2024 Board. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
