// src/components/SearchSection.js
import React from 'react';
// import './SearchSection.css';

const Header = () => {
  return (
    <section className="relative text-center bg-cover bg-center mx-2 rounded-md h-[80dvh] overflow-hidden flex justify-center items-center bg-[url('/bgcover.jpg')]">
      <div className='absolute top-0 w-full h-full rounded-md bg-black opacity-30'></div>
      <div className="overlay max-w-3xl font-bold text-white z-50">
        <h1 className='max-[550px]:text-2xl mb-4 text-3xl'>Nourish Minds, Fuel Futures.</h1>
        <p className='max-[550px]:text-xl text-2xl'>
        Join Dunni’s Feeds to inspire education by feeding a child a day.
        Help us reach more young hearts—support our mission today!
        </p>
        {/* <div className="perks">
          <span>🛏️ Upgrade on arrival</span>
          <span>🍽️ Food or Spa Credits</span>
          <span>⏰ Early Check-Ins</span>
        </div> */}
      </div>
    </section>
  );
};

export default Header;
