import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisedItem = ({ advertised }) => {

    const { bookName, category_name, image, category_id } = advertised;
    console.log(image);
    return (
        <div >
            <div className="card w-96 h-64 bg-neutral shadow-xl image-full">
                <figure><img src={image} alt="" className='w-44' /></figure>
                <div className="card-body">
                    <h2 className="text-3xl font-serif text-white">{bookName}</h2>
                    <p className="text-md  text-white">{category_name}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/category/${category_id}`}><button className="btn btn-secondary text-white">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedItem;