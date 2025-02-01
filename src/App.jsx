import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import Restaurants from './pages/Restaurants';
import Groceries from './pages/Groceries';
import Others from './pages/Others';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Cart from './pages/Cart';
import MyOrders from './pages/MyOrders';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/others" element={<Others />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/my-orders' element={<MyOrders />} />


        </Routes>
      </MainLayout>
      <Routes>
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        
      </Routes>
    </Router>
  );
};

export default App;
