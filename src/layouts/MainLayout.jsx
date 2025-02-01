import React from 'react';
import NavBar from '../components/NavBar';  // or your NavBar component path

const MainLayout = ({ children }) => {
  return (
    <div>
      {/* This is the NavBar that will be rendered on every page */}
      <NavBar />
      {/* This is where the page content will be rendered */}
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
