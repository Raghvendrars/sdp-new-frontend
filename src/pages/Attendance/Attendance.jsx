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
import useGetLoginUser from "../../hooks/loginUser/useGetLoginUser";

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [getLoginUser, setgetLoginUser] = useState([]);
  const { data, error } = useGetLoginUser();
  const [startTime,setstartTime]=useState()
  const [endTime,setendTime]=useState()

  console.log(data);

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/attendance_employee/get_employee_attendence",
        {
          withCredentials: true,
        }
      )
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
                  var currentTime = data.entryTime,
                   hours = currentTime.slice(0,2);
                  var ecurrentTime = data.exitTime,
                   ehours = ecurrentTime.slice(0,2);
                  console.log("ddd",ehours-hours);
                  
                  return (
                    <TableRow
                      key={k}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {k + 1}
                      </TableCell>
                      <TableCell align="right">{date}</TableCell>
                      <TableCell align="right">{data.entryTime}</TableCell>
                      <TableCell align="right">{data.exitTime}</TableCell>
                      <TableCell align="right">{ehours-hours}</TableCell>
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
