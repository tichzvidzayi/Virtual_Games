import React from "react";

const GamePreview: React.FC = () => {
  return (
    <section className="bg-purple-900 text-white py-10 mt-10">
      <div className="flex justify-center mb-10">
        <img
          src={"../path/to/your/image.png"}
          alt="Game Header"
          className="w-1/2 rounded-md object-cover"
        />
      </div>
      {/* Header Section */}
      <div className="text-center mb-10">
        <div className="text-center mb-10">
          <h1 className="text-white font-ondo font-extrabold text-4xl leading-tight tracking-widest text-center">
            CHOOSE YOUR <br></br>
            <span className="text-purple-500">FAVORITE</span> GAMES
          </h1>
          <p className="text-lg mt-4 mb-0 text-gray-200 leading-relaxed font-lato text-center">
            Offer sneak peeks and previews of upcoming games, including
          </p>
          <p className="text-lg mt-4 mb-0 text-gray-200 leading-relaxed font-lato text-center">
            trailers, screenshots, and information about release.
          </p>
        </div>
      </div>
      {/* Card Section */}
      <div className="flex justify-center gap-6">
        {/* Left Image */}
        <div className="w-1/4">
          <img
            src="https://via.placeholder.com/150"
            alt="Left Image"
            className="rounded-md object-cover"
          />
        </div>

        {/* Center Sneak Peek */}
        <div className="w-1/2 bg-gradient-to-r from-pink-500 to-blue-500 p-4 rounded-lg text-center relative">
          <img
            src="https://via.placeholder.com/250"
            alt="Sneak Peeks"
            className="rounded-md object-cover mx-auto"
          />
          <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-700 py-2 px-6 text-sm font-bold rounded-full text-white shadow-lg">
            SNEAK PEEKS
          </h2>
        </div>

        {/* Right Image */}
        <div className="w-1/4">
          <img
            src="https://via.placeholder.com/150"
            alt="Right Image"
            className="rounded-md object-cover"
          />
        </div>
      </div>
      {/* Button Section */}
      <div className="text-center mt-10 space-x-4">
        <button className="bg-purple-700 hover:bg-purple-600 py-2 px-6 text-white font-bold rounded-full">
          VIEW ALL
        </button>
        <button className="bg-pink-500 hover:bg-pink-400 py-2 px-6 text-white font-bold rounded-full">
          PLAY NOW
        </button>
      </div>
    </section>
  );
};

export default GamePreview;
