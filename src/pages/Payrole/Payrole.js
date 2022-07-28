import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Paper,
  Grid,
  TableHead,
  TableCell,
  Table,
  TableRow,
} from "@mui/material";

const Payrole = () => {
  const [payrole, setPayrole] = useState([]);
  useEffect(() => {
    try {
      axios
        .get("empPayrole/getCurrentMonthMyPayrole", { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          setPayrole(res?.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Paper>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Table sx={{ background: "#eceff1" }}>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Basic Salary</TableCell>
                <TableCell>Leave/Travel Allowance</TableCell>
                <TableCell>Medical Allowance</TableCell>
                <TableCell>No Of Leaves</TableCell>
                <TableCell>Performance Bonus</TableCell>
                <TableCell>Special Allowance</TableCell>
                <TableCell>HRA</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableHead>
              {payrole?.map((data, index) => {
                return (
                  <TableRow>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{data.basic_salary}</TableCell>
                    <TableCell>{data.leave_travel_allowance}</TableCell>
                    <TableCell>{data.medical_allowance}</TableCell>
                    <TableCell>{data.number_of_leaves}</TableCell>
                    <TableCell>{data.performance_bonus}</TableCell>
                    <TableCell>{data.special_allowance}</TableCell>
                    <TableCell>{data.HRA}</TableCell>
                    <TableCell>{data.net_salary}</TableCell>
                  </TableRow>
                );
              })}
            </TableHead>
          </Table>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Payrole;
