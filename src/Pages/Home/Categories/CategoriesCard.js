import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ category }) => {
    const { _id, img, title } = category;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ml-3">
            <img src={img} style={{ objectFit: 'cover' }} alt="" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/viewmobile/${_id}`}>
                        <button className="btn btn-primary">View Mobile</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoriesCard;