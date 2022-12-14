import { createBrowserRouter } from "react-router-dom";
import Login from "../../Components/Login/Login/Login";
import Signup from "../../Components/Login/SignUp/Signup";
import Blogs from "../../Components/Pages/Blogs/Blogs";
import Category from "../../Components/Pages/Category/Category";
import SingleCategory from "../../Components/Pages/Category/SingleCategory";
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
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import SellerRoute from "../SellerRoute/SellerRoute";

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
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://assignment-product-resale-server.vercel.app/books/${params.id}`),
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
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/add',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoutes><AllBuyers></AllBuyers></AdminRoutes>
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoutes><AllSellers></AllSellers></AdminRoutes>
            },
            {
                path: '/dashboard/myOrders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/reported',
                element: <AdminRoutes><ReportedItems></ReportedItems></AdminRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://assignment-product-resale-server.vercel.app/bookings/${params.id}`)
            },
        ]
    },

])