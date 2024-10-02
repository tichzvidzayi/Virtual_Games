import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <div className='bg-[url("footerbg.png")] w-full bg-cover bg-no-repeat mix-blend-color-dodge py-10 px-6 relative'>
        {/* Attach a line_image banner */}
        <img
          src="banner.png"
          alt="reviews"
          className="w-full pb-8 mb-10 mix-blend-color-dodge absolute top-0 left-0 z-20"
        />

        <div className="container pt-6 px-2 !lg:px-10 gap-6 md:gap-10 relative z-10">
          <div className="flex flex-wrap justify-start items-start pt-6 pb-6 gap-2 md:gap-4 lg:gap-4">
            <div className="flex-1 min-w-[250px] space-y-4">
              <div className="w-96 h-auto p-4 rounded-lg">
                <h2 className="flex px-4 items-center space-x-2 mb-4">
                  <img src="logo.png" alt="Brand Logo" className="w-10 h-10" />
                  <span className="font-bold text-2xl text-white font-ondo">
                    Board
                  </span>
                </h2>
                <p className="text-sm font-lato px-4 text-white leading-relaxed">
                  A well-designed gaming header often incorporates elements such
                  as game characters, iconic symbols, vibrant colors, and
                  dynamic visuals.
                </p>
              </div>
            </div>

            <div className="flex-0 min-w-[100px] space-y-4 px-5">
              <h3 className="text-lg font-semibold font-lato mb-3 text-white">
                Company
              </h3>
              <ul className="space-y-6 text-sm">
                <li className="text-white hover:text-white cursor-pointer">
                  Products
                </li>
                <li className="text-white hover:text-white cursor-pointer">
                  Apps & Games
                </li>
                <li className="text-white hover:text-white cursor-pointer">
                  Features
                </li>
              </ul>
            </div>

            <div className="flex-2 min-w-[100px] space-y-4 px-5 ">
              <h3 className="text-lg font-semibold mb-3 text-white">Help</h3>
              <ul className="space-y-6 text-sm">
                <li className="text-white hover:text-white cursor-pointer">
                  Support
                </li>
                <li className="text-white hover:text-white cursor-pointer">
                  About
                </li>
                <li className="text-white hover:text-white cursor-pointer">
                  Contact Us
                </li>
              </ul>
            </div>

            <div className="flex-1 min-w-[100px] space-y-4 ">
              <h3 className="text-lg font-semibold mb-3 text-white">
                Resources
              </h3>
              <ul className="space-y-6 text-sm">
                <li className="text-white hover:text-white cursor-pointer">
                  Youtube Playlist
                </li>
                <li className="text-white hover:text-white cursor-pointer">
                  How To - Blog
                </li>
                <li className="text-white hover:text-white cursor-pointer">
                  Terms & Conditions
                </li>
              </ul>
            </div>
          </div>

          {/* Partners and sponsors logos */}
          <div className="relative z-10 flex justify-start items-center gap-20 py-4 px-8 flex-wrap">
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
                className="h-6"
              />
            ))}
          </div>

          {/* Social images icons */}
          <div className="flex justify-start items-center pt-10 py-4 px-8">
            <div className="flex gap-6">
              {["facebook.png", "twitter.png", "instagram.png"].map(
                (icon, idx) => (
                  <img
                    key={idx}
                    src={icon}
                    alt={icon.split(".")[0]}
                    className="w-8 h-8 rounded-full"
                  />
                )
              )}
            </div>

            <div className="text-sm text-white ml-8">
              <p>© 2024 Board. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
