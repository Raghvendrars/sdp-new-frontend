import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Paper, Grid, Button } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [getLoginUser, setgetLoginUser] = useState([]);

  useEffect(() => {
    axios
      .get("attendance_employee/get_employee_attendence", {
        withCredentials: true,
      })
      .then((res) => {
        setAttendanceData(res?.data);
        console.log(res[0]?.data);
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
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Entry Time</TableCell>
                <TableCell align="right">Exit Time</TableCell>
                <TableCell align="right">Total Hours</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attendanceData.length > 0 ? (
                attendanceData.map((data, k) => {
                  let date = new Date(data.createdAt).toLocaleDateString();
                  let entryTime = new Date(data.entryTime).toLocaleTimeString();
                  let exitTime = new Date(data.exitTime).toLocaleTimeString();
                  return (
                    <TableRow
                      key={k}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {k + 1}
                      </TableCell>
                      <TableCell align="right">{date}</TableCell>
                      <TableCell align="right">{entryTime}</TableCell>
                      <TableCell align="right">
                        {exitTime ? exitTime : <>You have't logged Of</>}
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

export default Attendance;
