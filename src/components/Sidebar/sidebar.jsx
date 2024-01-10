import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/imgs/logo.png";
import { FaSignOutAlt, FaBars } from "react-icons/fa";
import { SideBarData } from "../../data/data";
import { motion } from "framer-motion";

function SideBar() {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sideBarVarance = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  function HideExpandned() {
    setExpanded((previosu) => !previosu);
  }
  return (
    <>
      <BarStyled
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={HideExpandned}
      >
        <FaBars className="icon" />
      </BarStyled>
      <motion.div
        className="SidebarStyled"
        variants={sideBarVarance}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <LogoDiv>
          <img src={logo} alt="" />
          <span>
            Sh<span>o</span>ps
          </span>
        </LogoDiv>
        {/* menu item  */}
        <Menu>
          {SideBarData.map((item, index) => {
            function onNavigateToAnotherPage() {
              setSelected(index);
              // navigate to another page function here
            }
            return (
              <MenuItem
                id={index}
                className={selected === index ? "active" : ""}
                onClick={onNavigateToAnotherPage}
              >
                <div>
                  <item.icon />
                </div>
                <span>{item.header}</span>
              </MenuItem>
            );
          })}
          <MenuItem>
            <FaSignOutAlt />
          </MenuItem>
        </Menu>
      </motion.div>
    </>
  );
}

export default SideBar;

const BarStyled = styled.div`
  display: flex;
  position: fixed;
  top: 2rem;
  z-index: 9;
  background: #ffe0e0;
  padding: 10px;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  height: 4%;
  font-weight: bold;
  font-size: 22px;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  & img {
    width: 3rem;
    height: 3rem;
  }

  & span span {
    color: #ff919d;
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  gap: 2rem;
`;
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 2.5rem;
  margin-left: 2rem;
  position: relative;
  transition: all 300ms ease;
  font-size: 14px;
  border-radius: 0.7rem;

  &:hover {
    cursor: pointer;
  }

  &.active {
    background: #f799a354;
    margin-left: 0;

    &::before {
      content: "";
      width: 8px;
      height: 100%;
      background: #eea9b4;
      margin-right: calc(1rem -8px);
    }
  }

  &:last-child {
    position: absolute;
    bottom: 2.3rem;
    width: 100%;
  }

  @media screen and (max-width: 1200px) {
    & span {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    & span {
      display: block;
    }
    &:last-child {
      position: relative;
      margin-top: 2rem;
    }
  }
`;
