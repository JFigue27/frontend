import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ children }) => {
  return (
    <div>
      <div className="Header-title">
        <div className="Avatar">
          <img src="../styles/images/jjfigueroa.jpg" alt="Jaime Figueroa" />
        </div>
        <h1>Jose Jaime Figueroa Barrios</h1>
      </div>
      {children}
    </div>
  );
};

export default Header;
