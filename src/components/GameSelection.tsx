import React, { useState } from "react";

// Sample data for game cards
const games = [
  {
    title: "Core Philosophies",
    author: "Cameron Williamson",
    img: "game1.jpg"
  },
  { title: "Core Philosophies", author: "Dianne Russell", img: "game2.jpg" },
  { title: "Core Philosophies", author: "Jane Cooper", img: "game3.jpg" },
  { title: "Core Philosophies", author: "Cody Fisher", img: "game4.jpg" },
  { title: "Core Philosophies", author: "Wade Warren", img: "game5.jpg" },
  { title: "Core Philosophies", author: "Robert Fox", img: "game6.jpg" }
];

const GameSelection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("newest");

  return (
    <section className="bg-[#151530] py-12 text-white text-center">
      <h2 className="text-4xl mb-8 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
        WELCOME TO THE TOP
      </h2>

      {/* Promo Card Section */}
      <div className="bg-[#1f1f3b] rounded-xl p-10 mb-12 flex items-center gap-8">
        <img
          src="transformed.png"
          alt="Virtual Gaming"
          className="w-64 rounded-lg"
        />
        <div className="text-left">
          <h3 className="text-3xl mb-4">DISCOVER THE VIRTUAL REALITY GAMING</h3>
          <p className="text-lg text-gray-400 mb-6">
            A well-designed gaming header often incorporates elements such as
            game characters, iconic symbols, vibrant colors, and dynamic visuals
            to convey excitement, adventure, and the immersive nature of gaming.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full px-6 py-3 hover:from-blue-500 hover:to-pink-500">
            Play Now
          </button>
        </div>
      </div>

      {/* Tabs for selecting game categories */}
      <div className="flex justify-center gap-6 mb-10">
        <button
          className={`px-6 py-2 rounded-full ${
            activeTab === "newest"
              ? "bg-pink-500 text-white"
              : "bg-[#202040] text-gray-400"
          } hover:bg-pink-500 hover:text-white`}
          onClick={() => setActiveTab("newest")}
        >
          NEWEST GAMES
        </button>
        <button
          className={`px-6 py-2 rounded-full ${
            activeTab === "latest"
              ? "bg-pink-500 text-white"
              : "bg-[#202040] text-gray-400"
          } hover:bg-pink-500 hover:text-white`}
          onClick={() => setActiveTab("latest")}
        >
          LATEST GAMES
        </button>
        <button
          className={`px-6 py-2 rounded-full ${
            activeTab === "fight"
              ? "bg-pink-500 text-white"
              : "bg-[#202040] text-gray-400"
          } hover:bg-pink-500 hover:text-white`}
          onClick={() => setActiveTab("fight")}
        >
          FIGHT GAMES
        </button>
        <button
          className={`px-6 py-2 rounded-full ${
            activeTab === "sport"
              ? "bg-pink-500 text-white"
              : "bg-[#202040] text-gray-400"
          } hover:bg-pink-500 hover:text-white`}
          onClick={() => setActiveTab("sport")}
        >
          SPORT GAMES
        </button>
      </div>

      {/* Grid of game cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <div
            key={index}
            className="bg-[#202040] rounded-lg p-5 text-left relative transition-transform transform hover:scale-105"
          >
            <img
              src={game.img}
              alt={game.title}
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl mb-2">{game.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{game.author}</p>
            <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full px-6 py-2 absolute bottom-5 hover:from-blue-500 hover:to-pink-500">
              LIVE DEMO
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameSelection;
