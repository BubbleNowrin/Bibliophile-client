import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Order from './Order';

const MyOrders = () => {

    const { user, logOut } = useContext(AuthContext);

    const { data: bookings } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-product-resale-server.vercel.app/bookings?email=${user?.email}`, {
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
    return (
        <div>
            <h2 className='text-3xl font-serif ml-2'>My Orders</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>Book Name</th>
                            <th>Price</th>
                            <th>Payment Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map(booking => <Order
                                key={booking._id}
                                booking={booking}
                            ></Order>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;