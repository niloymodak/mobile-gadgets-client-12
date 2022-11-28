import React, { useEffect, useState } from 'react';
import UpcomingBrandCard from './UpcomingBrandCard';

const UpcomingBrand = () => {
    const [upcomings, setUpcomings] = useState([]);
    useEffect(() => {
        fetch('upcoming.json')
            .then(res => res.json())
            .then(data => setUpcomings(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-4 mt-5'>
                <h2 className="text-5xl font-semibold">Upcoming Brand</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    upcomings?.map(upcoming => <UpcomingBrandCard
                        key={upcoming._id}
                        upcoming={upcoming}
                    ></UpcomingBrandCard>
                    )
                }
            </div>
        </div>
    );
};

export default UpcomingBrand;