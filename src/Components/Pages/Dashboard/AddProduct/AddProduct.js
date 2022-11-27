import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider';


const notify = () => toast.success('Product Added Successfully');

const AddProduct = () => {

    const { user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://assignment-product-resale-server.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    })


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const location = form.location.value;
        const originalPrice = form.oPrice.value;
        const resalePrice = form.rPrice.value;
        const condition = form.condition.value;
        const purchaseYear = form.purchaseYear.value;
        const mobileNumber = form.mobileNumber.value;
        const description = form.description.value;
        const categoryName = form.categoryName.value;
        const time = new Date();
        const used = form.used.value;
        const image = form.image.files[0];
        const selectedCategory = categories.find(category => category.category_name === categoryName);
        const id = selectedCategory._id;

        const formData = new FormData();
        formData.append("image", image);

        console.log(location, time, used);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const book = {
                        category_name: categoryName,
                        category_id: id,
                        image: imgData.data.url,
                        bookName: productName,
                        location: location,
                        originalPrice: originalPrice,
                        resalePrice: resalePrice,
                        used: used,
                        posted: time,
                        status: 'available',
                        seller: user?.displayName,
                        sellerEmail: user?.email,
                        condition: condition,
                        purchaseYear: purchaseYear,
                        mobileNumber: mobileNumber,
                        description: description
                    }

                    fetch('https://assignment-product-resale-server.vercel.app/books', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('Token')}`
                        },
                        body: JSON.stringify(book)
                    })
                        .then(res => {
                            if (res.status === 401 || res.status === 403) {
                                return logOut();
                            }
                            return res.json();
                        })
                        .then(data => {
                            console.log(data);
                            if (data.acknowledged) {
                                notify();
                                navigate('/dashboard/myProducts');
                            }
                        })
                }

            })
    }

    return (
        <div>
            <Helmet>
                <title>Bibliophile - Dashboard</title>
            </Helmet>
            <h2 className='text-3xl font-serif ml-2'>Add a Product</h2>
            <section class="bg-gray-300 rounded-lg shadow mt-5 lg:w-9/12 mx-auto">

                <div class="px-4 py-8 sm:px-10 mx-auto">
                    <div class="relative mt-6">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-500">
                            </div>
                        </div>
                        <div class="relative flex justify-center text-sm leading-5">
                            <span class="px-2 text-gray-500 bg-white">
                                Add Products Details Here
                            </span>
                        </div>
                    </div>

                    <div class="mt-6">
                        <form onSubmit={handleSubmit}>
                            <fieldset class="w-9/12 mx-auto space-y-6">
                                <div class="w-full">
                                    <div class=" relative ">
                                        <input name="productName" id="" type="text" placeholder="Product name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900 p-2 border" required />
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class=" relative ">
                                        <input name="location" id="" type="text" placeholder="Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900 p-2 border" required />
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class=" relative ">
                                        <input name="oPrice" id="" type="text" placeholder="Original Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900 p-2 border" required />
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class=" relative ">
                                        <input name="rPrice" id="lastname" type="text" placeholder="Resale Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900 p-2 border" required />
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class=" relative ">
                                        <input name="used" id="lastname" type="text" placeholder="Years of Use" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900 p-2 border" required />
                                    </div>
                                </div>


                                <div class="w-full">
                                    <div class=" relative ">
                                        <input name="mobileNumber" id="number" type="text" placeholder="Mobile Number" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900 p-2 border" required />
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class=" relative ">
                                        <input name='purchaseYear' id="pYear" type="text" placeholder="Purchase Year" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900 p-2 border" required />
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class=" relative ">
                                        <textarea name='description' className='mt-5 w-full text-gray-900 border' placeholder="Description" required></textarea>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class=" relative ">
                                        <label for="number" className="text-sm">Image</label>
                                        <input name="image" id="" type="file" placeholder="Image" className="w-full rounded-md text-gray-900 border" required />
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class=" relative ">
                                        <select name='condition' className="select select-bordered select-primary w-full  mb-2" required>
                                            <option disabled>Pick one</option>
                                            <option>Excellent</option>
                                            <option>Good</option>
                                            <option>Fair</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class=" relative ">
                                        <select name='categoryName' className="select select-bordered select-primary w-full  mb-2 text-gray-900" required>
                                            {
                                                categories.map(category => <option key={category._id}>{category.category_name}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <span class="block w-full rounded-md shadow-sm">
                                        <button type="submit" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Submit
                                        </button>
                                    </span>
                                </div>
                            </fieldset>
                        </form>
                    </div>

                </div>

            </section>
        </div >
    );
};

export default AddProduct;