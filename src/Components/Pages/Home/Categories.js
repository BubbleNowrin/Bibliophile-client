import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })


    return (
        <div className='mt-14 mb-28'>
            <h2 className='text-4xl text-center font-serif mb-10'>Categories</h2>
            <div className="flex flex-wrap items-center justify-center">
                {
                    categories.map(category => <Link to=''>
                        <div className="flex-shrink-0 mx-2 -mb-6 relative overflow-hidden bg-base-300 rounded-lg max-w-xs shadow-lg">
                            <div className="relative pt-10 px-10 flex items-center justify-center">
                                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
                                </div>
                                <img className="relative w-24" src={category.image} alt="shopping" />
                            </div>
                            <div className="relative text-white px-6 pb-6 mt-6">
                                <span className="block opacity-75 -mb-1">
                                    Outdoor
                                </span>
                                <div className="flex justify-between">
                                    <span className="block font-semibold text-xl">
                                        Oak Tree
                                    </span>
                                    <span className="bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                                        $68.50
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