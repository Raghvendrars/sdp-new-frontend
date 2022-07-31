import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";

const ListAllHolidays = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("employeeHolidays/getAllHolidays", {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res?.data);
          setHolidays(res?.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <Paper
      sx={{
        minHeight: "200px",
        width: "100%",
        mx: "auto",
        maxHeight: "350px",
        overflowY: "scroll",
        height: "350px",
      }}
    >
      <Table sx={{ background: "#eceff1" }} stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Holiday Name</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {holidays?.map((data, index) => {
            return (
              <TableRow>
                <TableCell>
                  <Typography sx={TableBodyTextStyle}>{index + 1}</Typography>
                </TableCell>
                <TableCell sx={{ maxWidth: "300px" }}>
                  <Typography sx={TableBodyTextStyle}>
                    {data?.holidayName}
                  </Typography>
                </TableCell>
                <TableCell sx={{ maxWidth: "300px" }}>
                  <Typography sx={TableBodyTextStyle}>
                    {data.holidayDate}
                  </Typography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ListAllHolidays;

const TableBodyTextStyle = {
  fontSize: "12px",
  fontWeight: "normal",
  color: "#000",
  fontFamily: "Inter",
  textAlign: "left",
};
