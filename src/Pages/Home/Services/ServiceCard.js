import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
    const { img, title, price } = service;
    return (
        <div className="card rounded-lg w-96 glass">
            <figure><img src={img} className='w-full px-6 lg:h-52' alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex justify-between items-center'>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <FaArrowRight className="text-orange-600 cursor-pointer"/>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;