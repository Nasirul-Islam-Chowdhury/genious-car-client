import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className=' w-4/5 h-full rounded-lg' alt="" />
                    <img src={parts} className='absolute w-3/5 right-5 top-1/2 border-8 rounded-lg' alt="" />

                </div>
                <div className='lg:w-1/2 mx-auto'>
                    <p className="text-2xl text-orange-700 font-bold mb-5">About us</p>
                    <h1 className="lg:text-5xl text-2xl font-bold mx-auto">
                        <span>We are qualified</span> <br/>
                        & of experience <br />
                        in this field
                    </h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p><br />
                    <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn border-none text-white bg-orange-600 mt-7">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;