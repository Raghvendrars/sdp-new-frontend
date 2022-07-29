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

export default function ShowAllCTC() {
  const [allCTC, setallCTC] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("adminCTC/getAllCTC", {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res?.data);
          setallCTC(res?.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

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
              <TableCell>Security Deposit</TableCell>
              <TableCell>Total CTC</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allCTC?.map((data, index) => {
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
                      {data.security_deposit}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: "300px" }}>
                    <Typography sx={{ whiteSpace: "initial" }}>
                      {data.total_ctc}
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
