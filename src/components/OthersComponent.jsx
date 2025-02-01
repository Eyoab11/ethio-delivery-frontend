import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Others_Placeholder from '../assets/images/Others/others placeholder.png'

const OthersComponent = () => {
  const [others, setOthers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    // Fetch data from backend (Replace with actual API endpoint)
    const fetchOthers = async () => {
      try {
        const response = await fetch('https://your-backend-api.com/others'); // Placeholder API
        const data = await response.json();
        setOthers(data);
      } catch (error) {
        console.error('Error fetching others:', error);
      }
    };

    fetchOthers();
  }, []);

  const filteredOthers = others.filter((item) =>
    item.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentOthers = filteredOthers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Other Services</h2>

      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search Services..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-6 py-3 border border-gray-300 rounded-full w-96 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentOthers.map((item) => (
          <Link
            to={`/others/${item.id}`} // Navigating to details page by id
            key={item.id}
            className="relative flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg border-4 border-orange-500 transition-transform transform hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-orange-500"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img
                src={item.image || Others_Placeholder} // Placeholder image
                alt={item.name || 'Service'}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-lg font-semibold text-gray-800">{item.name || 'Service Name'}</p>
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

export default OthersComponent;
