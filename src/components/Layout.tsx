import React, { FC } from "react";

import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  
  return (
    <div className="layout-container flex flex-col items-center bg-zinc-900 dark:bg-slate-200 overflow-auto">
      <Navbar />
      <div className="h-full overflow-auto p-3">{children}</div>
    </div>
  );
};

export default Layout;