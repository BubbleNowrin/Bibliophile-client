import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisedItem from './AdvertisedItem';

const AdvertisedItems = () => {

    //get the advertised items
    const { data: advertisedItems } = useQuery({
        queryKey: ['advertised'],
        queryFn: async () => {
            const res = await fetch('https://assignment-product-resale-server.vercel.app/advertised');
            const data = res.json();
            return data;
        }
    })
    //do not show the advertisement section if no product
    if (advertisedItems?.length === 0) {
        return <div></div>
    }
    return (
        <div className='mt-16 mb-16' >
            <h2 className='text-4xl text-center font-serif mb-12'>Advertisement</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    advertisedItems?.map(advertised => <AdvertisedItem
                        key={advertised._id}
                        advertised={advertised}
                    ></AdvertisedItem>)
                }
            </div>
        </div>
    );
};

export default AdvertisedItems;