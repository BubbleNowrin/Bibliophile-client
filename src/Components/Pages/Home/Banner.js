import React from 'react';
import image from '../../../Assets/images/img8.jpg';
import image1 from '../../../Assets/images/img4.jpg';
import { Helmet } from 'react-helmet-async';

const Banner = () => {
    return (
        <div className="mt-2">
            <Helmet>
                <title>Bibliophile - Home</title>
            </Helmet>
            <div className="bg-white pb-6 sm:pb-8 lg:pb-12 p-8">

                <section className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <div className="flex flex-wrap justify-between mb-8 md:mb-16">
                        <div className="w-full lg:w-1/3 flex flex-col justify-center lg:pt-48 lg:pb-24 mb-6 sm:mb-12 lg:mb-0">
                            <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-serif mb-4 md:mb-8">Find Your<br />Next Book ..</h1>

                            <p className="max-w-md text-gray-500 xl:text-lg leading-relaxed font-serif">The most appropriate book-site to sell and buy books. From Science-fiction to Literature, we offer the best collections of second-hand books at cheaper price.</p>
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
                </section>
            </div>
        </div>
    );
};

export default Banner;