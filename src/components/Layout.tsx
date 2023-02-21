import React, { Component } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

class Layout extends Component<LayoutProps> {
  render() {

    const { children } = this.props;

    return (
        <div className="layout-container flex flex-col items-center bg-white overflow-auto">
        <Navbar />
        <div className="h-full overflow-auto p-3">{children}</div>
      </div>
    )
  }
}

export default Layout;
