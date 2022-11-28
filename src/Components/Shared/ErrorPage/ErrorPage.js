import React from 'react';
import { useRouteError } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import errorPic from "../../../Assets/gif/88143-error.gif"
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {

    //get error element
    const error = useRouteError();

    return (
        <div>
            <Helmet>
                <title>Bibliophile - Error</title>
            </Helmet>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='mb-20 flex flex-col items-center justify-center min-h-screen'>
                <img src={errorPic} className="rounded-full lg:w-72" alt="" />
                <div>
                    <h2 className='text-red-600 text-center font-bold'>{error.status}</h2>
                    <p className='text-red-600 text-2xl text-center font-bold'>{error.statusText}</p>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ErrorPage;