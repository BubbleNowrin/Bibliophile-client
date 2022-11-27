import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoPin, GoVerified } from 'react-icons/go';
import { FcMoneyTransfer } from 'react-icons/fc';
import { FaRecycle } from 'react-icons/fa';
import { RiUserLocationFill, RiFlag2Fill } from 'react-icons/ri';
import { MdDataUsage } from 'react-icons/md';
import { BsFillPersonBadgeFill } from 'react-icons/bs';
import axios from 'axios';
import { AuthContext } from '../../../Contexts/AuthProvider';

const SingleCategory = ({ categoryItem, setBookItem }) => {

    console.log(categoryItem);
    const { logOut } = useContext(AuthContext);

    const [verified, setVerified] = useState(false);
    const [makeRed, setMakeRed] = useState(false);
    const { category_name, image, bookName, location, originalPrice
        , resalePrice, used, posted, seller, sellerEmail, _id, report } = categoryItem;


    const date = posted.slice(0, 10);
    const time = posted.split('T')[1].slice(0, 8);

    useEffect(() => {
        axios.get(`http://localhost:5000/verifiedSeller?email=${sellerEmail}`)
            .then(res => {
                setVerified(res.data);
            })
    }, [sellerEmail])

    const handleAddReport = (id) => {
        setMakeRed(true);
        fetch(`http://localhost:5000/reported/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('Token')}`
            }
        })
            .then(res => {
                if (res.status === 401 && res.status === 403) {
                    return logOut();
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    //toast
                }
            })
    }

    return (

        <div>
            <article className=" flex bg-white transition hover:shadow-xl lg:h-96">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                    <time

                        className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                    >
                        <span>{category_name}</span>
                        <span className="w-px flex-1 bg-gray-900/10"></span>
                        <span>{date}</span>
                    </time>
                </div>

                <div className="hidden sm:block sm:basis-56">
                    <img
                        alt=""
                        src={image}
                        className="aspect-square h-full w-full object-cover"
                    />
                </div>

                <div className=" flex flex-1 flex-col justify-between">
                    <div className="lg:hidden sm:block sm:basis-56">
                        <img
                            alt=""
                            src={image}
                            className="aspect-square h-full w-full object-cover"
                        />
                    </div>
                    <div className=" relative border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <Link to="#">
                            <h3 className="font-serif text-xl uppercase text-gray-900">
                                {bookName}
                            </h3>
                        </Link>

                        <div className='flex items-center'>
                            <FcMoneyTransfer className='mt-2'></FcMoneyTransfer>
                            <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                                <span className='font-bold'>Original Price:</span> ${originalPrice}
                            </p>
                        </div>
                        <div className='flex items-center'>
                            <FaRecycle className='mt-2 text-green-500'></FaRecycle>
                            <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                                <span className='font-bold'> Resale Price:</span> ${resalePrice}
                            </p>
                        </div>
                        <div className='flex items-center'>
                            <RiUserLocationFill className='mt-2 text-red-600'></RiUserLocationFill>
                            <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                                <span className='font-bold'>Location:</span> {location}
                            </p>
                        </div>
                        <div className='flex items-center'>
                            <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                                <span className='font-bold ml-4'>Posted Time:</span>{time}
                            </p>
                            <GoPin className=' text-red-600'></GoPin>
                        </div>
                        <div className='flex items-center'>
                            <MdDataUsage className='mt-2 text-red-600'></MdDataUsage>
                            <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                                <span className='font-bold'>Used for:</span> {used}
                                months</p>
                        </div>
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                <BsFillPersonBadgeFill className='mt-2 text-blue-600'></BsFillPersonBadgeFill>
                                <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                                    <span className='font-bold'>Seller:</span> {seller}
                                </p>
                            </div>
                            {
                                sellerEmail && verified && <span className='text-blue-700 ml-2 mt-2'><GoVerified /></span>
                            }
                        </div>

                        <div className='flex flex-col justify-end items-end absolute right-4 top-6'>
                            <button
                                className={`inline-block rounded-full p-2 ${makeRed && "text-red-600"}`}
                                onClick={() => handleAddReport(_id)}
                            >
                                <span className="sr-only">Report</span>
                                <div className='flex items-center'>
                                    <RiFlag2Fill className='ml-1'></RiFlag2Fill>
                                    <span className='text-xs'>Report</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="sm:flex sm:items-end sm:justify-end">
                        <label
                            onClick={() => setBookItem(categoryItem)}
                            htmlFor="booking-modal"
                            className="block bg-red-400 px-7 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-red-500"
                        >
                            Book Now
                        </label>

                    </div>
                </div>
            </article>
        </div>

    );
};

export default SingleCategory;