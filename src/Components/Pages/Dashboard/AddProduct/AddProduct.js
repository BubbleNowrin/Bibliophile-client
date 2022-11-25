import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider';


const AddProduct = () => {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
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

                    fetch('http://localhost:5000/books', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(book)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.acknowledged) {
                                navigate('/dashboard/myProducts');
                            }
                        })
                }

            })
    }

    return (
        <div>
            <h2 className='text-3xl font-serif'>Add a Product</h2>
            <section className="p-6 bg-gray-600  text-gray-50">
                <form onSubmit={handleSubmit} action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <div className="space-y-2 col-span-full lg:col-span-1 flex items-center">
                            <p className="font-medium">Products Information</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label for="firstname" className="text-sm">Product Name</label>
                                <input name="productName" id="firstname" type="text" placeholder="Product name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900 p-2" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="location" className="text-sm">Location</label>
                                <input name="location" id="firstname" type="text" placeholder="Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900 p-2" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="oPrice" className="text-sm">Original Price</label>
                                <input name="oPrice" id="lastname" type="text" placeholder="Original Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900 p-2" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="rPrice" className="text-sm">Resale Price</label>
                                <input name="rPrice" id="lastname" type="text" placeholder="Resale Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900 p-2" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="used" className="text-sm">Years of Use</label>
                                <input name="used" id="lastname" type="text" placeholder="Years of Use" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900 p-2" required />
                            </div>
                            <div className="col-span-full sm:col-span-3 text-gray-800">
                                <select name='condition' className="select select-bordered select-primary w-full max-w-xs mb-2" required>
                                    <option disabled>Pick one</option>
                                    <option>Excellent</option>
                                    <option>Good</option>
                                    <option>Fair</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3 text-gray-800">
                                <select name='purchaseYear' className="select select-bordered select-primary w-full max-w-xs mb-2" required>
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
                                <label for="mobileNumber" className="text-sm">Mobile Number</label>
                                <input name="mobileNumber" id="number" type="text" placeholder="Mobile Number" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900 p-2" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <textarea name='description' className='mt-5 w-full text-gray-900' placeholder="Description" required></textarea>
                            </div>
                            <div className="col-span-full sm:col-span-3 bg-white">
                                <label for="number" className="text-sm">Image</label>
                                <input name="image" id="lastname" type="file" placeholder="Mobile Number" className="w-full rounded-md border-gray-700 text-gray-900" required />
                            </div>

                            <div className="col-span-full sm:col-span-3 text-gray-800 mt-3">
                                <select name='categoryName' className="select select-bordered select-primary w-full max-w-xs mb-2 text-gray-900" required>
                                    {
                                        categories.map(category => <option key={category._id}>{category.category_name}</option>)
                                    }
                                </select>
                            </div>
                            <button className='btn btn-outline'>Submit</button>
                        </div>

                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddProduct;