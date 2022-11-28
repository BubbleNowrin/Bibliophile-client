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
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import useBuyer from '../../../hooks/useBuyer';
import { Helmet } from 'react-helmet-async';

const notify = () => toast.error('You have reported already!')
const SingleCategory = ({ categoryItem, setBookItem }) => {

    const { logOut, user } = useContext(AuthContext);

    const [isBuyer] = useBuyer(user?.email);

    const [verified, setVerified] = useState(false);
    const [makeRed, setMakeRed] = useState(false);
    const { category_name, image, bookName, location, originalPrice
        , resalePrice, used, posted, seller, sellerEmail, _id } = categoryItem;

    //get the time and date from date object
    const date = posted.slice(0, 10);
    const time = posted.split('T')[1].slice(0, 8);

    //get the verified seller
    useEffect(() => {
        axios.get(`https://assignment-product-resale-server.vercel.app/verifiedSeller?email=${sellerEmail}`)
            .then(res => {
                setVerified(res.data);
            })
    }, [sellerEmail])

    //sweet alert to confirm report
    const handleAddReport = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Report it!'
        }).then((result) => {
            if (result.isConfirmed) {
                setMakeRed(true);
                fetch(`https://assignment-product-resale-server.vercel.app/reported/${id}`, {
                    method: 'PUT',
                    headers: {
                        "content-type": "application/json",
                        authorization: `bearer ${localStorage.getItem('Token')}`
                    },
                    body: JSON.stringify({ email: user?.email, reportId: id })

                })
                    .then(res => {
                        if (res.status === 401 && res.status === 403) {
                            return logOut();
                        }
                        return res.json()
                    })
                    .then(data => {
                        console.log(data);
                        if (data.acknowledged) {
                            //toast reported successfully
                            Swal.fire(
                                'Reported!',
                                'You Reported Successfully.',
                                'success'
                            )

                        }
                        if (data.error) {
                            //toast can not report
                            notify();
                        }
                    })

            }

        })

    }

    return (

        <div>
            <article className=" flex bg-white transition hover:shadow-xl lg:h-96">
                <Helmet>
                    <title>Bibliophile - Books</title>
                </Helmet>
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
                            <GoPin className=' text-red-600'></GoPin>
                            <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                                <span className='font-bold'>Posted Time: </span>{time}
                            </p>

                        </div>
                        <div className='flex items-center'>
                            <MdDataUsage className='mt-2 text-red-600'></MdDataUsage>
                            <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                                <span className='font-bold'>Used for: </span> {used}
                                years</p>
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

                        <div className='flex flex-col justify-end items-end absolute top-10 right-2 lg:right-1 lg:-top-1'>
                            {
                                isBuyer && <button
                                    className={`inline-block rounded-full p-2 ${makeRed && "text-red-600"}`}
                                    onClick={() => handleAddReport(_id)}
                                >
                                    <span className="sr-only">Report</span>
                                    <div className='flex items-center border border-red-600 rounded-xl p-1'>
                                        <small className='text-xs'>Report</small>
                                        <RiFlag2Fill className='ml-1'></RiFlag2Fill>
                                    </div>
                                </button>
                            }
                        </div>
                    </div>
                    <div className="sm:flex sm:items-end sm:justify-end">
                        {
                            isBuyer && <label
                                onClick={() => setBookItem(categoryItem)}
                                htmlFor="booking-modal"
                                className="block bg-red-400 px-7 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-red-500"
                            >
                                Book Now
                            </label>
                        }

                    </div>
                </div>
            </article>

        </div>

    );
};

export default SingleCategory;