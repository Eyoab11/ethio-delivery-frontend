import React from "react";
import { useNavigate } from "react-router-dom"; 
import Food from '../assets/images/Home/Categories/restaurants.jpg';
import Groceries from '../assets/images/Home/Categories/tomatoes.jpg';
import Flowers from '../assets/images/Home/Categories/flowers.jpg';

// Categories Data
const categories = [
  { id: 1, name: "Food", icon: Food, link: "/restaurants" },
  { id: 2, name: "Groceries", icon: Groceries, link: "/groceries" },
  { id: 3, name: "Flowers", icon: Flowers, link: "/flowers" },
];

const Categories = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle category click
  const handleCategoryClick = (link) => {
    navigate(link); // Navigate to the selected category's link
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg border-4 border-orange-500 transition-transform transform hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-orange-500"
            onClick={() => handleCategoryClick(category.link)} // Handle click
          >
            {/* Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
              <img
                src={category.icon}
                alt={category.name}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-lg font-semibold text-gray-800">{category.name}</p>

            {/* Fancy Bottom effect */}
            <div className="absolute bottom-0 left-0 right-0 bg-orange-500 h-2 rounded-b-2xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
