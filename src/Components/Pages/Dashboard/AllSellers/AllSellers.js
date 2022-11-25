import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Seller from './Seller';

const AllSellers = () => {

    const [verified, setVerified] = useState(false);
    const { data: sellers, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers');
            const data = res.json();
            return data;
        }
    })

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/sellers/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                }
            })
    };

    const handleVerify = (id) => {
        fetch(`http://localhost:5000/sellers/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    setVerified(true);
                }
            })
    };
    return (
        <div>
            <h2 className='text-3xl font-serif'>All Sellers</h2>
            <div className="overflow-x-auto  w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                Profile Pic
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers?.map(seller => <Seller
                                key={seller._id}
                                seller={seller}
                                handleDelete={handleDelete}
                                handleVerify={handleVerify}
                                verified={verified}
                            ></Seller>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;