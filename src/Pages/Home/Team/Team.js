import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.jpg'

const Team = () => {
    return (
        <div className="my-20">
            <div className="text-center">
                <h1 className='text-2xl text-orange-600 font-bold mb-5'>Team</h1>
                <h1 className='text-5xl font-bold'>Meet Our Team</h1>
                <p className='py-5'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='lg:flex justify-between'>
                <div className="text-center items-center border p-5 rounded">
                    <img src={img1} className='w-full h-52 rounded' alt="" />
                    <h1 className='text-2xl font-bold mb-2'>Car Engine Plug</h1>
                    <h1 className='text-xl mb-2'>Engine Expert</h1>
                    <div className='flex justify-center gap-3'>
                        <FaFacebook className='w-10 h-10' />
                        <FaTwitter className='w-10 h-10' />
                        <FaInstagram className='w-10 h-10' />
                        <FaLinkedin className='w-10 h-10' />
                    </div>
                </div>
                <div className="text-center items-center border p-5 rounded">
                    <img src={img2} className='w-full h-52 rounded' alt="" />
                    <h1 className='text-2xl font-bold mb-2'>Car Engine Plug</h1>
                    <h1 className='text-xl mb-2'>Engine Expert</h1>
                    <div className='flex justify-center gap-3'>
                        <FaFacebook className='w-10 h-10' />
                        <FaTwitter className='w-10 h-10' />
                        <FaInstagram className='w-10 h-10' />
                        <FaLinkedin className='w-10 h-10' />
                    </div>
                </div>
                <div className="text-center items-center border p-5 rounded">
                    <img src={img3} className='w-full h-52 rounded' alt="" />
                    <h1 className='text-2xl font-bold mb-2'>Car Engine Plug</h1>
                    <h1 className='text-xl mb-2'>Engine Expert</h1>
                    <div className='flex justify-center gap-3'>
                        <FaFacebook className='w-10 h-10' />
                        <FaTwitter className='w-10 h-10' />
                        <FaInstagram className='w-10 h-10' />
                        <FaLinkedin className='w-10 h-10' />
                    </div>
                </div>
                </div>
            </div>
    );
};

export default Team;