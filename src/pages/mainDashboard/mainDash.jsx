import React from "react";
import styled from "styled-components";
import Cards from "../../components/dashboard/cards";
import TableComponent from "../../components/table/table";

function MainDashboard() {
  return (
    <MainDashStyled>
      <h1>Dashboard</h1>
      <Cards />
      <TableComponent />
    </MainDashStyled>
  );
}

export default MainDashboard;

const MainDashStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-sizing: border-box;

  @media screen and (max-width: 1200px) {
    justify-content: flex-start;
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;
