import React from "react";

const VirtualR: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#1f003b] to-[#3c0071]">
      <div className="bg-[#2a054e] rounded-2xl p-12 flex items-center gap-8 max-w-5xl w-full shadow-2xl relative">
        {/* Image aligned to the left */}
        <div className="w-1/2">
          <img
            src="virtual.png"
            alt="Virtual Gaming"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Content occupying the right half */}
        <div className="w-1/2">
          <h1 className="text-white font-extrabold text-4xl leading-tight tracking-wide mb-4">
            DISCOVER THE{" "}
            <span className="text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">
              VIRTUAL
            </span>{" "}
            REALITY GAMING
          </h1>
          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
            A well-designed gaming header often incorporates elements such as
            game characters, iconic symbols, vibrant colors, and dynamic visuals
            to convey excitement, adventure, and the immersive nature of gaming.
          </p>
          {/* Button aligned to the left but part of the right-side content */}
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full px-8 py-4 font-bold text-lg hover:from-purple-500 hover:to-pink-500 transition-all">
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VirtualR;
