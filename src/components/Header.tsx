import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full p-4 bg-white dark:bg-neutral-900 shadow-sm">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
          Psychological Support
        </h1>
      </div>
    </header>
  );
};

export default Header;
