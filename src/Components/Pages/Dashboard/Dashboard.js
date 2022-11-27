import React from 'react';
import { Helmet } from 'react-helmet-async';
import image from '../../../Assets/logo/Visual data-rafiki.png'

const Dashboard = () => {
    return (
        <div className='flex flex-col justify-center mt-10'>
            <Helmet>
                <title>Bibliophile - Dashboard</title>
            </Helmet>
            <h2 className='text-3xl font-serif text-center'>Dashboard</h2>
            <img className='w-9/12 mx-auto -mt-10' src={image} alt="" />
        </div>
    );
};

export default Dashboard;