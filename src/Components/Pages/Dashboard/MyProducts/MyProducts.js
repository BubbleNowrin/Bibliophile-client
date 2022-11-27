import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider";
import Product from "./Product";

const notifyDelete = () => toast.success('Deleted Successfully');
const notifyAdvertised = () => toast.success('Advertised Successfully! Check Advertisements');

const MyProducts = () => {

    const navigate = useNavigate();

    const { user, logOut } = useContext(AuthContext);

    const { data: books, refetch } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-product-resale-server.vercel.app/myBooks?email=${user?.email}`, {
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
        fetch(`https://assignment-product-resale-server.vercel.app/books/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem("Token")}`
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
                    notifyDelete();
                    refetch();
                }
            })
    };

    const handleAdvertise = (id) => {
        fetch(`https://assignment-product-resale-server.vercel.app/books/${id}`, {
            method: 'PUT',
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
                if (data.modifiedCount > 0) {
                    notifyAdvertised();
                    refetch();
                    navigate('/');
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>Bibliophile - Dashboard</title>
            </Helmet>
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