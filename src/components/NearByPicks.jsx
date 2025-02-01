import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa'; // Importing the plus circle icon from react-icons
import image1 from '../assets/images/Home/NearBy picks/pizza.jpg';
import image2 from '../assets/images/Home/NearBy picks/burger.jpg';
import image3 from '../assets/images/Home/NearBy picks/pasta.jpg';
import image4 from '../assets/images/Home/NearBy picks/sushi.jpg';

const NearByPicks = () => {
  const sampleData = [
    {
      image: image1,
      name: 'Pizza Margherita',
      restaurant: 'Pizzeria Napoli',
      rating: 4.5,
      price: 150,
    },
    {
      image: image2,
      name: 'Burger Deluxe',
      restaurant: 'Burger King',
      rating: 4.2,
      price: 120,
    },
    {
      image: image3,
      name: 'Pasta Alfredo',
      restaurant: 'Italiano Ristorante',
      rating: 4.7,
      price: 180,
    },
    {
      image: image4,
      name: 'Sushi Platter',
      restaurant: 'Sushiya',
      rating: 4.8,
      price: 200,
    },
  ];

  const [quantity, setQuantity] = useState(Array(sampleData.length).fill(0));
  const [showButtons, setShowButtons] = useState(Array(sampleData.length).fill(false));

  const increaseQuantity = (index) => {
    const newQuantity = [...quantity];
    newQuantity[index] += 1;
    setQuantity(newQuantity);
  };

  const decreaseQuantity = (index) => {
    const newQuantity = [...quantity];
    if (newQuantity[index] > 0) {
      newQuantity[index] -= 1;
    }
    setQuantity(newQuantity);
  };

  const toggleButtons = (index) => {
    const newShowButtons = [...showButtons];
    newShowButtons[index] = !newShowButtons[index];
    setShowButtons(newShowButtons);
  };

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <div className="flex text-xl">
        {Array(fullStars).fill(<span className="text-orange-500">★</span>)}
        {Array(halfStars).fill(<span className="text-orange-500">☆</span>)}
        {Array(emptyStars).fill(<span className="text-gray-300">★</span>)}
      </div>
    );
  };

  return (
    <div className="p-8">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center mb-8">Top Picks Nearby</h2>

      {/* Responsive Grid Layout */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {sampleData.slice(0, 4).map((item, index) => (
            <div key={index} className="rounded-lg shadow-lg bg-white relative">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {/* Orange Plus Icon inside the image, shifted to the right */}
                <div
                  className="absolute bottom-2 right-4 text-white bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
                  onClick={() => toggleButtons(index)}
                >
                  <FaPlus className="w-8 h-8" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.restaurant}</p>
                <div className="flex items-center text-orange-500 mt-1">
                  {renderRating(item.rating)}
                </div>
                <div className="text-xl font-medium text-orange-500 mt-2">{item.price} ETB</div>

                {showButtons[index] && (
                  <div className="mt-4 flex items-center justify-between">
                    <button
                      onClick={() => decreaseQuantity(index)}
                      className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-xl font-medium">{quantity[index]}</span>
                    <button
                      onClick={() => increaseQuantity(index)}
                      className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearByPicks;
