import React from 'react';
import { GoVerified } from 'react-icons/go';

const Seller = ({ seller, handleDelete, handleVerify }) => {

    const { userName, photoURL, email, _id, verifyStatus } = seller;
    return (
        <tr>
            <th>
                <div className="avatar">
                    <div className="w-20 rounded">
                        <img src={photoURL} alt="" />
                    </div>
                </div>
            </th>
            <td>
                <div className="flex items-center space-x-3">

                    <div className='flex items-center justify-center'>
                        <div className="font-bold">{userName} </div>
                        {verifyStatus && <GoVerified className='text-blue-600  ml-1' />}
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-primary btn-md">Delete</button>
            </th>
            <th>
                <button onClick={() => handleVerify(_id)} disabled={verifyStatus} className="btn btn-primary btn-md">{verifyStatus ? 'verified' : 'unverified'}</button>
            </th>

        </tr>
    );
};

export default Seller;