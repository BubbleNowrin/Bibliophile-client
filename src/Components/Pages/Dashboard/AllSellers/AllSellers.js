import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Seller from './Seller';


const notifyDelete = () => toast.success('Deleted Successfully');
const notifyVerify = () => toast.success('Verified Successfully');

const AllSellers = () => {

    const { logOut } = useContext(AuthContext);

    const { data: sellers, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://assignment-product-resale-server.vercel.app/sellers', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('Token')}`
                }
            });
            if (res.status === 401 || res.status === 403) {
                return logOut();
            }
            const data = res.json();
            return data;
        }
    })

    const handleDelete = (id) => {
        fetch(`https://assignment-product-resale-server.vercel.app/sellers/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('Token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    notifyDelete();
                    refetch();
                }
            })
    };

    const handleVerify = (id) => {
        fetch(`https://assignment-product-resale-server.vercel.app/sellers/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('Token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    notifyVerify();
                    refetch();
                }
            })
    };
    return (
        <div>
            <h2 className='text-3xl font-serif ml-2'>All Sellers</h2>
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

                            ></Seller>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;