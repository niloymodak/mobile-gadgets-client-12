// import { data } from 'autoprefixer';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingModal from '../Home/BookingModal/BookingModal';
import Loading from '../Shared/Loading/Loading';
import icon from '../../assets/icons/circle-check-solid.svg'


const ViewMobile = () => {
    const { id } = useParams();
    const [phone, setPhone] = useState({});

    const { data: categories = [], refetch, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('https://mobile-gadgets-server.vercel.app/v2/categories')
            .then(res => res.json())
    })

    const mobiles = categories?.find(data => data._id === id)
    // console.log(mobiles?.mobile);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex justify-center gap-4 mt-5 ml-'>
            {
                mobiles?.mobile.map((data, i) =>

                    < div className='card card-compact w-96 bg-base-100 mb-5 shadow-xl' key={i} >
                        <figure><img className='w-full' src={data.image} alt="Shoes" /></figure>
                        <div className="card-body ml-5">
                            <h2 className="card-title">Model: {data.name} </h2>
                            <div className='flex '>
                                <div>
                                    <h2 className='font-semibold'>Seller's Name: {data.sellersName}</h2>
                                </div>
                                <div>
                                    <img className='w-4 ml-2' src={icon} alt="" />
                                </div>
                            </div>
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
                                refetch={refetch}
                            ></BookingModal>
                        }
                    </div>
                )
            }
        </div >
    );
};

export default ViewMobile;