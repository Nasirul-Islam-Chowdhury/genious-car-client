import React from 'react';
import './Banner.css'

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className='carousel-img '>
        <img alt="img" src={image} className="w-full h-auto  rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">

        <h1 className="text-6xl font-bold text-white">
          Affordable<br />
          Price For Car<br />
          Servicing
        </h1>
      </div>
      <div className="absolute w-2/5 flex justify-end transform -translate-y-1/2 left-24 top-1/2">
        <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      </div>
      <div className="absolute w-2/5 flex justify-start transform -translate-y-1/2 left-24 top-3/4">
        <button className="btn  text-white bg-orange-600 mr-5">Discover More</button>
        <button className="btn btn-outline text-orange-500 ">Latest Project</button>

      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
        <a href={`#slide${next}`} className="btn btn-circle">❯</a>
      </div>
    </div>

  );
};

export default BannerItem;