import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoPin, GoVerified } from 'react-icons/go';
import { FcMoneyTransfer } from 'react-icons/fc';
import { FaRecycle } from 'react-icons/fa';
import { RiUserLocationFill, RiFlag2Fill } from 'react-icons/ri';
import { MdDataUsage } from 'react-icons/md';
import { BsFillPersonBadgeFill } from 'react-icons/bs';

const SingleCategory = ({ categoryItem, setBookItem }) => {

    const [verified, setVerified] = useState(false);
    const { category_name, image, bookName, location, originalPrice
        , resalePrice, used, posted, seller, sellerEmail, _id } = categoryItem;

    useEffect(() => {
        fetch(`http://localhost:5000/verifiedSeller?email=${sellerEmail}`)
            .then(res => res.json())
            .then(data => {
                setVerified(data.verifyStatus);
            })
    }, [sellerEmail])

    const handleAddReport = (id) => {
        fetch(`http://localhost:5000/reported/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    //toast
                }
            })
    }

    return (

        <div>
            <article class="flex bg-white transition hover:shadow-xl">
                <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
                    <time

                        class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                    >
                        <span>{category_name}</span>
                        <span class="w-px flex-1 bg-gray-900/10"></span>
                        <span>{category_name}</span>
                    </time>
                </div>

                <div class="hidden sm:block sm:basis-56">
                    <img
                        alt=""
                        src={image}
                        class="aspect-square h-full w-full object-cover"
                    />
                </div>

                <div class="flex flex-1 flex-col justify-between">
                    <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <Link to="#">
                            <h3 class="font-serif text-xl uppercase text-gray-900">
                                {bookName}
                            </h3>
                        </Link>

                        <div className='flex items-center'>
                            <FcMoneyTransfer className='mt-2'></FcMoneyTransfer>
                            <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                                <span className='font-bold'>Original Price:</span> ${originalPrice}
                            </p>
                        </div>
                        <div className='flex items-center'>
                            <FaRecycle className='mt-2 text-green-500'></FaRecycle>
                            <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                                <span className='font-bold'> Resale Price:</span> ${resalePrice}
                            </p>
                        </div>
                        <div className='flex items-center'>
                            <RiUserLocationFill className='mt-2 text-red-600'></RiUserLocationFill>
                            <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                                <span className='font-bold'>Location:</span> {location}
                            </p>
                        </div>
                        <div className='flex items-center'>
                            <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                                <span className='font-bold ml-4'>Posted on:</span> {posted}
                            </p>
                            <GoPin className=' text-red-600'></GoPin>
                        </div>
                        <div className='flex items-center'>
                            <MdDataUsage className='mt-2 text-red-600'></MdDataUsage>
                            <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                                <span className='font-bold'>Used for:</span> {used}
                                months</p>
                        </div>
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                <BsFillPersonBadgeFill className='mt-2 text-blue-600'></BsFillPersonBadgeFill>
                                <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                                    <span className='font-bold'>Seller:</span> {seller}
                                </p>
                            </div>
                            {
                                sellerEmail && verified && <span className='text-blue-700 ml-2 mt-2'><GoVerified /></span>
                            }
                        </div>

                        <div className='flex flex-col justify-end items-end'>
                            <button
                                class="inline-block rounded-full border border-red-600 bg-red-600 p-2 text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500"
                                onClick={() => handleAddReport(_id)}
                            >
                                <span class="sr-only">Report</span>
                                <div className='flex'>
                                    <span className='text-xs'>Report</span>
                                    <RiFlag2Fill className='ml-1'></RiFlag2Fill>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="sm:flex sm:items-end sm:justify-end">
                        <label
                            onClick={() => setBookItem(categoryItem)}
                            htmlFor="booking-modal"
                            class="block bg-red-400 px-7 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-red-500"
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