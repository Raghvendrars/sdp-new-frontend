import react from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";

import {
  Paper,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import { ImExit } from "react-icons/im";

export default function RequestedModules() {
  const [serviceRequests, setServiceRequests] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/serviceRequest/get_request", {
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
    <Paper>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Paper sx={{ width: "100%", mx: "auto" }} elevation={3}>
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
                    {serviceRequests.map((index, data) => {
                      return (
                        <TableRow>
                          <TableCell>
                            <Typography>{index + 1}</Typography>
                          </TableCell>
                          <TableCell sx={{ maxWidth: "300px" }}>
                            <Typography>{data.name}</Typography>
                          </TableCell>
                          <TableCell
                            sx={{
                              maxWidth: "250px",

                              whiteSpace: "unset",
                              wordBreak: "break-all",
                            }}
                          >
                            <Typography sx={{ width: "100%" }}>
                              {data.dateFrom - data.dateFrom}
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ maxWidth: "300px" }}>
                            <Typography sx={{ whiteSpace: "initial" }}>
                              {data.reason}
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ maxWidth: "300px" }}>
                            <Typography>{data.description}</Typography>
                          </TableCell>

                          <TableCell>
                            {" "}
                            {data.status ? (
                              <>Granted</>
                            ) : (
                              <button
                                className="btn btn-warning"
                                data-bs-target="#update"
                                data-bs-toggle="modal"
                                onClick={(e) => setServiceRequests(data._id)}
                              >
                                Accept
                              </button>
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
                {/*<div class="modal fade" id="update">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">Request Granted ?</div>
                        <div class="modal-body">
                          <button
                            className="btn btn-success px-4"
                            data-bs-dismiss="modal"
                            onClick={handleUpdateRequestStatus}
                          >
                            {" "}
                            Yes{" "}
                          </button>
                          <button
                            className="btn btn-outline-dark ms-2 px-4"
                            data-bs-dismiss="modal"
                          >
                            No
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>*/}
              </TableContainer>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}
