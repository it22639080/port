import React from 'react';
const Footer = () => {
  return <footer className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl font-bold mb-2">
          <span className="text-blue-400">P</span>ort
          <span className="text-blue-400">f</span>olio
        </h2>
        <p className="text-lg mb-4">Kavindu Madhusanka</p>
        <p className="text-gray-400 text-sm">
          Copyright © {new Date().getFullYear()} Kavindu. All rights reserved
        </p>
      </div>
    </footer>;
};
export default Footer;