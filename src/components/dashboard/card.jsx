import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import { BiSolidHide } from "react-icons/bi";
import Chart from "react-apexcharts";
import "react-circular-progressbar/dist/styles.css";

function Card({ title, color, barValue, value, png, series }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div>
      {expanded ? (
        <ExpnadedCard
          title={title}
          color={color}
          barValue={barValue}
          value={value}
          png={png}
          series={series}
          setExpanded={() => setExpanded(false)}
        />
      ) : (
        // <ExpandedCard />
        <CompartCard
          title={title}
          color={color}
          barValue={barValue}
          value={value}
          png={png}
          series={series}
          setExpanded={() => setExpanded(true)}
        />
      )}
    </motion.div>
  );
}

function CompartCard({
  title,
  color,
  barValue,
  value,
  png,
  series,
  setExpanded,
}) {
  const Png = png;
  return (
    <motion.div>
      <CompartCardStyled
        style={{ background: color.background, boxShadow: color.boxShadow }}
        onClick={setExpanded}
        layoutId="expendableCard"
      >
        <RadialBar>
          <CircularProgressbar value={barValue} text={`${barValue}%`} />
          <span>{title}</span>
        </RadialBar>
        <Details>
          <Png />
          <span>${value}</span>
          <span>Last 24 hours</span>
        </Details>
      </CompartCardStyled>
    </motion.div>
  );
}

function ExpnadedCard({
  title,
  color,
  barValue,
  value,
  png,
  series,
  setExpanded,
}) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        anabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },

      dataLabels: {
        enabled: false,
      },

      stroke: {
        curve: "smooth",
        colors: ["white"],
      },

      tooltip: {
        x: {
          format: "dd/mm/yy HH:mm",
        },

        grid: {
          show: true,
        },
        xaxis: {
          type: "datatime",
          categories: [
            "2023-09-19T00:00:00.002",
            "2023-08-19T00:00:00.002",
            "2023-07-19T00:00:00.002",
            "2023-06-19T00:00:00.002",
            "2023-05-19T00:00:00.002",
            "2023-04-19T00:00:00.002",
          ],
        },
      },
    },
  };
  return (
    <motion.div>
      <ExpandedCardstyled
        style={{ background: color.background, boxShadow: color.boxShadow }}
        layoutId="expendableCard"
      >
        <div
          style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}
        >
          <BiSolidHide className="icon" onClick={setExpanded} />
        </div>
        <span>{title}</span>
        <ChatContainer>
          <Chart series={series} type="area" options={data.options} />
        </ChatContainer>
        <span>Last 24 hours</span>
      </ExpandedCardstyled>
    </motion.div>
  );
}
export default Card;

const CardStyling = styled.div`
  display: flex;
`;

const CompartCardStyled = styled.div`
  display: flex;
  flex: 1;
  height: 8%;
  border-radius: 0%.7rem;
  color: white;
  position: relative;
  cursor: pointer;
  padding: 1rem;
  box-sizing: border-box;

  &:hover {
    box-shadow: none !important;
  }
`;
const RadialBar = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;

  & .CircularProgressbar {
    width: 4rem;
    overflow: visible;
  }

  & .CircularProgressbar-path {
    stroke: white;
    stroke-width: 12px;
    filter: blur(2px 4px 6px white);
  }
  & .CircularProgressbar-trail {
    display: none;
  }

  & span {
    font-size: 17px;
    font-weight: bold;
  }
`;
const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  & span:nth-child(2) {
    font-size: 22px;
    font-weight: bold;
  }
  & span:nth-child(3) {
    font-size: 12px;
    font-weight: bold;
  }
`;

const ExpandedCardstyled = styled.div`
  position: absolute;
  width: 60%;
  top: 100px;
  height: 70vh;
  z-index: 9;
  left: 13rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  & span:nth-of-type(1) {
    color: white;
    font-size: 26px;
    font-weight: bold;
    text-shadow: 0px 0px 15px white;
  }

  & span:nth-of-type(2) {
    color: #ddd8d8;
    font-size: 16px;
  }
  @media screen and (max-width: 1200px) {
    top: 2rem;
    height: 70vh;
    left: 6rem;
  }
  @media screen and (max-width: 768px) {
    top: 8rem;
    height: 50%;
    left: 25px;
    width: 80%;
  }
`;
const ChatContainer = styled.div`
  width: 80%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
