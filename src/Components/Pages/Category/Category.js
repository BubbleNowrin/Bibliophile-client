import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../BookingModal/BookingModal';
import SingleCategory from './SingleCategory';

const Category = () => {

    const [bookItem, setBookItem] = useState(null);

    console.log(bookItem);
    const categoryItems = useLoaderData();

    return (

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-6'>

            {
                categoryItems.map(categoryItem => <SingleCategory
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
    );
};

export default Category;