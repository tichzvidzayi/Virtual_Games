import React from "react";
import Button from "./ui/Button";

const VirtualR: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#1f003b] to-[#3c0071]">
      {/* Card with reduced padding and overflow */}
      <div className="bg-[#2a054e] rounded-2xl p-4 flex items-center gap-8 max-w-5xl w-full shadow-2xl relative">
        {/* Image container with overflow visible */}
        <div className="w-1/2 relative overflow-visible">
          <img
            src="virtual.png"
            alt="Virtual Gaming"
            className="w-full h-auto rounded-lg shadow-md object-cover -mt-24" // Increased negative margin for more protrusion
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
          <Button btnStyle="outline" btnText="PLAY NOW" />
        </div>
      </div>
    </div>
  );
};

export default VirtualR;
