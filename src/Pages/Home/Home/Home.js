import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import ContactInfo from '../ContactInfo/ContactInfo';
import Products from '../Products/Products';
import Team from '../Team/Team';
import Features from '../Features/Features';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <ContactInfo/>
            <Products/>
            <Team/>
            <Features/>
            <Testimonial/>
        </div>
    );
};

export default Home;