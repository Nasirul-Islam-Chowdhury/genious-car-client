import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import  img  from '../../../assets/icons/quote.svg';
import  person1  from '../../../assets/images/team/1.jpg';
import  person2  from '../../../assets/images/team/2.jpg';
import  person3  from '../../../assets/images/team/3.jpg';

import { FaStar } from "react-icons/fa";

const Testimonial = () => {
    return (
        <div className='mb-32'>
            <div className='text-center mb-12'>
                <p className="font-bold text-2xl mb-5 text-orange-600">Testimonial</p>
                <h2 className="text-5xl font-semibold mb-5">What Customer Says</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div>
            <>
      <Swiper className="flex justify-center items-center mx-auto"
        slidesPerView={2}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        <SwiperSlide>
          <section class="text-gray-600">
  <div class="container lg:px-5  mx-auto">
      <div class="lg:p-4 w-full">
        <div class="h-full lg:p-8 rounded">
        <div class="flex justify-between items-center mb-2">
            <img alt="testimonial" src={person1} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span class="flex-grow flex flex-col  pl-4">
              <span class="title-font text-xl font-medium text-gray-900">Kodom ali</span>
              <span class="text-gray-500 text-sm">Businessman</span>
            </span>
            <figure>
              <img src={img}  className='w-16 opacity-10' alt="" />
            </figure>
          </div>
          <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <div>
        <div className='flex justify-start gap-1'>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
            </div>
        </div>
        </div>
      
      </div>
  </div>
</section>
        </SwiperSlide>
        <SwiperSlide>
          <section class="text-gray-600">
  <div class="container px-5  mx-auto">
      <div class="lg:p-4 w-full">
        <div class="h-full lg:p-8 rounded">
        <div class="flex justify-between items-center mb-2">
            <img alt="testimonial" src={person2} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span class="flex-grow flex flex-col  pl-4">
              <span class="title-font text-xl font-medium text-gray-900">Md KUddus</span>
              <span class="text-gray-500 text-sm">Businessman</span>
            </span>
            <figure>
              <img src={img}  className='w-16 opacity-10' alt="" />
            </figure>
          </div>
          <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <div>
        <div className='flex justify-start gap-1'>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
            </div>
        </div>
        </div>
      
      </div>
  </div>
</section>
        </SwiperSlide>
        <SwiperSlide>
          <section class="text-gray-600">
  <div class="container lg:px-5  mx-auto">
      <div class="lg:p-4 w-full">
        <div class="h-full lg:p-8 rounded">
        <div class="flex justify-between items-center mb-2">
            <img alt="testimonial" src={person3} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span class="flex-grow flex flex-col  pl-4">
              <span class="title-font text-xl font-medium text-gray-900">Alper Kamu</span>
              <span class="text-gray-500 text-sm">Businessman</span>
            </span>
            <figure>
              <img src={img}  className='w-16 opacity-10' alt="" />
            </figure>
          </div>
          <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <div>
        <div className='flex justify-start gap-1'>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
            </div>
        </div>
        </div>
      
      </div>
  </div>
</section>
        </SwiperSlide>
        <SwiperSlide>
          <section class="text-gray-600">
  <div class="container lg:px-5  mx-auto">
      <div class="lg:p-4 w-full">
        <div class="h-full lg:p-8 rounded">
        <div class="flex justify-between items-center mb-2">
            <img alt="testimonial" src={person1} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span class="flex-grow flex flex-col  pl-4">
              <span class="title-font text-xl font-medium text-gray-900">NX Najat</span>
              <span class="text-gray-500 text-sm">Businessman</span>
            </span>
            <figure>
              <img src={img}  className='w-16 opacity-10' alt="" />
            </figure>
          </div>
          <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <div>
        <div className='flex justify-start gap-1'>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
            </div>
        </div>
        </div>
      
      </div>
  </div>
</section>
        </SwiperSlide>
        <SwiperSlide>
          <section class="text-gray-600">
  <div class="container lg:px-5  mx-auto">
      <div class="p-4 w-full">
        <div class="h-full lg:p-8 rounded">
        <div class="flex justify-between items-center mb-2">
            <img alt="testimonial" src={person2} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span class="flex-grow flex flex-col  pl-4">
              <span class="title-font text-xl font-medium text-gray-900">Md Nader</span>
              <span class="text-gray-500 text-sm">Businessman</span>
            </span>
            <figure>
              <img src={img}  className='w-16 opacity-10' alt="" />
            </figure>
          </div>
          <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <div>
        <div className='flex justify-start gap-1'>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
            </div>
        </div>
        </div>
      
      </div>
  </div>
</section>
        </SwiperSlide>
        <SwiperSlide>
          <section class="text-gray-600">
  <div class="container lg:px-5  mx-auto">
      <div class="lg:p-4 w-full">
        <div class="h-full lg:p-8 rounded">
        <div class="flex justify-between items-center mb-2">
            <img alt="testimonial" src={person3} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span class="flex-grow flex flex-col  pl-4">
              <span class="title-font text-xl font-medium text-gray-900">Md Nasirul islam</span>
              <span class="text-gray-500 text-sm">Businessman</span>
            </span>
            <figure>
              <img src={img}  className='w-16 opacity-10' alt="" />
            </figure>
          </div>
          <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <div>
        <div className='flex justify-start gap-1'>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
            </div>
        </div>
        </div>
      
      </div>
  </div>
</section>
        </SwiperSlide>
        <SwiperSlide>
          <section class="text-gray-600">
  <div class="container lg:px-5  mx-auto">
      <div class="lg:p-4 w-full">
        <div class="h-full p-8 rounded">
        <div class="flex justify-between items-center mb-2">
            <img alt="testimonial" src={person1} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span class="flex-grow flex flex-col  pl-4">
              <span class="title-font text-xl font-medium text-gray-900">Nahidul Islam</span>
              <span class="text-gray-500 text-sm">Businessman</span>
            </span>
            <figure>
              <img src={img}  className='w-16 opacity-10' alt="" />
            </figure>
          </div>
          <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <div>
        <div className='flex justify-start gap-1'>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
            </div>
        </div>
        </div>
      
      </div>
  </div>
</section>
        </SwiperSlide>
        <SwiperSlide>
          <section class="text-gray-600">
  <div class="container lg:px-5  mx-auto">
      <div class="p-4 w-full">
        <div class="h-full lg:p-8 rounded">
        <div class="flex justify-between items-center mb-2">
            <img alt="testimonial" src={person2} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span class="flex-grow flex flex-col  pl-4">
              <span class="title-font text-xl font-medium text-gray-900">Mr Safayat</span>
              <span class="text-gray-500 text-sm">Businessman</span>
            </span>
            <figure>
              <img src={img}  className='w-16 opacity-10' alt="" />
            </figure>
          </div>
          <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <div>
        <div className='flex justify-start gap-1'>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
                <FaStar className='w-8 h-6 text-orange-500'/>
            </div>
        </div>
        </div>
      
      </div>
  </div>
</section>
        </SwiperSlide>
      </Swiper>
    </>
            </div>
         
        </div>
    );
};

export default Testimonial;