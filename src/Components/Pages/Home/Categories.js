import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://assignment-product-resale-server.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    })


    return (
        <div className='mt-14 mb-36'>
            <h2 className='text-4xl text-center font-serif mb-10'>Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-[80%] mx-auto items-center justify-center gap-y-10 lg:gap-y-0">
                {
                    categories.map(category => <Link key={category._id} to={`/category/${category._id}`}>
                        <div className="flex-shrink-0 mx-2 -mb-6 relative overflow-hidden bg-base-300 rounded-lg max-w-xs shadow-lg hover:scale-110 ease-in duration-100">
                            <div className="relative pt-10 px-10 flex items-center justify-center">
                                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
                                </div>
                                <img className="relative w-24" src={category.image} alt="shopping" />
                            </div>
                            <div className="relative text-white px-6 pb-6 mt-6">

                                <div className="flex justify-center align-center">
                                    <span className="block text-xs bg-white rounded-full text-purple-500 font-serif px-3 py-2 leading-none">
                                        {category.category_name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Categories;