//components/Layout.tsx
import React, { ReactNode } from 'react';
import Header from './Header';


interface LayoutProps {
  children: ReactNode; // Add this line to define the children prop
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mb-20 overflow-hidden sm:mb-32 md:mb-40">
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
