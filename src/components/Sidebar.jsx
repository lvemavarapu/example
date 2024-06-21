import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
  background: #b6abe7;
  height: 48px;
  display: block;
  justify-content: flex-start;
    color: white;
  //margin-left: 12px;
`;

const NavIcon = styled(NavLink)`
  //margin-left: 12rem;
  font-size: 2rem;
  height: 30px;
  display: flex;
  
 `;

const SidebarNav = styled.nav`
  background: #b6abe7;
  //margin-left: 12px;
  height: 120vh;
  margin-top: 70px;
  display: block;
  font-weight: bold;
  font-size: 20px;
  justify-content: center;
  position: absolute;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
 
 `;

const SidebarWrap = styled.div`
  width: 100%;
 `;



const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <Nav>
                <h2>Home page</h2>
            </Nav>
            <IconContext.Provider value={{ color: "black" }}>
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={showSidebar} />
                </NavIcon>
            </IconContext.Provider>
                       <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to="#">
                        <AiIcons.AiOutlineClose onClick={showSidebar} />
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                </SidebarWrap>

            </SidebarNav>
        </>
    );
};

export default Sidebar;