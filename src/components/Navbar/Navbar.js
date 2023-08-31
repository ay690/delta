import React, { useState } from "react";
import { FaRProject, FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import { data } from "../../data/NavbarData";
import {
  Nav,
  NavBtnLink,
  NavIcon,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavbarContainer,
  MobileIcon,
} from "./NavbarStyles";
import { useHistory, useLocation } from "react-router-dom";

const Navbar = () => {
 const [show, setShow] = useState(false);
 const history = useHistory();
 const location = useLocation();

 const handleClick = () => {
    // setShow(prev => !prev) or 
    setShow(!show);
 }

 const scrollTo = (id) => {
    const ele = document.getElementById(id);

    ele.scrollIntoView({
        behavior: "smooth",
    })
 }

 const closeMobileMenu = (to, id) => {
   if(id && location.pathname === "/"){
    scrollTo(id);
   }

   history.push(to);
   setShow(false);
 }

  return (
    <IconContext.Provider value={{ color: '#fff' }} >
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src="./assets/logo.png" alt="Logo" /> Delta
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            { show ? <FaTimes /> : <CgMenuRight /> }
          </MobileIcon>
          <NavMenu show = {show} >
            {data.map((el, idx) => (
              <NavItem key={idx}>
                <NavLinks onClick={() => closeMobileMenu(el.to, el.id)} >
                    {el.text}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
