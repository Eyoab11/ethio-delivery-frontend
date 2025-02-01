import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Grocery_Placeholder from '../assets/images/Groceries/groceries placeholder.jpg';

const GroceriesComponent = () => {
  const [groceries, setGroceries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    // Fetch data from backend (Replace with actual API endpoint)
    const fetchGroceries = async () => {
      try {
        const response = await fetch('https://your-backend-api.com/groceries'); // Placeholder API
        const data = await response.json();
        setGroceries(data);
      } catch (error) {
        console.error('Error fetching groceries:', error);
      }
    };

    fetchGroceries();
  }, []);

  const filteredGroceries = groceries.filter((grocery) =>
    grocery.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentGroceries = filteredGroceries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Groceries Available</h2>

      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search Groceries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-6 py-3 border border-gray-300 rounded-full w-96 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentGroceries.map((grocery) => (
          <Link
            to={`/grocery/${grocery.id}`} // Navigating to grocery page by id
            key={grocery.id}
            className="relative flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg border-4 border-orange-500 transition-transform transform hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-orange-500"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img
                src={grocery.image || Grocery_Placeholder} // Placeholder image
                alt={grocery.name || 'Grocery Item'}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-lg font-semibold text-gray-800">{grocery.name || 'Grocery Item'}</p>
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

export default GroceriesComponent;
