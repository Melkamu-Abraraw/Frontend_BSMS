import React from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header';

const DashboardPage = ({ Component, pageProps }) => { 
    return (
        <Sidebar>
            <Header /> 
            <Component {...pageProps} />
           
        </Sidebar>
    );
};

export default DashboardPage;
