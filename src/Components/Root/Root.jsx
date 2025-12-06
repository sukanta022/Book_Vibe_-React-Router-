import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Banner from '../Banner/Banner';

const Root = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Header></Header>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Root;