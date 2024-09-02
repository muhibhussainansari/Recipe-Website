// Components/Loader/Loader.js
import React from 'react';
import './Loader.css'; // Optional: If you want to style the loader

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
