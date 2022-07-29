import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Button,
  Grid,
  Container,
  Typography,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
} from "@mui/material";

// employeeId,
// employeeName,
// basic_salary,
// HRA,
// special_allowance,
// leave_travel_allowance,
// medical_allowance,
// performance_bonus,
// number_of_leaves,
// total_monthly,
// net_salary,

export default function ShowAllPayrole() {
  const [allPayrole, setallPayrole] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("adminPayrole/getAllPayrole", {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res?.data);
          setallPayrole(res?.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(allPayrole);
  return (
    <Paper>
      <Grid>
        <Table sx={{ background: "#eceff1" }}>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Employee Name</TableCell>
              <TableCell>Basic Salary</TableCell>
              <TableCell>HRA</TableCell>
              <TableCell>Special Allowance</TableCell>
              <TableCell>Leave Travel Allowance</TableCell>
              <TableCell>Medical Allowance</TableCell>
              <TableCell>Performace Bonus</TableCell>
              <TableCell>Number of Leaves</TableCell>
              <TableCell>Monthy Salary</TableCell>
              <TableCell>Net Salary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allPayrole?.map((data, index) => {
              //   let date = new Date(data.createdAt).toLocaleDateString();
              //   console.log(data, date);
              return (
                <TableRow>
                  <TableCell>
                    <Typography>{index + 1}</Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: "300px" }}>
                    <Typography>{data.employeeName}</Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: "300px" }}>
                    <Typography sx={{ whiteSpace: "initial" }}>
                      {data.basic_salary}
                    </Typography>
                  </TableCell>

                  <TableCell sx={{ maxWidth: "300px" }}>
                    <Typography sx={{ whiteSpace: "initial" }}>
                      {data.HRA}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: "300px" }}>
                    <Typography sx={{ whiteSpace: "initial" }}>
                      {data.special_allowance}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: "300px" }}>
                    <Typography sx={{ whiteSpace: "initial" }}>
                      {data.leave_travel_allowance}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: "300px" }}>
                    <Typography sx={{ whiteSpace: "initial" }}>
                      {data.medical_allowance}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: "300px" }}>
                    <Typography sx={{ whiteSpace: "initial" }}>
                      {data.performance_bonus}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: "300px" }}>
                    <Typography sx={{ whiteSpace: "initial" }}>
                      {data.number_of_leaves}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: "300px" }}>
                    <Typography sx={{ whiteSpace: "initial" }}>
                      {data.total_monthly}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: "300px" }}>
                    <Typography sx={{ whiteSpace: "initial" }}>
                      {data.net_salary}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
    </Paper>
  );
}
