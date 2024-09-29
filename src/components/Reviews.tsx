import React from "react";
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
    avatar: "https://randomuser.me/api/portraits/women/44.jpg", // Replace with the actual avatar image
    verified: true
  },
  {
    id: 2,
    name: "Kathryn Murphy",
    company: "General Electric",
    reviewText:
      "Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg", // Replace with the actual avatar image
    verified: true
  }
];

const Reviews: React.FC = () => {
  return (
    <div className="review-section bg-purple-900 text-white p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="review-card p-6 bg-purple-800 rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              {/* Star Rating */}
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
              </div>
            </div>

            {/* Review Text */}
            <p className="mb-6 text-gray-300">{review.reviewText}</p>

            {/* User Info */}
            <div className="flex items-center">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full border-2 border-purple-500 mr-4"
              />
              <div>
                <p className="font-bold">{review.name}</p>
                <p className="text-gray-400">{review.company}</p>
              </div>

              {/* Verified Badge */}
              {review.verified && (
                <span className="ml-auto text-blue-500">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span className="ml-1 text-sm">Verified</span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
