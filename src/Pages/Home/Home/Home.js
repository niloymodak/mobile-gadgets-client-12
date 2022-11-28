import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import UpcomingBrand from '../UpcomingBrand/UpcomingBrand';

const Home = () => {
    return (
        <div className='mx-6'>
            <Banner></Banner>
            <About></About>
            <Categories></Categories>
            <UpcomingBrand></UpcomingBrand>
        </div>
    );
};

export default Home;