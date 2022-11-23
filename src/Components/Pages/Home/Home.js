import React from 'react';
import AdvertisedItems from './AdvertisedItems';
import Banner from './Banner';
import Categories from './Categories';
import Discount from './Discount';
import Sale from './Sale';
import Steps from './Steps';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <AdvertisedItems></AdvertisedItems>
            <Steps></Steps>
            <Sale></Sale>
            <Discount></Discount>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;