import React from 'react';
import About from '../About/About';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div className='mx-6'>
            <Banner></Banner>
            <About></About>
            <Categories></Categories>
            <AdvertisedItems></AdvertisedItems>
        </div>
    );
};

export default Home;