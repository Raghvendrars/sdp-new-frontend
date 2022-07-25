import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Paper,
  Grid,
  Button,
  Typography,
  Link,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const ListLeaveRequests = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/leaveRequest/get_leave_requests", {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res?.data);
          setLeaveRequests(res?.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Paper sx={{ maxHeight: "100vh", minHeight: "100vh" }}>
      <Link href="/leaverequest/addLeaveRequest">
        <Button variant="contained" color="primary" sx={{ mt: "1%" }}>
          Add Leave Request
        </Button>
      </Link>

      <Paper sx={{ width: "90%", mx: "auto", mt: "3%" }} elevation={3}>
        <Paper elevation={0}>
          <TableContainer
            sx={{
              minWidth: "600px",
              maxHeight: "95vh",
              height: "100%",
              maxWidth: "100%",
              mx: "auto",
            }}
          >
            <Table sx={{ background: "#eceff1" }}>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Leave Type</TableCell>
                  <TableCell>No of Days</TableCell>
                  <TableCell>From - To</TableCell>
                  <TableCell>Reason</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leaveRequests.map((index, leaveRequest) => {
                  return (
                    <TableRow>
                      <TableCell>
                        <Typography>{index + 1}</Typography>
                      </TableCell>
                      <TableCell sx={{ maxWidth: "300px" }}>
                        <Typography>{leaveRequest.name}</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          maxWidth: "250px",

                          whiteSpace: "unset",
                          wordBreak: "break-all",
                        }}
                      >
                        <Typography sx={{ width: "100%" }}>
                          {leaveRequest.dateFrom - leaveRequest.dateFrom}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ maxWidth: "300px" }}>
                        <Typography sx={{ whiteSpace: "initial" }}>
                          {leaveRequest.reason}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ maxWidth: "300px" }}>
                        <Typography>{leaveRequest.description}</Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Paper>
    </Paper>
  );
};

export default ListLeaveRequests;
