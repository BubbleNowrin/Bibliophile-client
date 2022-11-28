import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Buyer from './Buyer';


const notifyDeleted = () => toast.success('Deleted Successfully!')
const AllBuyers = () => {

    const { logOut } = useContext(AuthContext);
    //get all the buyers
    const { data: buyers, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('https://assignment-product-resale-server.vercel.app/buyers', {
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

    //delete specific buyer
    const handleDelete = (id) => {
        fetch(`https://assignment-product-resale-server.vercel.app/buyers/${id}`, {
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
                    notifyDeleted();
                    refetch();
                }
            })
    };
    return (
        <div>

            <h2 className='text-3xl font-serif ml-2'>All Buyers</h2>
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
                            buyers?.map(buyer => <Buyer
                                key={buyer._id}
                                buyer={buyer}
                                handleDelete={handleDelete}
                            ></Buyer>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;