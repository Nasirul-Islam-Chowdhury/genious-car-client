import React from 'react';
import img4 from '../../../assets/icons/Wrench.svg'
import img1 from '../../../assets/icons/check.svg'
import img2 from '../../../assets/icons/deliveryt.svg'
import img3 from '../../../assets/icons/person.svg'
import img5 from '../../../assets/icons/Group 38729.svg'
import img6 from '../../../assets/icons/group.svg'

const Features = () => {
    return (
        <div className='mb-32'>
            <div className='text-center mb-12'>
                <p className="font-bold text-2xl mb-5 text-orange-600">Core Features</p>
                <h2 className="text-5xl font-semibold mb-5">Why Choose Us</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='md:flex lg:flex justify-between m-2'>
                <div className='px-16 py-10 mb-2 bg-base-200 mx-auto flex flex-col items-center gap-5 rounded hover:bg-orange-400 hover:text-white cursor-pointer'>
                <div><img src={img2} alt="" /></div>
                    <div>Timely Delivery</div>
                </div>
                <div className='px-16 mb-2 py-10 bg-base-200 mx-auto flex flex-col items-center gap-5 rounded hover:bg-orange-400 hover:text-white cursor-pointer'>
                <div><img src={img3} alt="" /></div>
                    <div>24/7 Support</div>
                </div>
                <div className='px-16 mb-2 py-10 bg-base-200 mx-auto flex flex-col items-center gap-5 rounded hover:bg-orange-400 hover:text-white cursor-pointer'>
                <div><img src={img4} alt="" /></div>
                    <div>Best Equipment</div>
                </div>
                <div className='px-16 mb-2 py-10 bg-base-200 mx-auto flex flex-col items-center gap-5 rounded hover:bg-orange-400 hover:text-white cursor-pointer'>
                <div><img src={img1} alt="" /></div>
                    <div>100% Guranty</div>
                </div>
                <div className='px-16 mb-2 py-10 bg-base-200 mx-auto flex flex-col items-center gap-5 rounded hover:bg-orange-400 hover:text-white cursor-pointer'>
                <div><img src={img6} alt="" /></div>
                    <div>Timely Delivery</div>
                </div>
            </div>
        </div>
    );
};

export default Features;