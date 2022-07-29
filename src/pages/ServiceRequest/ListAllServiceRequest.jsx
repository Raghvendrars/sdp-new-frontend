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

const ListAllServiceRequest = () => {
  const [serviceRequests, setServiceRequests] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("serviceRequest/get_request", {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res?.data);
          setServiceRequests(res?.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <Paper sx={{ maxHeight: "100vh", minHeight: "100vh", marginTop: "9vh" }}>
      <Link
        to="/servicerequest/addservicerequest"
        style={{ textDecoration: "none" }}
      >
        <Button variant="contained" color="primary" sx={{ mt: "3%" }}>
          Add Service Request
        </Button>
      </Link>
      
      <Paper sx={{ width: "90%", mx: "auto", mt: "3%" }} elevation={3}>
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ zIndex: 0 }}>
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
                        <Typography sx={TableHeadeTextStyle}>No</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={TableHeadeTextStyle}>Name</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={TableHeadeTextStyle}>
                          Subject
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={TableHeadeTextStyle}>
                          Request Type
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={TableHeadeTextStyle}>
                          Requested From
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={TableHeadeTextStyle}>
                          Requested Date
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={TableHeadeTextStyle}>Status</Typography>
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
                    {serviceRequests?.map((data, index) => {
                      let date = new Date(data.createdAt).toLocaleDateString();
                      console.log(data, date);
                      console.log(data);
                      return (
                        <TableRow sx={{ cursor: "pointer" }}>
                          <TableCell sx={{ maxWidth: "250px" }}>
                            <Typography sx={TableBodyTextStyle}>
                              {index + 1}
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ maxWidth: "250px" }}>
                            <Typography sx={TableBodyTextStyle}>
                              {data.requestName}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography sx={TableBodyTextStyle}>
                              {data.subject}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography sx={TableBodyTextStyle}>
                              {data.requestType}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography sx={TableBodyTextStyle}>
                              {data.approvalName}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography sx={TableBodyTextStyle}>
                              {date}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography sx={TableBodyTextStyle}>
                              {data.requestStatus ? (
                                <>Approved</>
                              ) : (
                                <>Pending</>
                              )}
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
  );
};

export default ListAllServiceRequest;
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
