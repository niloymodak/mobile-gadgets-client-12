import React from 'react';

const UpcomingBrandCard = ({ upcoming }) => {
    const { img, title } = upcoming;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ml-3">
            <img src={img} style={{ objectFit: 'cover' }} alt="" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default UpcomingBrandCard;