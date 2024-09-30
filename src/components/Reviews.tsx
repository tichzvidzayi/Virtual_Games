import React, { useState } from "react";

interface Reviews {
  text: string;
  img: string;
  name: string;
  company: string;
}

export default function TestimonialsCarouselSection() {
  const testimonials: Reviews[] = [
    {
      text: "One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance.",
      img: "arlene.png",
      name: "Arlene McCoy",
      company: "McDonald's"
    },
    {
      text: "Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.",
      img: "avatar2.png",
      name: "Kathryn Murphy",
      company: "General Electric"
    },
    {
      text: "The support on this platform is exceptional. They are fast, reliable, and always ready to assist. The resources available are also top-notch, ensuring gamers get the best experience possible.",
      img: "avatar3.png",
      name: "Ronald Richards",
      company: "Google"
    },
    {
      text: "I love the design of the platform. It’s user-friendly, and the dark mode makes it easy on the eyes during long gaming sessions. Highly recommend for gamers of all levels!",
      img: "avatar4.png",
      name: "Esther Howard",
      company: "Amazon"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Explicitly specify the type of 'index' as 'number'
  const handleDotClick = (index: number) => {
    setCurrentIndex(index * 2);
  };

  return (
    <div className="container py-10 px-8">
      {" "}
      {/* Increased padding to the left and right */}
      <div className="testimonials flex gap-x-8">
        {testimonials
          .slice(currentIndex, currentIndex + 2)
          .map((testimonial, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 rounded-lg border p-12 relative overflow-visible px-8"
            >
              {/* Envelopes positioned to protrude out of the container */}
              <div className="flex space-x-4 absolute -top-[40px] right-0">
                <img
                  src="envelope1.png"
                  className="w-[50px]"
                  alt="envelope 1"
                />
                <img
                  src="envelope2.png"
                  className="w-[50px]"
                  alt="envelope 2"
                />
              </div>

              <div className="space-y-2 mt-10">
                <div className="flex gap-1">
                  <img src="star.png" alt="plain star icon" />
                  <img src="star.png" alt="plain star icon" />
                  <img src="star.png" alt="plain star icon" />
                  <img src="star.png" alt="plain star icon" />
                  <img src="star.png" alt="plain star icon" />
                </div>
                <p className="text-[16px]">{testimonial.text}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <div className="flex gap-x-3 items-center">
                  <img
                    src={testimonial.img}
                    className="w-[60px] object-contain"
                    alt={testimonial.name}
                  />
                  <div className="leading-relaxed">
                    <p>{testimonial.name}</p>
                    <p className="text-[10px]">{testimonial.company}</p>
                  </div>
                </div>
                <p className="flex gap-1 text-[14.65px] items-center">
                  <span>
                    <img
                      src="verified.png"
                      className="w-[24.77px]"
                      alt="verified badge"
                    />
                  </span>
                  Verified
                </p>
              </div>
            </div>
          ))}
      </div>
      {/* Dot Navigation */}
      <div className="flex items-center justify-center space-x-3 mt-8">
        {Array.from({ length: Math.ceil(testimonials.length / 2) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 rounded-full ${
                currentIndex / 2 === index ? "bg-pink-400" : "bg-gray-400"
              }`}
            ></button>
          )
        )}
      </div>
    </div>
  );
}
