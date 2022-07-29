import react, { useState, useEffect } from "react";
import axios from "axios";

import {
  Paper,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Modal,
  TableBody,
  Typography,
  Box,
  Button,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AppliedLeaves() {
  const [allLeaves, setAllLeaves] = useState([]);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");

  const [leaveId, setLeaveId] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    try {
      axios
        .get("allLeaves/get_leave_requests", {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res?.data);
          setAllLeaves(res?.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  async function handleApprove(status) {
    try {
      axios
        .put(
          `allLeaves/update_leave_request/${leaveId}`,
          { status: status },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      handleClose();
    } catch (err) {
      console.log(err);
    }
  }

  return (
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
                  <TableCell>From</TableCell>
                  <TableCell>To</TableCell>
                  <TableCell>Reason</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allLeaves.length > 0 ? (
                  <>
                    {allLeaves?.map((item, index) => {
                      console.log(item);
                      return (
                        <TableRow>
                          <TableCell>
                            <Typography>{index + 1}</Typography>
                          </TableCell>
                          <TableCell sx={{ maxWidth: "300px" }}>
                            <Typography>{item.employeeName}</Typography>
                          </TableCell>
                          <TableCell
                            sx={{
                              maxWidth: "250px",

                              whiteSpace: "unset",
                              wordBreak: "break-all",
                            }}
                          >
                            <Typography sx={{ width: "100%" }}>
                              {item.leaveType}
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ maxWidth: "300px" }}>
                            <Typography sx={{ whiteSpace: "initial" }}>
                              {item.noOfDays}
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ maxWidth: "300px" }}>
                            <Typography>{item.dateFrom}</Typography>
                          </TableCell>
                          <TableCell sx={{ maxWidth: "300px" }}>
                            <Typography>{item.dateTo}</Typography>
                          </TableCell>

                          <TableCell sx={{ maxWidth: "300px" }}>
                            <Typography>{item.reason}</Typography>
                          </TableCell>
                          <TableCell sx={{ maxWidth: "300px" }}>
                            <Typography>{item.description}</Typography>
                          </TableCell>
                          <TableCell sx={{ maxWidth: "300px" }}>
                            <Typography>
                              {item.status ? <>{item.status}</> : <>Pending</>}
                            </Typography>
                          </TableCell>
                          {item.status ? (
                            <TableCell>
                              <Typography>Accepted</Typography>
                            </TableCell>
                          ) : (
                            <TableCell>
                              <Button
                                variant="outlined"
                                onClick={() => {
                                  handleClickOpen();
                                  setLeaveId(item._id);
                                }}
                              >
                                Accept
                              </Button>
                              <Dialog
                                open={open}
                                onClose={handleClose}
                                sx={{ bgcolor: "white" }}
                              >
                                <DialogTitle id="alert-dialog-title">
                                  {"Use Google's location service?"}
                                </DialogTitle>
                                <DialogContent>
                                  <DialogContentText id="alert-dialog-description">
                                    {leaveId}
                                  </DialogContentText>
                                </DialogContent>

                                <DialogActions>
                                  <Button
                                    onClick={() => {
                                      handleApprove("Accept");
                                      // setStatus("Accept");
                                    }}
                                  >
                                    Accept
                                  </Button>
                                  <Button
                                    onClick={() => {
                                      handleApprove("Decline");

                                      // setStatus("Decline");
                                    }}
                                    autoFocus
                                  >
                                    Decline
                                  </Button>
                                </DialogActions>
                              </Dialog>
                            </TableCell>
                          )}
                        </TableRow>
                      );
                    })}
                  </>
                ) : (
                  <>No data found</>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Paper>
    </Grid>
  );
}
