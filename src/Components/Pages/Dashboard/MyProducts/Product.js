import React from 'react';

const Product = ({ book, handleDelete }) => {

    const { bookName, resalePrice, status, _id } = book;
    return (
        <tr>
            <th>
                <div className="flex items-center space-x-3">

                    <div>
                        <div className="font-bold">{bookName}</div>
                    </div>
                </div>
            </th>
            <td>
                <div className="flex items-center space-x-3">

                    <div>
                        <div className="font-semibold">$ {resalePrice}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{status}</span>
            </td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-primary btn-md">Delete</button>
            </th>
            <th>
                <button className="btn btn-primary btn-md">Advertise</button>
            </th>

        </tr>
    );
};

export default Product;