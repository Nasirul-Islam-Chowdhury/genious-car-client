import React from 'react';
import { FaCalendar, FaPhoneAlt } from "react-icons/fa";
import {MdLocationOn } from "react-icons/md";

const ContactInfo = () => {
    return (
        <div className="lg:flex justify-between lg:px-20 py-28 rounded-md bg-black text-white my-32">
            <div className='flex justify-center gap-5 items-center'>
                <div>
                    <FaCalendar className='h-12 w-12 text-white'/>
                </div>
                <div>
                    <p>We are open monday-friday</p>
                    <h1 className="text-3xl font-bold">7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div className='flex justify-center gap-5 items-center'>
                <div>
                <FaPhoneAlt className='h-12 w-12 text-white'/>
                </div>
                <div>
                    <p>Have a question?</p>
                    <h1 className="text-3xl font-bold">+2546 251 2658</h1>
                </div>
            </div>
            <div className='flex justify-center gap-5 items-center'>
                <div>
                <MdLocationOn className='h-12 w-12 text-white'/>
                </div>
                <div>
                    <p>Need a repair? our address</p>
                    <h1 className="text-3xl font-bold">Liza Street, New York</h1>

                </div>
            </div>
        </div>
    );
};

export default ContactInfo;