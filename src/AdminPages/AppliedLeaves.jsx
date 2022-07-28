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
  TableBody,
  Typography,
} from "@mui/material";

export default function AppliedLeaves() {
  const [allLeaves, setAllLeaves] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("leaveRequest/get_leave_requests", {
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
                  <TableCell>From - To</TableCell>
                  <TableCell>Reason</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allLeaves?.map((item, index) => {
                  return (
                    <TableRow>
                      <TableCell>
                        <Typography>{index + 1}</Typography>
                      </TableCell>
                      <TableCell sx={{ maxWidth: "300px" }}>
                        <Typography>{item.name}</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          maxWidth: "250px",

                          whiteSpace: "unset",
                          wordBreak: "break-all",
                        }}
                      >
                        <Typography sx={{ width: "100%" }}>
                          {item.dateFrom - item.dateFrom}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ maxWidth: "300px" }}>
                        <Typography sx={{ whiteSpace: "initial" }}>
                          {item.reason}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ maxWidth: "300px" }}>
                        <Typography>{item.description}</Typography>
                      </TableCell>

                      <TableCell>
                        {" "}
                        {item.status ? (
                          <>Granted</>
                        ) : (
                          <button
                            className="btn btn-warning"
                            data-bs-target="#update"
                            data-bs-toggle="modal"
                            onClick={(e) => setAllLeaves(item._id)}
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
          </TableContainer>
        </Paper>
      </Paper>
    </Grid>
  );
}
