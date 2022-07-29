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
        .get("leaveRequest/get_leave_requests", {
          withCredentials: true,
        })
        .then((res) => {
          console.log("ndi",res?.data);
          setLeaveRequests(res?.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Paper sx={{ maxHeight: "100vh", minHeight: "100vh", marginTop:"9vh" }}>
      <Link href="/leaverequest/addLeaveRequest"  style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary" sx={{ mt: "3%" }}>
          Add Leave Request
        </Button>
      </Link>

      <Paper sx={{ width: "90%", mx: "auto", mt: "3%" }} elevation={3}>
        <Paper elevation={0}>
          {/* <TableContainer
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
          </TableContainer> */}

          <Grid container>             
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{zIndex:0}}>
              <Paper>
                <TableContainer style={{ maxHeight: "80vh" }}>
                  <Table
                    sx={{ minWidth: "100%" }}
                    aria-label="simple table"
                    stickyHeader
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <Typography sx={TableHeadeTextStyle}>Name</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={TableHeadeTextStyle}>
                          Leave Type
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={TableHeadeTextStyle}>
                          No of Days
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={TableHeadeTextStyle}>
                          From - To
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={TableHeadeTextStyle}>Reason</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={TableHeadeTextStyle}>
                          Description
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody
                      sx={{
                        height: "auto",
                        maxHeight: "500px",
                        overflowY: "auto",
                        overflowX: "auto",
                      }}
                    >
                      {leaveRequests?.map((index, leaveRequest) => {
                        console.log(data);
                        return (
                          <TableRow
                            
                            sx={{ cursor: "pointer" }}
                          >
                            <TableCell sx={{ maxWidth: "250px" }}>
                              <Typography sx={TableBodyTextStyle}>
                                {leaveRequest.name}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography sx={TableBodyTextStyle}>
                                 {leaveRequest.dateFrom - leaveRequest.dateFrom}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography sx={TableBodyTextStyle}>
                              {leaveRequest.reason}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography sx={TableBodyTextStyle}>
                                {leaveRequest.Discription}
                              </Typography>
                            </TableCell>                             
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Paper>
    </Paper>
  );
};

export default ListLeaveRequests;
 

const TableHeadeTextStyle = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "18px",
  lineHeight: "24px",
  color: "#33475B",
};

const TableBodyTextStyle = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: { xl: "14px", lg: "14px", md: "14px", sm: "14px", xs: "14px" },
  lineHeight: "auto",
  color: "#000",
};