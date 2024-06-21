import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import styled from "styled-components";

export const SidebarLink = styled(NavLink)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: grey;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
  &:focus{
    background-color: darkorchid;
    cursor:auto;

  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  
`;

export  const DropdownLink = styled(NavLink)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
  &:focus{
    background-color: darkorchid;
  }
     `;

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </SidebarLink>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <DropdownLink to={item.path} key={index}>
                            {item.icon}
                            <SidebarLabel>{item.title}</SidebarLabel>
                        </DropdownLink>
                    );
                })}
        </>
    );
};

export default SubMenu;