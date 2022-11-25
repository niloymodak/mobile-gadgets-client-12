import React from 'react';
import img1 from '../../../assets/images/Banner1.jpg'
import img2 from '../../../assets/images/Banner2.jpg'
import img3 from '../../../assets/images/Banner3.jpg'
import BannerItem from './BannerItem';

const Banner = () => {
    const bannerData = [
        {
            image: img1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 1
        }
    ]
    return (
        <div className="carousel w-full">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }

        </div>
    );
};

export default Banner;