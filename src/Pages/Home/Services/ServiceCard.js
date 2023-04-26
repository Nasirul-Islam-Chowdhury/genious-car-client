import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service;
    return (
        <div className="card rounded-lg w-96 glass">
            <figure><img src={img} className='w-full px-6 lg:h-52' alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex justify-between items-center'>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
           <Link to={`/checkout/${_id}`}>
           <FaArrowRight className="text-orange-600 cursor-pointer"/>
           </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;