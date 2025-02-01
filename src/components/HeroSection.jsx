import React, { useEffect, useState } from 'react';
import headerImg from '../assets/images/Home/ethiopiandish.jpg';
import flowerImg from '../assets/images/Home/flowersforhero.jpg';
import groceriesImg from '../assets/images/Home/herogroceries.jpg';

// Carousel Data
const carouselData = [
  {
    image: flowerImg,
    title: "Order your flowers here",
    description: "Choose from a diverse selection of beautiful flowers to brighten your day and make your occasions extra special with nature's finest blooms.",
  },
  {
    image: groceriesImg,
    title: "Order your groceries here",
    description: "Stock up on fresh groceries with a variety of items carefully selected to meet your everyday needs. We bring quality and convenience to your door.",
  },
  {
    image: headerImg,
    title: "Order your favorite food here",
    description: "Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients to satisfy your cravings and elevate your dining experience, one delicious meal at a time.",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showText, setShowText] = useState(false);

  // Cycle through slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length);
    }, 5000); // Change slide every 5 seconds

    // Trigger the text animation after 1 second
    const textTimer = setTimeout(() => setShowText(true), 1000);

    // Cleanup timers on component unmount
    return () => {
      clearInterval(timer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div
      className="mt-10 relative h-[34vw] bg-cover bg-center bg-no-repeat mx-[5%] rounded-xl"
      style={{ backgroundImage: `url(${carouselData[currentSlide].image})` }}
    >
      <div className="absolute bottom-10 left-6 w-[50%] flex flex-col items-start gap-[1.5vw]">
        <h2
          className={`text-white font-medium text-shadow-md text-[max(4.5vw,22px)] 
            transition-opacity duration-1000 ease-in-out ${showText ? 'opacity-100' : 'opacity-0'}`}
        >
          {carouselData[currentSlide].title}
        </h2>
        <p
          className={`text-white text-shadow-md text-[1vw] 
            transition-opacity duration-1000 ease-in-out delay-500 ${showText ? 'opacity-100' : 'opacity-0'}`}
        >
          {carouselData[currentSlide].description}
        </p>
        <a href="#explore-menu">
          <button className="bg-white text-black font-medium py-[1vw] px-[2.3vw] rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            View Menu
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
