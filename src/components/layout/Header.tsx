import React from 'react';
// import { Link } from 'react-router-dom';

interface HeaderProps {
  helpAction?: () => void;
}

const Header: React.FC<HeaderProps> = ({ helpAction }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold">FS</span>
            </div>
            <h1 className="ml-3 text-2xl font-bold text-gray-900">Fleet Services ROI Calculator</h1>
          </div>
        </div>
        <div>
          <button 
            onClick={helpAction} 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Help
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
