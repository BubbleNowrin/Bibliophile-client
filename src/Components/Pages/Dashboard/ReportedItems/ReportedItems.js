import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Reported from './Reported';

const ReportedItems = () => {

    const { logOut } = useContext(AuthContext);

    const { data: reportedItems, refetch } = useQuery({
        queryKey: ['reported'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reported', {
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
        fetch(`http://localhost:5000/reported/${id}`, {
            method: 'DELETE',
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
                if (data.deletedCount > 0) {
                    //toast
                    refetch();
                }
            })
    };
    return (
        <div>
            <h2 className='text-3xl font-serif'>Reported Items</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>Book Name</th>
                            <th>Category</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reportedItems?.map(reported => <Reported
                                key={reported._id}
                                reported={reported}
                                handleDelete={handleDelete}
                            ></Reported>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItems;