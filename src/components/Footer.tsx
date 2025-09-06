import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div>
            <p className="text-slate-300">
              © 2025 Alec Grater. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;