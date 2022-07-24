import React, { useEffect, useState } from "react";
import axios from "axios";
import { Paper, Grid, Button, Typography, Link } from "@mui/material";

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
    <Paper>
      <Link href="/leaverequest/addLeaveRequest">
        <Button variant="contained" color="primary">
          Add Leave Request
        </Button>
      </Link>
      <Paper sx={{ mt: "100px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {leaveRequests.map((leaveRequest) => (
              <Grid container spacing={3} mt={5}>
                <Typography variant="h5">{leaveRequest.leaveType}</Typography>
                <Typography variant="h5">{leaveRequest.noOfDays}</Typography>
                <Typography variant="h5">{leaveRequest.dateFrom}</Typography>
                <Typography variant="h5">{leaveRequest.dateTo}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Paper>
  );
};

export default ListLeaveRequests;
