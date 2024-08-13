import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import Maincarousel from '../../components/Homecarousel/Maincarousel';
import HomeSection from '../../components/HomeSection/HomeSection';
import { mens_kurta } from '../../../Data/Men/men_kurta';
import { gounsPage1 } from '../../../Data/Gouns/gouns';
import { mensShoesPage1 } from '../../../Data/shoes';


const HomePage = () => {
  return (
    <div>
      <div className="text-center mb-5">
        <h1 className="text-4xl font-bold">THE PLAY PALACE</h1>
      </div>
      <Maincarousel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <Link to="/men/clothing/mens_kurta">
          <HomeSection data={mens_kurta} sectionName={"0-3 Years"} />
        </Link>
        <Link to="/women/clothing/gouns">
          <HomeSection data={gounsPage1} sectionName={"3-8 Years"} />
        </Link>
        <Link to="/men/clothing/mens-shoes">
          <HomeSection data={mensShoesPage1} sectionName={"8+ Years"} />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
