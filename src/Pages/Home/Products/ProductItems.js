import React from 'react';
import { FaStar } from "react-icons/fa";


const ProductItems = ({product}) => {
    const {title, image_url, price } = product;
    return (
        <div className="card rounded-lg w-96 glass">
            <figure><img src={image_url} className='h-52 w-full' alt="car!" /></figure>
            
            <div className="card-body items-center text-center">
            <div className='flex justify-center gap-2'>
                <FaStar className='w-5 text-orange-600'/>
                <FaStar className='w-5 text-orange-600'/>
                <FaStar className='w-5 text-orange-600'/>
                <FaStar className='w-5 text-orange-600'/>
                <FaStar className='w-5 text-orange-600'/>
            </div>
                <p className="card-title">{title}</p>
                <div className='flex justify-between'>
                <p className='text-2xl text-orange-600 font-semibold'>${price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductItems;