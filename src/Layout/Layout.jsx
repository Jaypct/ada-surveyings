import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  const [activeLink, setActiveLink] = useState("#home");

  return (
    <div>
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
