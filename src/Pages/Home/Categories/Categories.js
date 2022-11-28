import React, { useEffect, useState } from 'react';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://mobile-gadgets-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Brands</p>
                <h2 className="text-5xl font-semibold">Our Mobile Brand</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories?.map(category => <CategoriesCard
                        key={category._id}
                        category={category}
                    ></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;