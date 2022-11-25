import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div className='mx-6'>
            <Banner></Banner>
            <About></About>
            <Categories></Categories>
        </div>
    );
};

export default Home;