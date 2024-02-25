import React from 'react';
import '@/styles/globals.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const DashboardPage = ({ Component, pageProps }) => { 
    return (
        <Sidebar>
            <Header /> 
            <Component {...pageProps} />
        </Sidebar>
    );
};

export default DashboardPage;