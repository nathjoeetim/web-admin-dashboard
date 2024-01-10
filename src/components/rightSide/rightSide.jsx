import React from "react";
import styled from "styled-components";
import Updates from "../updates/updates";
import CustomerReviewComponent from "./customerReview/customerReview";

function RightSide() {
  return (
    <RightSideStyled>
      <div>
        <h3>Update</h3>
        {/* updates */}
        <Updates />
      </div>
      <div>
        <h3>Customers Review</h3>
        <CustomerReviewComponent />
      </div>
    </RightSideStyled>
  );
}

export default RightSide;

const RightSideStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  justify-content: start;

  @media screen and (max-width: 1200px) {
    justify-content: flex-start;
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 0;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
