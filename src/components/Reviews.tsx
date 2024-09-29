import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// Types for Review data
interface Review {
  id: number;
  name: string;
  company: string;
  reviewText: string;
  avatar: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Arlene McCoy",
    company: "McDonald's",
    reviewText:
      "One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    verified: true
  },
  {
    id: 2,
    name: "Kathryn Murphy",
    company: "General Electric",
    reviewText:
      "Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    verified: true
  },
  {
    id: 3,
    name: "Ronald Richards",
    company: "Google",
    reviewText:
      "The support on this platform is exceptional. They are fast, reliable, and always ready to assist. The resources available are also top-notch, ensuring gamers get the best experience possible.",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    verified: false
  },
  {
    id: 4,
    name: "Esther Howard",
    company: "Amazon",
    reviewText:
      "I love the design of the platform. It’s user-friendly, and the dark mode makes it easy on the eyes during long gaming sessions. Highly recommend for gamers of all levels!",
    avatar: "https://randomuser.me/api/portraits/women/56.jpg",
    verified: true
  }
];

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index * 2);
  };

  return (
    <div className="review-section bg-gradient-to-b from-purple-900 to-blue-900 text-white p-10 min-h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full">
        {reviews.slice(currentIndex, currentIndex + 2).map((review) => (
          <div
            key={review.id}
            className="p-8 bg-purple-800 rounded-lg shadow-lg relative text-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-20 h-20 rounded-full border-4 border-purple-500 shadow-lg"
                />
                <div>
                  <p className="font-bold text-2xl">{review.name}</p>
                  <p className="text-gray-400">{review.company}</p>
                </div>
              </div>
              {review.verified && (
                <span className="flex items-center text-blue-500 space-x-2">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span className="text-sm">Verified</span>
                </span>
              )}
            </div>
            <div className="flex mb-4">
              {Array.from({ length: 5 }, (_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="text-yellow-400 text-lg"
                />
              ))}
            </div>
            <p className="text-gray-300 mb-6">{review.reviewText}</p>
          </div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="flex items-center justify-center space-x-3 mt-8">
        {Array.from({ length: Math.ceil(reviews.length / 2) }).map(
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
};

export default Reviews;
