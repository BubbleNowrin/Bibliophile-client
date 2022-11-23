import React from 'react';
import image from '../../../Assets/images/img8.jpg';
import image1 from '../../../Assets/images/img4.jpg';

const Banner = () => {
    return (
        <div className="mt-2">
            <div className="bg-white pb-6 sm:pb-8 lg:pb-12 p-8">

                <section className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <div className="flex flex-wrap justify-between mb-8 md:mb-16">
                        <div className="w-full lg:w-1/3 flex flex-col justify-center lg:pt-48 lg:pb-24 mb-6 sm:mb-12 lg:mb-0">
                            <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-8">Find Your<br />Next Book</h1>

                            <p className="max-w-md text-gray-500 xl:text-lg leading-relaxed">The most appropriate book-site to sell and buy books. From Science-fiction to Literature, we offer the best collections of second-hand books at cheaper price.</p>
                        </div>

                        <div className="w-full lg:w-2/3 flex mb-12 md:mb-16">
                            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden relative z-10 top-12 md:top-16 left-12 md:left-16 -ml-12 lg:ml-0">
                                <img src={image1} loading="lazy" alt="" className="w-full h-full object-cover object-center" />
                            </div>

                            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                                <img src={image} loading="lazy" alt="" className="w-full h-full object-cover object-center" />
                            </div>
                        </div>
                    </div>

                    {/* <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="w-64 h-12 flex border rounded-lg overflow-hidden divide-x">
                            <a href="#" className="w-1/3 flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 text-gray-500 transition duration-100">Men</a>
                            <a href="#" className="w-1/3 flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 text-gray-500 transition duration-100">Women</a>
                            <a href="#" className="w-1/3 flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 text-gray-500 transition duration-100">Teens</a>
                        </div>

                    </div> */}
                </section>
            </div>
        </div>
    );
};

export default Banner;