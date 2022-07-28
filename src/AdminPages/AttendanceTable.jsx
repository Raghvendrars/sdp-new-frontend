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
import Timer from "../components/Timer";

const AttendanceTable = (props) => {
  console.log("Props",props);
  let userId = props.userId;
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    axios
      .get(`attendance_admin/get_employee_attendance_byId/${userId}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("siduhguffy",res?.data);
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
                  console.log(data.entryTime);
                  let etime = data.entryTime;
                  let exTime = data.exitTime;
                  let etimew = new Date(etime).toLocaleTimeString();
                  let etimew2 = new Date(exTime).toLocaleTimeString();

                  let newdata = new Date(data.entryTime).getTime();
                  let newdata2 = new Date(data.exitTime).getTime();
                  let date = new Date(data.entryTime).toLocaleDateString();
                  return (
                    <TableRow
                      key={k}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {k + 1}
                      </TableCell>
                      <TableCell align="right">{date}</TableCell>
                      <TableCell align="right">{etimew}</TableCell>
                      <TableCell align="right">{etimew2}</TableCell>
                      <TableCell align="right">
                        <Timer entryTime={newdata} exitTime={newdata2} />
                      </TableCell>
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

export default AttendanceTable;
