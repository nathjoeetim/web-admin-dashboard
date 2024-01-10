import React from "react";
import styled from "styled-components";
import { CardsData } from "../../data/data";
import Card from "./card";

function Cards() {
  return (
    <CardsStyle>
      {CardsData.map((element, index) => {
        return (
          <ParentContainer id={index}>
            <Card
              barValue={element.barValue}
              color={element.color}
              png={element.png}
              series={element.series}
              title={element.title}
              value={element.value}
            />
          </ParentContainer>
        );
      })}
    </CardsStyle>
  );
}

export default Cards;

const CardsStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const ParentContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 1200px) {
    height: 9rem;
  }
`;
