import React from "react";
import Button from "./ui/Button";

const GamePreview: React.FC = () => {
  return (
    <section className="text-white py-10 mt-10 px-2">
      {/* Header Section */}

      <div className="text-center mb-10">
        <h1 className="text-white font-ondo font-extrabold text-4xl leading-tight tracking-widest text-center">
          CHOOSE YOUR <br />
          <span className="text-purple-300">FAVORITE</span> GAMES
        </h1>
        <p className="text-lg mt-4 mb-0 text-gray-200 leading-relaxed font-lato text-center">
          Offer sneak peeks and previews of upcoming games, including
        </p>
        <p className="text-lg mt-4 mb-0 text-gray-200 leading-relaxed font-lato text-center">
          trailers, screenshots, and information about release.
        </p>
      </div>

      <div className="flex justify-center gap-6">
        {/* Left Image */}
        <div className="w-1/4">
          <img
            src="guy.png"
            alt="Guy Image"
            className="rounded-md object-cover"
          />
        </div>

        {/* Center Sneak Peek */}
        <div className="w-1/2 p-0 rounded-lg text-center relative shadow-lg">
          <div className="relative mb-10">
            <img
              src="doggo.png"
              alt="Sneak Peeks"
              className="rounded-md object-cover mx-auto"
            />
            <img
              src="logo.png"
              alt="Game Header"
              className="w-1/12 absolute top-4 left-1/2 transform -translate-x-1/2"
            />
          </div>
          <h2 className="absolute bottom-14 left-1/2 transform -translate-x-1/2 z-10 bg-transparent py-1 px-4 text-xl font-bold font-ondo text-white shadow-lg">
            SNEAK PEEKS
          </h2>
        </div>

        {/* Right Image */}
        <div className="w-1/4">
          <img
            src="girl.png"
            alt="Right Image"
            className="rounded-md object-cover"
          />
        </div>
      </div>

      {/* Button Section */}
      <div className="text-center mt-10 space-x-4">
        <Button btnStyle="fill" btnText="VIEW ALL" />
        <Button btnStyle="outline" btnText="PLAY NOW" />
      </div>
      <img src="banner.png" alt="reviews" className="w-full" />
    </section>
  );
};

export default GamePreview;
