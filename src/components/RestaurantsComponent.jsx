import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Restaurant_Placeholder from '../assets/images/Restaurants/restaurant placeholder.png'

const RestaurantsComponent = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    // Fetch data from backend (Replace with actual API endpoint)
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('https://your-backend-api.com/restaurants'); // Placeholder API
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, []);

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentRestaurants = filteredRestaurants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    let stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star text-orange-500"></i>);
    }

    if (halfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-orange-500"></i>);
    }

    while (stars.length < 5) {
      stars.push(<i key={`empty-${stars.length}`} className="fas fa-star text-gray-300"></i>);
    }

    return stars;
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Restaurants Available</h2>

      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search Restaurants..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-6 py-3 border border-gray-300 rounded-full w-96 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentRestaurants.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant.id}`} // Navigating to restaurant page by id
            key={restaurant.id}
            className="relative flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg border-4 border-orange-500 transition-transform transform hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-orange-500"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img
                src={restaurant.image || Restaurant_Placeholder} // Placeholder image
                alt={restaurant.name || 'Restaurant'}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-lg font-semibold text-gray-800">{restaurant.name || 'Restaurant Name'}</p>

            <div className="flex items-center mt-2">
              {renderStars(restaurant.rating || 0)}
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-10 mb-10">
        <button className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 focus:outline-none">
          See More
        </button>
      </div>
    </div>
  );
};

export default RestaurantsComponent;
