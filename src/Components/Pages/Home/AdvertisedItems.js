import React from 'react';

const AdvertisedItems = () => {
    return (
        <div className='mt-16 mb-16'>
            <h2 className='text-4xl text-center font-serif mb-12'>Advertisement</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                <div
                    className="relative bg-[url(https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)] bg-cover bg-center bg-no-repeat px-4 pb-4 pt-56 sm:px-6 sm:pb-6 sm:pt-64"
                >
                    <span className="absolute inset-0 bg-gray-900/25"></span>

                    <strong
                        className="absolute top-4 left-0 bg-red-600 py-1.5 px-3 text-xs uppercase tracking-wider text-white"
                    >
                        New
                    </strong>

                    <div className="relative text-center">
                        <h3
                            className="text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl"
                        >
                            Save
                            <span
                                className="relative inline-block before:absolute before:inset-x-0 before:bottom-0.5 before:h-2 before:bg-red-600"
                            >
                                <span className="relative"> 10% </span>
                            </span>
                            on Teles
                        </h3>

                        <p className="mt-1 text-white/95">1951-2022. Unchanged. Unmatched.</p>

                        <a
                            href="#"
                            className="mt-6 block bg-red-600 px-12 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-red-700 focus:outline-none focus:ring"
                        >
                            Shop Teles Now
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdvertisedItems;