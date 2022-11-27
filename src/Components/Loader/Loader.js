import React from 'react';
import loader from '../../Assets/logo/9582-liquid-4-dot-loader.gif'

const Loader = () => {
    return (
        <div className='min-h-[60vh] flex items-center justify-center'>
            <img src={loader} className=" rounded-full" alt="" />
        </div>
    );
};

export default Loader;