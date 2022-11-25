import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider";
import Product from "./Product";


const MyProducts = () => {

    const { user } = useContext(AuthContext);

    const { data: books, refetch } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myBooks?email=${user?.email}`);
            const data = res.json();
            return data;
        }
    })

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/books/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                }
            })
    };

    const handleAdvertise = (id) => {
        fetch(`http://localhost:5000/books/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                }
            })
    }

    return (
        <div>
            <h2 className='text-3xl font-serif'>My Products</h2>
            <div className="overflow-x-auto  w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                Book Name
                            </th>
                            <th>Price</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books?.map(book => <Product
                                key={book._id}
                                book={book}
                                handleDelete={handleDelete}
                                handleAdvertise={handleAdvertise}
                            ></Product>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;