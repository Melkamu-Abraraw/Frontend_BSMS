import React from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';

const Layout = ({ children }) => {
  return (
    <Sidebar>
      {children}
      
    </Sidebar>
  );
};

export default Layout;
