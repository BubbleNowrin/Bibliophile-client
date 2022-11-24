import { createBrowserRouter } from "react-router-dom";
import Login from "../../Components/Login/Login/Login";
import Signup from "../../Components/Login/SignUp/Signup";
import Blogs from "../../Components/Pages/Blogs/Blogs";
import Category from "../../Components/Pages/Category/Category";
import Dashboard from "../../Components/Pages/Dashboard/Dashboard";
import Home from "../../Components/Pages/Home/Home";
import ErrorPage from "../../Components/Shared/ErrorPage/ErrorPage";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";

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
                element: <Category></Category>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Category></Category>
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
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    },

])