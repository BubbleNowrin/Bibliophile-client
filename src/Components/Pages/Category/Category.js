import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookingModal from '../../BookingModal/BookingModal';
import SingleCategory from './SingleCategory';

const Category = () => {

    const [bookItem, setBookItem] = useState(null);
    //get data from loader
    const categoryItems = useLoaderData();

    return (

        <div>
            <h2 className="text-3xl text-serif mb-10 ml-2">{categoryItems[0].category_name}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-6'>

                {
                    categoryItems?.map(categoryItem => <SingleCategory
                        key={categoryItem._id}
                        categoryItem={categoryItem}
                        setBookItem={setBookItem}
                    ></SingleCategory>

                    )
                }
                {
                    bookItem &&
                    <BookingModal
                        bookItem={bookItem}
                        setBookItem={setBookItem}
                    ></BookingModal>
                }
            </div>
            <div className='text-center mt-20'>
                <Link
                    className=" inline-flex items-center rounded border border-red-400 bg-red-400 px-8 py-3 text-black hover:bg-transparent hover:text-red-400 focus:outline-none focus:ring active:text-red-500"
                    to="/"
                >
                    <span className="text-sm font-medium"> Back to Home </span>

                    <svg
                        className="ml-3 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Category;