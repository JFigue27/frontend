import React from 'react';

const Header = ({ children }) => {
  return (
    <div>
      <h1 className="Header-title">Header</h1>
      {children}
    </div>
  );
};

export default Header;
