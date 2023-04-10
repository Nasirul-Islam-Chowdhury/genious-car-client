import React, { useEffect, useState } from 'react';
import ProductItems from './ProductItems';

const Products = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h1 className='text-2xl text-orange-600 font-bold mb-5'>Popular Products</h1>
                <h1 className='text-5xl font-bold'>Browse Our Products</h1>
                <p className='py-5'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product =><ProductItems key={product.id} product={product}/>)
                }
            </div>
            <div className='text-center mt-12'>
                <button className='btn btn-outline text-orange-600'>More Products</button>
            </div>
        </div>
    );
};

export default Products;