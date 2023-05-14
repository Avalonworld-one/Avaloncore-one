//components/Layout.tsx
import React, { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mb-20 overflow-hidden sm:mb-32 md:mb-40">
      <div className="relative">
        <div className="px-4 sm:px-6 md:px-8">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
