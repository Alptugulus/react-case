import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white   z-50 ">
      <nav className='w-full '>
        <ul className='flex absolute lg:justify-end justify-center md:justify-end flex-row w-full  gap-5'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chart">Statictics</Link>
          </li>
          <li>
            <Link to="/table">All Expences</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;