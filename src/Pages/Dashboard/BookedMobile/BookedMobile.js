import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const BookedMobile = () => {
    const { user } = useContext(AuthContext);
    const [deletingMobile, setDeletingMobile] = useState(null);

    const closeModal = () => {
        setDeletingMobile(null);
    }

    const url = `https://mobile-gadgets-server.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    const handleDeleteMobile = mobile => {
        fetch(`https://mobile-gadgets-server.vercel.app/mobile/${mobile._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Mobile ${mobile.name} deleted successfully`)
                }
            })
    }
    return (
        <div>
            <h3 className="text-3xl mb-5">Selected Mobile</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Model</th>
                            <th>Phone</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.length && bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.model}</td>
                                <td>{booking.phone}</td>
                                <td>${booking.resalePrice}</td>
                                <td>
                                    {
                                        booking.resalePrice && !booking.paid && <Link
                                            to={`/payment/${booking._id}`}
                                        >
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.resalePrice && booking.paid && <span className='text-green-500'>Paid</span>
                                    }
                                </td>
                                <td>
                                    <label onClick={() => setDeletingMobile(booking)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
                <div>
                    {
                        deletingMobile && <ConfirmationModal
                            title={`Are you sure you want to delete?`}
                            message={`If you delete ${deletingMobile.name}. It cannot be undone.`}
                            successAction={handleDeleteMobile}
                            successButtonName="Delete"
                            modalData={deletingMobile}
                            closeModal={closeModal}
                        >
                        </ConfirmationModal>
                    }
                </div>
            </div>
        </div>
    );
};

export default BookedMobile;