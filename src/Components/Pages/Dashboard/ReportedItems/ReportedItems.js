import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Reported from './Reported';

const ReportedItems = () => {

    const { data: reportedItems, refetch } = useQuery({
        queryKey: ['reported'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reported');
            const data = res.json();
            return data;
        }
    })
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/reported/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
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