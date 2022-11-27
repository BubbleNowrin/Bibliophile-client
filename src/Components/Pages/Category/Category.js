import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../BookingModal/BookingModal';
import SingleCategory from './SingleCategory';

const Category = () => {

    const [bookItem, setBookItem] = useState(null);
    // const [categoryName, setCategoryName] = useState('');
    console.log(bookItem);
    const categoryItems = useLoaderData();

    return (

        <div>
            <h2 className="text-3xl text-serif mb-10">{categoryItems[0].category_name}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-6'>

                {
                    categoryItems?.map(categoryItem => <SingleCategory
                        key={categoryItem._id}
                        categoryItem={categoryItem}
                        setBookItem={setBookItem}
                    // setCategoryName={setCategoryName}
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
        </div>
    );
};

export default Category;