import React from 'react';
import Sidebar from '@/components/DashboardCom/Sidebar';
import Header from '@/components/DashboardCom/Header';

const DashboardPage = ({ Component, pageProps }) => { 
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <Header />
                <div className="flex-grow overflow-y-auto">
                    <Component {...pageProps} />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
