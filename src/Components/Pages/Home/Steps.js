import React from 'react';
import step1 from "../../../Assets/gif/57946-profile-user-card.gif";
import step2 from "../../../Assets/gif/14521-hotel-booking.gif";
import step3 from "../../../Assets/gif/23730-3d-mobile-payment.gif";
import step4 from "../../../Assets/gif/90723-cab-booking.gif";

const Steps = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        BIBLIOPHILE
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="f51618fb-0edb-4bcb-b35a-ffc770941286"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#f51618fb-0edb-4bcb-b35a-ffc770941286)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">How</span>
                    </span>{' '}
                    Bibliophile Works
                </h2>

            </div>
            <div className="grid gap-8 row-gap-0 lg:grid-cols-4">
                <div className="relative text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                        <img className="lg:w-20 lg:h-20 text-deep-purple-accent-400 sm:w-16 sm:h-16 rounded-full" src={step1} alt="" />
                    </div>
                    <h6 className="mb-2 text-2xl font-extrabold text-gray-800">Step 1</h6>
                    <p className="max-w-md mb-3 text-md text-gray-900 sm:mx-auto">
                        Be a seller/buyer
                    </p>

                    <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                        <svg
                            className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <line
                                fill="none"
                                strokeMiterlimit="10"
                                x1="2"
                                y1="12"
                                x2="22"
                                y2="12"
                            />
                            <polyline
                                fill="none"
                                strokeMiterlimit="10"
                                points="15,5 22,12 15,19 "
                            />
                        </svg>
                    </div>
                </div>
                <div className="relative text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                        <img className="lg:w-20 lg:h-20 text-deep-purple-accent-400 sm:w-16 sm:h-16 rounded-full" src={step2} alt="" />
                    </div>
                    <h6 className="mb-2 text-2xl font-extrabold text-gray-800">Step 2</h6>
                    <p className="max-w-md mb-3 text-md text-gray-900 sm:mx-auto">
                        Add books to sell/book to buy
                    </p>

                    <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                        <svg
                            className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <line
                                fill="none"
                                strokeMiterlimit="10"
                                x1="2"
                                y1="12"
                                x2="22"
                                y2="12"
                            />
                            <polyline
                                fill="none"
                                strokeMiterlimit="10"
                                points="15,5 22,12 15,19 "
                            />
                        </svg>
                    </div>
                </div>
                <div className="relative text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                        <img className="lg:w-20 lg:h-20 text-deep-purple-accent-400 sm:w-16 sm:h-16 rounded-full" src={step3} alt="" />
                    </div>
                    <h6 className="mb-2 text-2xl font-extrabold text-gray-800">Step 3</h6>
                    <p className="max-w-md mb-3 text-md text-gray-900 sm:mx-auto">
                        Payment
                    </p>

                    <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                        <svg
                            className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <line
                                fill="none"
                                strokeMiterlimit="10"
                                x1="2"
                                y1="12"
                                x2="22"
                                y2="12"
                            />
                            <polyline
                                fill="none"
                                strokeMiterlimit="10"
                                points="15,5 22,12 15,19 "
                            />
                        </svg>
                    </div>
                </div>
                <div className="relative text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                        <img className="lg:w-20 lg:h-20 text-deep-purple-accent-400 sm:w-16 sm:h-16 rounded-full" src={step4} alt="" />
                    </div>
                    <h6 className="mb-2 text-2xl font-extrabold text-gray-800">Step 4</h6>
                    <p className="max-w-md mb-3 text-md text-gray-900 sm:mx-auto">
                        Ready to Pickup
                    </p>

                </div>


            </div>
        </div>

    );
};

export default Steps;