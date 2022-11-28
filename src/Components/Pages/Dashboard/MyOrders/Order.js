import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Order = ({ booking }) => {

    const { image, bookName, resalePrice, _id } = booking;
    return (
        <tr>
            <Helmet>
                <title>Bibliophile - Dashboard</title>
            </Helmet>
            <th>
                <div className="avatar">
                    <div className="w-20 rounded">
                        <img src={image} alt="" />
                    </div>
                </div>
            </th>
            <td>
                <div className="flex items-center space-x-3">

                    <div>
                        <div className="font-bold">{bookName}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">${resalePrice}</span>
            </td>
            <th>
                {
                    booking.resalePrice && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className="btn btn-primary btn-md px-7">Pay</button></Link>
                }
                {
                    booking.resalePrice && booking.paid && <span className=" text-green-600 border rounded-lg px-7">Paid</span>
                }
            </th>
        </tr>
    );
};

export default Order;