import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://genius-car-server-sooty-six.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='lg:px-0 px-4'>
            <div className='text-center mb-12'>
                <p className="font-bold text-2xl mb-5 text-orange-600">Services</p>
                <h2 className="lg:text-5xl text-3xl font-semibold mb-5">Our Service Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {services.map(service => <ServiceCard service={service} key={service._id} />)}
            </div>
            <div className='text-center mt-12'>
                <button className='btn btn-outline text-orange-600'>More Services</button>
            </div>
        </div>
    );
};

export default Services;