import React from "react";
import styled from "styled-components";
import { updateData } from "../../data/data";

function Updates() {
  return (
    <UpdateContainer>
      {updateData.map((data) => {
        return (
          <Updatestyled>
            <img src={data.img} alt="" />
            <NoteStyling>
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{data.name}</span>
                <span>{data.note}</span>
              </div>
              <span>{data.time}</span>
            </NoteStyling>
          </Updatestyled>
        );
      })}
    </UpdateContainer>
  );
}

export default Updates;

const UpdateContainer = styled.div`
  width: 85%;
  background: #ffffff7b;
  border-radius: 0%.7rem;
  padding: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 13px;
`;
const Updatestyled = styled.div`
  display: flex;
  gap: 0.5rem;

  & img {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

const NoteStyling = styled.div`
  & div span:nth-of-type(1) {
    /* color: red; */
    font-weight: bold;
  }
`;
