import React from 'react';
import { Footer } from './components/Footer';
import Navbar from './components/Navbar';
import background from './assets/background.png'; 
import { Confirmation } from './components/Confirmation';
import { Wellcome } from './components/Wellcome';
import { SetUp } from './components/SetUp';
import PricingPlans from './components/Feature';
import { Well } from './components/Well';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="absolute inset-0 bg-black/20"></div>


      <div className="relative z-10">
        <Navbar />
          <Outlet/>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
