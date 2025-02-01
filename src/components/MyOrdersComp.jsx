import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const MyOrdersComp = () => {

    const [data] = useState([
        {
            items: [
                { name: 'Burger', quantity: 2 },
                { name: 'Fries', quantity: 1 },
            ],
            amount: 15,
            status: 'Delivered'
        },
        {
            items: [
                { name: 'Pizza', quantity: 1 },
                { name: 'Coke', quantity: 2 },
            ],
            amount: 20,
            status: 'Pending'
        }
    ]);

  return (
    <div className="p-5 h-screen">
      <h1 className="text-2xl mb-4 font-bold text-center">My Orders</h1>

      {/* Table Layout for Larger Screens */}
      <div className="overflow-auto rounded-lg shadow hidden md:block">
        <table className="w-full table-auto">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="w-16 p-4 text-base font-semibold tracking-wide text-left">No.</th>
              <th className="sm:min-w-[250px] min-w-[200px] p-4 text-base font-semibold tracking-wide text-left">Order</th>
              <th className="min-w-[200px] p-4 text-base font-semibold tracking-wide text-left">Amount</th>
              <th className="w-20 p-4 text-base font-semibold tracking-wide text-left">Items</th>
              <th className="w-32 p-4 text-base font-semibold tracking-wide text-left">Status</th>
              <th className="w-24 p-4 text-base font-semibold tracking-wide text-left">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((order, index) => (
              <tr key={index} className="bg-white">
                <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                  <Link to={`/order-details/${index + 1}`} className="font-bold text-blue-500 hover:underline">{index + 1}</Link>
                </td>
                <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                  <div className="flex items-center">
                    {/* Placeholder for Parcel icon */}
                    <div className="w-14 h-14 bg-gray-300 rounded-full mr-4"></div>
                    <span>
                      {order.items.map((item, idx) => (
                        <span key={idx} className="mr-2">
                          {item.name} x {item.quantity}
                          {idx !== order.items.length - 1 && ','}
                        </span>
                      ))}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                  {order.amount} ETB
                </td>
                <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                  Items: {order.items.length}
                </td>
                <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                  <span className={`p-2 text-sm font-medium uppercase tracking-wider ${order.status === 'Delivered' ? 'text-green-800 bg-green-200' : 'text-red-800 bg-red-200'} rounded-lg bg-opacity-50`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-4 text-base text-gray-700 whitespace-nowrap">
                  <button className="text-sm border border-gray-600 bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300">
                    Track Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card Layout for Smaller Screens */}
      <div className="md:hidden">
        {data.map((order, index) => (
          <div key={index} className="mb-6 p-4 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold">Order {index + 1}</h3>
              <span className={`p-2 text-sm font-medium uppercase tracking-wider ${order.status === 'Delivered' ? 'text-green-800 bg-green-200' : 'text-red-800 bg-red-200'} rounded-lg bg-opacity-50`}>
                {order.status}
              </span>
            </div>
            <div className="flex items-center mb-3">
              {/* Placeholder for Parcel icon */}
              <div className="w-14 h-14 bg-gray-300 rounded-full mr-4"></div>
              <div>
                {order.items.map((item, idx) => (
                  <div key={idx} className="text-sm text-gray-700">
                    {item.name} x {item.quantity}
                    {idx !== order.items.length - 1 && ','}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-700 mb-3">Amount: {order.amount} ETB</div>
            <div className="text-sm text-gray-700 mb-3">Items: {order.items.length}</div>
            <Link to={`/order-details/${index + 1}`} className="text-orange-500 text-sm hover:underline">
              View Order Details
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MyOrdersComp;
