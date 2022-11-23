import { createBrowserRouter } from "react-router-dom";
import Login from "../../Components/Login/Login/Login";
import Signup from "../../Components/Login/SignUp/Signup";
import AboutUs from "../../Components/Pages/AboutUs/AboutUs";
import Blogs from "../../Components/Pages/Blogs/Blogs";
import Dashboard from "../../Components/Pages/Dashboard/Dashboard";
import Home from "../../Components/Pages/Home/Home";
import Main from "../../Layouts/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
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
    }

])