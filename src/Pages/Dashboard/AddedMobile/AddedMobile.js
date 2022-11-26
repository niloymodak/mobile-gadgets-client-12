import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const AddedMobile = () => {
    const [deletingMobile, setDeletingMobile] = useState(null);

    const closeModal = () => {
        setDeletingMobile(null);
    }


    const { data: mobiles, isLoading, refetch } = useQuery({
        queryKey: ['mobiles'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/mobiles', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDeleteMobile = mobile => {
        fetch(`http://localhost:5000/mobiles/${mobile._id}`, {
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




    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl">Added Mobiles: {mobiles?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mobiles?.map((mobile, i) => <tr key={mobile._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={mobile.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{mobile.name}</td>
                                <td>{mobile.email}</td>
                                <td>{mobile.brand}</td>
                                <td>{mobile.model}</td>
                                <td>{mobile.price}</td>
                                <td>
                                    <label onClick={() => setDeletingMobile(mobile)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
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
    );
};

export default AddedMobile;