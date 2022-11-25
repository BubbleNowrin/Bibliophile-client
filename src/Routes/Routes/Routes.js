import { createBrowserRouter } from "react-router-dom";
import Login from "../../Components/Login/Login/Login";
import Signup from "../../Components/Login/SignUp/Signup";
import Blogs from "../../Components/Pages/Blogs/Blogs";
import Category from "../../Components/Pages/Category/Category";
import AddProduct from "../../Components/Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Components/Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Components/Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Components/Pages/Dashboard/Dashboard";
import MyOrders from "../../Components/Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Components/Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../Components/Pages/Dashboard/Payment/Payment";
import ReportedItems from "../../Components/Pages/Dashboard/ReportedItems/ReportedItems";
import Home from "../../Components/Pages/Home/Home";
import ErrorPage from "../../Components/Shared/ErrorPage/ErrorPage";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/category',
                element: <PrivateRoutes><Category></Category></PrivateRoutes>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <PrivateRoutes><Category></Category></PrivateRoutes>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/add',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/allSellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/reported',
                element: <ReportedItems></ReportedItems>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    },

])