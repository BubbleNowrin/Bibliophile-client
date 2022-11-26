import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Buyer from './Buyer';

const AllBuyers = () => {

    const { logOut } = useContext(AuthContext);

    const { data: buyers, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers', {
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
        fetch(`http://localhost:5000/buyers/${id}`, {
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
                    refetch();
                }
            })
    };
    return (
        <div>
            <h2 className='text-3xl font-serif'>All Buyers</h2>
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