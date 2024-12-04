import { useState, useEffect } from "react";
import { NavbarMobile } from "./NavbarMobile";
import { NavbarDesktop } from "./NavbarDesktop";
import { useAuthStore } from "../../../hooks";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDisplayUserInfo, setIsDisplayUserInfo] = useState(false);
  const {status} = useAuthStore();


  const toggleDisplayUserInfo = (e) => {
    e.preventDefault();
    
    setIsDisplayUserInfo(!isDisplayUserInfo);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="p-6 font-poppins">
      {isMobile ? (
        <NavbarMobile status={status} isDisplayUserInfo={isDisplayUserInfo} toggleDisplayUserInfo={toggleDisplayUserInfo}/>
      ) : (
        <NavbarDesktop status={status} isDisplayUserInfo={isDisplayUserInfo} toggleDisplayUserInfo={toggleDisplayUserInfo}/>
      )}
    </header>
  );
};