import React from 'react';

const Buyer = ({ buyer, handleDelete }) => {

    const { userName, photoURL, email, _id } = buyer;
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

                    <div>
                        <div className="font-bold">{userName}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-primary btn-md">Delete</button>
            </th>
        </tr>
    );
};

export default Buyer;