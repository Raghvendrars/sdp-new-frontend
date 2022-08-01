import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { Paper, Grid, Button } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function AuthPayroll() {
    const [attendanceData, setAttendanceData] = useState([]);
    const [getLoginUser, setgetLoginUser] = useState([]);
  
    useEffect(() => {
      axios
        .get("empPayrole/getAllMyPayrole", {
          withCredentials: true,
        })
        .then((res) => {
          setAttendanceData(res?.data);
        });
    }, []);
  
    return (
      <Paper elevation={0} sx={{ bgcolor: "transparent" }}>
        <Paper
          sx={{ width: "90%", mx: "auto", mt: 10, bgcolor: "transparent" }}
          elevation={0}
        >
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell align="right">employeeName</TableCell>
                  <TableCell align="right">employmentId</TableCell>
                  <TableCell align="right">password</TableCell>
                  <TableCell align="right">role</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {attendanceData.length > 0 ? (
                  attendanceData.map((item,k) => {
                    return (
                      <TableRow
                        key={k}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {k + 1}
                        </TableCell>
                        <TableCell align="right">{item.employeeName}</TableCell>
                        <TableCell align="right">{item.role}</TableCell>
                        <TableCell align="right">
                        
                        </TableCell>
                        <TableCell align="right">8 Hrs</TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <h4>no data found</h4>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Paper>
    );
  };
  
  