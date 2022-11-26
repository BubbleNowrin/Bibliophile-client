import React from 'react';

const Reported = ({ reported, handleDelete }) => {

    const { image, bookName, category_name, _id } = reported;
    return (
        <tr>
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
                <span className="badge badge-ghost badge-sm">{category_name}</span>
            </td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-primary btn-md">Delete</button>
            </th>
        </tr>
    );
};

export default Reported;