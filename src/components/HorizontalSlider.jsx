import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Cake from '../assets/images/Home/Carousal Foods/cake.png';
import desserts from '../assets/images/Home/Carousal Foods/desserts.png';
import noodles from '../assets/images/Home/Carousal Foods/noodles.png';
import pasta from '../assets/images/Home/Carousal Foods/pasta.png';
import pure_vege from '../assets/images/Home/Carousal Foods/pure_veg.png';
import rolls from '../assets/images/Home/Carousal Foods/rolls.png';
import salad from '../assets/images/Home/Carousal Foods/salad.png';
import sandwich from '../assets/images/Home/Carousal Foods/sandwich.png';

const HorizontalSlider = () => {
    const data = [
        { food: 'Cake', img: Cake },
        { food: 'Dessert', img: desserts },
        { food: 'Noodles', img: noodles },
        { food: 'Pasta', img: pasta },
        { food: 'Pure Vege', img: pure_vege },
        { food: 'Rolls', img: rolls },
        { food: 'Salad', img: salad },
        { food: 'Sandwich', img: sandwich },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(6);

    useEffect(() => {
        const updateItemsToShow = () => {
            if (window.innerWidth >= 1200) {
                setItemsToShow(8);
            } else if (window.innerWidth >= 1024) {
                setItemsToShow(6);
            } else if (window.innerWidth >= 768) {
                setItemsToShow(3);
            } else {
                setItemsToShow(2);
            }
        };
        updateItemsToShow();
        window.addEventListener('resize', updateItemsToShow);
        return () => window.removeEventListener('resize', updateItemsToShow);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? data.length - itemsToShow : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= data.length - itemsToShow ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full overflow-hidden px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Explore our menu</h1>
            <div className="flex items-center justify-between">
                <button
                    className="p-2 bg-gray-800 text-white rounded-full shadow-md"
                    onClick={prevSlide}
                >
                    <FaChevronLeft />
                </button>
                <div className="w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-300"
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                    >
                        {data.map((item, index) => (
                            <div key={index} className="flex-none w-[12vw] min-w-[100px] max-w-[150px] p-2 text-center">
                                <img
                                    src={item.img}
                                    alt={item.food}
                                    className="w-full h-auto object-cover rounded-full transition-all duration-200 hover:scale-105 border-4 border-transparent hover:border-orange-500"
                                    style={{ aspectRatio: '1 / 1' }}
                                />
                                <p className="mt-2 text-lg font-semibold text-[#747474]">{item.food}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    className="p-2 bg-gray-800 text-white rounded-full shadow-md"
                    onClick={nextSlide}
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default HorizontalSlider;
