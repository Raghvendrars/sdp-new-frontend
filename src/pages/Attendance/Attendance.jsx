import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Paper, Grid, Button, Typography } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Timer from "../../components/Timer";

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
    <Paper elevation={0} sx={{ bgcolor: "transparent", margin:"50px" }}>
      <Paper
      sx={{width: '100%', overflow: 'hidden'}} 
      >
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
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
                  console.log("siduhguffy", etimew2);
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
                      <TableCell align="right">
                        {exTime ? etimew2 : <>You have't logged Of</>}
                      </TableCell>
                      <TableCell align="right">
                        <Typography>
                          {exTime ? (
                            <Timer entryTime={newdata} exitTime={newdata2} />
                          ) : (
                            <>0</>
                          )}
                        </Typography>
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

export default Attendance;
