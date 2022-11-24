import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AddProduct = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h2 className='text-3xl font-serif'>Add a Product</h2>
            <section className="p-6 bg-gray-600 text-gray-50">
                <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <div className="space-y-2 col-span-full lg:col-span-1 flex items-center">
                            <p className="font-medium">Products Information</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label for="firstname" className="text-sm">Product Name</label>
                                <input name="productName" id="firstname" type="text" placeholder="Product name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="location" className="text-sm">Location</label>
                                <input name="location" id="firstname" type="text" placeholder="Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="oPrice" className="text-sm">Original Price</label>
                                <input name="oPrice" id="lastname" type="text" placeholder="Original Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="rPrice" className="text-sm">Resale Price</label>
                                <input name="rPrice" id="lastname" type="text" placeholder="Resale Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3 text-gray-800">
                                <select name='condition' className="select select-bordered select-primary w-full max-w-xs mb-2">
                                    <option disabled>Pick one</option>
                                    <option>Excellent</option>
                                    <option>Good</option>
                                    <option>Fair</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3 text-gray-800">
                                <select name='purchaseYear' className="select select-bordered select-primary w-full max-w-xs mb-2">
                                    <option disabled>Pick One</option>
                                    <option>2022</option>
                                    <option>2021</option>
                                    <option>2020</option>
                                    <option>2019</option>
                                    <option>2018</option>
                                    <option>2017</option>
                                    <option>2016</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="number" className="text-sm">Mobile Number</label>
                                <input name="number" id="lastname" type="text" placeholder="Mobile Number" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <textarea className='mt-5 w-full' placeholder="Description"></textarea>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="number" className="text-sm">Image</label>
                                <input name="number" id="lastname" type="file" placeholder="Mobile Number" className="w-full rounded-md border-gray-700 text-white p-2" />
                            </div>

                            <div className="col-span-full sm:col-span-3 text-gray-800 mt-3">
                                <select name='condition' className="select select-bordered select-primary w-full max-w-xs mb-2">
                                    <option disabled>Pick one</option>
                                    <option>Excellent</option>
                                    <option>Good</option>
                                    <option>Fair</option>
                                </select>
                            </div>
                        </div>

                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddProduct;