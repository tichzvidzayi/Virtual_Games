import React from "react";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is properly configured

interface Game {
  title: string;
  description: string;
}

const games: Game[] = [
  { title: "CyberPunk 2077", description: "Action-packed sci-fi game" },
  { title: "The Witcher 3", description: "Fantasy RPG" },
  { title: "God of War", description: "Norse mythology action-adventure" }
];

const TopGames: React.FC = () => {
  return (
    <section className="p-12 bg-[#1b1b3a] text-white">
      <h2 className="text-4xl text-center font-['OndoFontCompressed']">
        Welcome to the Top Games
      </h2>
      <div className="flex justify-center gap-5 flex-wrap mt-8">
        {games.map((game, index) => (
          <div
            key={index}
            className="bg-[#242447] p-5 rounded-lg w-[200px] text-center"
          >
            <h3 className="text-xl font-bold">{game.title}</h3>
            <p className="text-sm mt-2">{game.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopGames;
