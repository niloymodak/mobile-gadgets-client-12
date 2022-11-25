// import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingModal from '../Home/BookingModal/BookingModal';

const ViewMobile = () => {
    const { id } = useParams();
    const [categories, setCategories] = useState([]);
    const [phone, setPhone] = useState({});
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    const mobiles = categories?.find(data => data._id === id)
    // console.log(mobiles?.mobile);

    return (
        <div className='flex justify-center gap-4 mt-5 ml-'>
            {
                mobiles?.mobile.map((data, i) =>

                    < div className='card card-compact w-96 bg-base-100 mb-5 shadow-xl' key={i} >
                        <figure><img className='w-full' src={data.image} alt="Shoes" /></figure>
                        <div className="card-body ml-5">
                            <h2 className="card-title">Model: {data.name}</h2>
                            <h2 className='font-semibold'>Seller's Name: {data.sellersName}</h2>
                            <h2 className='font-semibold'>Location: {data.location}</h2>
                            <h2 className='font-semibold'>ResalePrice: ${data.resalePrice}</h2>
                            <h2 className='font-semibold'>OriginalPrice: ${data.originalPrice}</h2>
                            <h2 className='font-semibold'>Years Of Use: {data.yearsOfUse}</h2>
                            <h2 className='font-semibold'>PostedDate: {data.postedDate}</h2>
                            <div className="card-actions justify-end">
                                <label
                                    htmlFor="booking-modal"
                                    className="btn btn-primary"
                                    onClick={() => setPhone(data)}
                                >Book Now</label>
                            </div>
                        </div>
                        {phone &&
                            <BookingModal
                                phone={phone}
                                setPhone={setPhone}
                            ></BookingModal>
                        }
                    </div>
                )
            }
        </div >
    );
};

export default ViewMobile;