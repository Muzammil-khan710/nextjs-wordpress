import React from "react";
import { Toaster } from "react-hot-toast";
import HeaderTwo from "./web-elevate/header/HeaderTwo";
import MobileNavTwo from "./web-elevate/header/MobilenavTwo";

// import MyModal from "./home/Modal";
import Footer from "./Footer";
import Modebutton from "./web-elevate/header/Modebutton";
type LayoutProps = {
  children: React.ReactNode;
  className?: string;
  background?: boolean
};

const LayoutThree = ({ children, className, background=true }: LayoutProps) => {
  return (
    <React.Fragment>
      <HeaderTwo />
      <MobileNavTwo  />
      <Modebutton />
      {background && <div className="background-svg absolute inset-0 h-[1250px] z-[-1]" ></div>}
      <main
        className={`layout3xl:max-w-[1440px] !pb-0 p-4 md:p-6 lg:p-12 layout3xl:p-20   ${className}  `}
      >
        {children}

      </main>
      <Footer />


      <Toaster />
    </React.Fragment>
  );
};

export default LayoutThree;
