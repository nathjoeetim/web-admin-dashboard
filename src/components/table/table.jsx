import * as React from "react";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, trackingID, date, status) {
  return { name, trackingID, date, status };
}

const rows = [
  createData("Eren water ", 127678, "10 september 2022", "Approved"),
  createData("Anoda world ", 125678, "1 september 2023", "Pending"),
  createData("Eren water ", 123456258, "19 november 2023", "Approved"),
  createData("Eren water ", 1234573478, "27 september 2021", "Delivered"),
];

function TableComponent() {
  function makeStyles(status) {
    if (status == "Approved") {
      return {
        background: "rgb(142 254 159 / 47%)",
        color: "green",
      };
    }
    if (status == "Pending") {
      return {
        background: "#ffadadbf",
        color: "red",
      };
    }
    if (status == "Delivered") {
      return {
        background: "#59bfff",
        color: "white",
      };
    }
  }

  return (
    <TableContainerCustom>
      <h3>Recent order</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #00003029" }}
      >
        <Table
          className="table"
          sx={{ minWidth: 650 }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Tracking Id</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="">
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className="item"
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingID}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyles(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="left" className="details">
                  Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableContainerCustom>
  );
}

export default TableComponent;

const TableContainerCustom = styled.div`
  & .MuiPaper-root {
    padding: 5px;

    & .MuiTableCell-head {
      font-weight: bold !important;
    }

    & .table td,
    th {
      border: none !important;
    }

    & .table:first-child {
      border-radius: 0.7rem !important;
    }

    .status {
      padding: 4px;
      border-radius: 9px;
      box-sizing: border-box;
    }
  }

  .details {
    color: blue;
    cursor: pointer;
    text-decoration: underline;
  }

  @media screen and (max-width: 1200px) {
    width: 170%;
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 23rem;
  }
`;
