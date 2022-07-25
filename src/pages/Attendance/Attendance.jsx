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

  console.log(attendanceData);

  return (
    <Paper>
      <Paper></Paper>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}

            {attendanceData.length > 0 ? (
              attendanceData.map((data) => {
                return (
                  <TableRow
                    key={data}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
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
  );
};

export default Attendance;
