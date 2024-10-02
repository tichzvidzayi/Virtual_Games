import React from "react"; // can be skipped
import Button from "./ui/Button";

export default function HeaderSection() {
  const records = [
    { number: "300+", title: "Unique Style" },
    { number: "200+", title: "Project Finished" },
    { number: "500+", title: "Happy Customer" }
  ];

  return (
    <>
      <header className='h-[100vh] w-full bg-[url("artboard.png")] lg:bg-cover mix-blend-color-dodge flex items-center justify-start bg-[100% 10%] bg-no-repeat'>
        <div className="container flex flex-col gap-5 flex-wrap px-4 lg:px-12">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold font-lato flex items-center gap-2">
              <img src="logo.png" alt="Board Logo" className="h-8" />
              <h2>board</h2>
            </div>
            <nav className="flex gap-10 text-base">
              {/*header menu items */}
              <a href="#products" className="text-white hover:text-purple-300">
                PRODUCTS
              </a>

              <a
                href="#apps-games"
                className="text-white hover:text-purple-300"
              >
                APPS & GAMES
              </a>
              <a href="#features" className="text-white hover:text-purple-300">
                FEATURES
              </a>
              <a href="#support" className="text-white hover:text-purple-300">
                SUPPORT
              </a>
              <a href="#about" className="text-white hover:text-purple-300">
                ABOUT
              </a>
              <img src="cart.png" alt="Cart Icon" className="h-6 ml-4" />
            </nav>
          </div>

          <h1 className="h1 w-full lg:w-1/2 font-ondo">
            Let your mind <span className="gradient-text">explore</span> new
            world
          </h1>
          <p className="w-full lg:w-1/2">
            Playing electronic games, whether through consoles, computers,
            mobile phones, or another medium altogether. Gaming is a nuanced
            term that suggests regular gameplay, possibly as a hobby.
          </p>

          <div className="flex gap-5 font-ondo">
            <Button btnStyle="fill" btnText="Buy Now" />
            <Button btnStyle="outline" btnText="Play Now" />
          </div>

          <div className="flex gap-8 mt-12 justify-start">
            {records.map((record) => (
              <div key={record.number} className="text-center">
                <p
                  className={`h2  font-ondo ${
                    record.number.includes("200") ? "gradient-text" : ""
                  }`}
                >
                  {record.number}
                </p>
                <p className=" font-lato">{record.title}</p>
              </div>
            ))}
          </div>
        </div>
      </header>
      {/* add the line_image underneath the hearder container */}
      <div className=" relative flex items-stretch -mt-9">
        <img
          src="line.png"
          alt="line_image"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}
