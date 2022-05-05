import React from 'react';
import Nav from './Nav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex bg-gray-700 justify-start items-center h-12 p-2 text-white shadow-md">
        <h2 className="text-2xl">Audio Store</h2>
        <Nav />
      </div>
      {props.children}
      <div className="flex items-center h-12 bg-gray-700 text-white">
        <h3>Copyright @ 2022 Honey Bear</h3>
      </div>
    </div>
  );
};

export default Layout;
