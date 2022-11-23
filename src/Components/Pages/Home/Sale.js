import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../Assets/images/Reading book-pana.png'

const Sale = () => {
    return (

        <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto space-y-12">

                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <img src={image} alt="" className="h-96 object-cover dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <span className="text-xs uppercase dark:text-gray-400">Sale! Sale! Sale!</span>
                        <h3 className="text-3xl font-bold">Special 50% off for Students!!!</h3>
                        <p className="my-6 dark:text-gray-400">We care about students. So, we arranged special discounts for students. What are you waiting for? Hurry Up!!</p>
                        <a
                            class="group flex items-center justify-between rounded-lg border border-gray-600 bg-gray-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring self-start"
                            href="/download"
                        >
                            <span
                                class="font-medium text-white transition-colors group-hover:text-gray-600 group-active:text-gray-500"
                            >
                                Find out more
                            </span>

                            <span
                                class="ml-4 flex-shrink-0 rounded-full border border-current bg-white p-2 text-gray-600 group-active:text-gray-500"
                            >
                                <svg
                                    class="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </span>
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Sale;