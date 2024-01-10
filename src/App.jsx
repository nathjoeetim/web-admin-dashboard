import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import SideBar from "./components/Sidebar/sidebar";
import MainDashboard from "./pages/mainDashboard/mainDash";
import RightSide from "./components/rightSide/rightSide";

function App() {
  return (
    <AppStyle>
      <AppGlass>
        <SideBar />
        <MainDashboard />
        <RightSide />
      </AppGlass>
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  /* background: linear-gradient(
    106.37deg,
    #ffe1bc 29.63%,
    #d1a1a3 51.55% #f3c6f1 90.85%
  ); */
  height: 100vh;
  display: flex;
  background: #eeb9ba;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;

  @media screen and (max-width: 768px) {
  }
`;

const AppGlass = styled.div`
  display: grid;
  height: 97%;
  width: 97%;

  border-radius: 2rem;
  background-color: rgba(255, 255, 255, 0.54);
  overflow: hidden;
  grid-template-columns: 11rem auto 20rem;
  gap: 20px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 10% 50% auto;
    overflow-y: scroll;
    padding-bottom: 10px;
    box-sizing: border-box;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
