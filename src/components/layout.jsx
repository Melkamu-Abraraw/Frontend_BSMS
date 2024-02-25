import React from 'react';
import Sidebar from '@/components/Sidebar';

const Layout = ({ children }) => {
  return (
    <Sidebar>
      {children}
      
    </Sidebar>
  );
};

export default Layout;
