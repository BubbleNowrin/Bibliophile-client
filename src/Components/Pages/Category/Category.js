import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategory from './SingleCategory';

const Category = () => {

    const categoryItems = useLoaderData();

    return (
        <div className='grid grid-cols-1 gap-6 my-6'>

            {
                categoryItems.map(categoryItem => <SingleCategory
                    key={categoryItem._id}
                    categoryItem={categoryItem}
                ></SingleCategory>

                )
            }
        </div>
    );
};

export default Category;