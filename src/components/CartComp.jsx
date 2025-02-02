import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCart, removeFromCart } from '../services/api'; // Import API functions

const CartComp = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]); // State to store cart items
  const [totalAmount, setTotalAmount] = useState(0); // State to store total amount
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  // Fetch cart items from the backend
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await getCart(); // Call the getCart function
        setCartItems(response.data.items); // Set the fetched cart items in state
        calculateTotal(response.data.items); // Calculate the total amount
        setLoading(false); // Set loading to false
      } catch (err) {
        setError(err.message || 'Failed to fetch cart items.'); // Set error message
        setLoading(false); // Set loading to false
      }
    };

    fetchCartItems();
  }, []);

  // Calculate total amount
  const calculateTotal = (items) => {
    const total = items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    setTotalAmount(total);
  };

  // Remove an item from the cart
  const handleRemoveFromCart = async (id) => {
    try {
      await removeFromCart(id); // Call the removeFromCart function
      const updatedItems = cartItems.filter((item) => item.id !== id); // Remove the item from the local state
      setCartItems(updatedItems);
      calculateTotal(updatedItems); // Recalculate the total amount
    } catch (err) {
      setError(err.message || 'Failed to remove item from cart.'); // Set error message
    }
  };

  // Display loading state
  if (loading) {
    return (
      <div className="p-6 flex justify-center items-center">
        <p className="text-lg text-gray-700">Loading cart items...</p>
      </div>
    );
  }

  // Display error state
  if (error) {
    return (
      <div className="p-6 flex justify-center items-center">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="CartComp p-6 rounded-lg shadow-xl mx-28">
      <div className="CartComp-items">
        <div className="CartComp-items-title grid grid-cols-6 gap-4 text-gray-700 text-sm font-semibold mb-6">
          <p className="text-lg font-bold text-gray-900">Items</p>
          <p className="text-lg font-bold text-gray-900">Title</p>
          <p className="text-lg font-bold text-gray-900">Price</p>
          <p className="text-lg font-bold text-gray-900">Quantity</p>
          <p className="text-lg font-bold text-gray-900">Total</p>
          <p className="text-lg font-bold text-gray-900">Remove</p>
        </div>

        <hr className="my-4 border-t-2 border-orange-300" />

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="CartComp-items-title CartComp-items-item grid grid-cols-6 gap-4 items-center py-3 hover:bg-orange-50 transition duration-300 ease-in-out rounded-lg"
          >
            <img
              src={item.product.image} // Use the product image from the backend
              alt={item.product.name}
              className="w-12 h-12 object-cover rounded-full shadow-md border-2 border-orange-200"
            />
            <p className="text-lg text-gray-800 font-semibold">{item.product.name}</p>
            <p className="text-lg text-orange-600 font-semibold">${item.product.price}</p>
            <p className="text-lg text-gray-700">{item.quantity}</p>
            <p className="text-lg text-orange-600 font-semibold">${item.product.price * item.quantity}</p>
            <p
              onClick={() => handleRemoveFromCart(item.id)}
              className="cursor-pointer text-red-600 hover:text-red-800 text-lg transition duration-300 ease-in-out"
            >
              x
            </p>
          </div>
        ))}

        <hr className="my-4 border-t-2 border-orange-300" />
      </div>

      <div className="CartComp-bottom flex flex-wrap gap-6 justify-between mt-8">
        <div className="CartComp-total flex flex-col gap-4 w-full sm:w-1/2 bg-white p-5 rounded-lg shadow-lg border-2 border-orange-300">
          <h2 className="text-xl font-bold text-gray-800">CartComp Totals</h2>
          <div className="CartComp-total-details flex justify-between text-gray-700 font-semibold mb-2">
            <p className="text-lg">Subtotal</p>
            <p className="text-lg">${totalAmount}</p>
          </div>
          <hr className="my-2 border-t-2 border-orange-300" />
          <div className="CartComp-total-details flex justify-between text-gray-700 font-semibold mb-2">
            <p className="text-lg">Delivery Fee</p>
            <p className="text-lg">${totalAmount === 0 ? 0 : 2}</p>
          </div>
          <hr className="my-2 border-t-2 border-orange-300" />
          <div className="CartComp-total-details flex justify-between text-gray-800 font-bold mb-2">
            <p className="text-lg">Total</p>
            <p className="text-lg">${totalAmount === 0 ? 0 : totalAmount + 2}</p>
          </div>
          <button
            onClick={() => navigate('/placeorder')}
            className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="CartComp-promocode flex flex-col sm:w-1/3 p-5 rounded-lg">
          <p className="text-gray-700 font-semibold text-lg">If you have a promo code, Enter it here</p>
          <div className="CartComp-promocode-input flex mt-4 p-3 border-2 border-orange-300 rounded-lg">
            <input
              type="text"
              placeholder="Promo Code"
              className="w-full p-2 bg-transparent border-none outline-none rounded-lg text-gray-700"
            />
            <button className="ml-4 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComp;