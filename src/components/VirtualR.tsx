import React from "react";

const VRHeader: React.FC = () => {
  return (
    <header className="relative flex flex-col items-start justify-center h-screen bg-gradient-to-br from-purple-800 to-pink-700 text-white p-8">
      {/* VR Helmet Image */}
      <div className="absolute right-0 top-0 h-full w-full max-w-2xl pointer-events-none">
        <img
          src="girl.png"
          alt="VR Helmet"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Hero Text */}
      <div className="relative max-w-xl text-left z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide uppercase">
          Discover the{" "}
          <span className="text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">
            Virtual
          </span>{" "}
          Reality Gaming
        </h1>
        <p className="mt-4 text-gray-200 leading-relaxed">
          A well-designed gaming header often incorporates elements such as game
          characters, iconic symbols, vibrant colors, and dynamic visuals to
          convey excitement, adventure, and the immersive nature of gaming.
        </p>

        {/* Call to Action Button */}
        <div className="mt-8">
          <a
            href="#play-now"
            className="inline-block px-8 py-4 text-lg font-bold bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:from-pink-500 hover:to-purple-500 transition-all"
          >
            Play Now
          </a>
        </div>
      </div>

      {/* Bottom Action Tags */}
      <div className="absolute bottom-8 left-8 flex gap-8 text-lg font-semibold uppercase">
        <span className="text-pink-300">Action - Packed</span>
        <span className="text-purple-300">Mind - Bending</span>
        <span className="text-pink-300">Collection</span>
      </div>
    </header>
  );
};

export default VRHeader;
