import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({ categoryItem, setBookItem }) => {

    const { category_name, image, bookName, location, originalPrice
        , resalePrice, used, posted, seller } = categoryItem;

    return (

        <div>
            <article class="flex bg-white transition hover:shadow-xl">
                <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
                    <time

                        class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                    >
                        <span>{category_name}</span>
                        <span class="w-px flex-1 bg-gray-900/10"></span>
                        <span>Oct 10</span>
                    </time>
                </div>

                <div class="hidden sm:block sm:basis-56">
                    <img
                        alt=""
                        src={image}
                        class="aspect-square h-full w-full object-cover"
                    />
                </div>

                <div class="flex flex-1 flex-col justify-between">
                    <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <Link to="#">
                            <h3 class="font-bold uppercase text-gray-900">
                                {bookName}
                            </h3>
                        </Link>

                        <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                            Original Price:{originalPrice}

                        </p>
                        <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                            Resale Price:{resalePrice}
                        </p>
                        <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                            Location:{location}
                        </p>
                        <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                            Posted on:{posted}
                        </p>
                        <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                            Used for:{used}
                        </p>
                        <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                            Seller:{seller}
                        </p>
                    </div>

                    <div class="sm:flex sm:items-end sm:justify-end">
                        <label
                            onClick={() => setBookItem(categoryItem)}
                            htmlFor="booking-modal"
                            class="block bg-red-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-red-500"
                        >
                            Book Now
                        </label>

                    </div>
                </div>
            </article>
        </div>

    );
};

export default SingleCategory;