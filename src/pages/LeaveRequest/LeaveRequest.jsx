import React, { useState } from "react";
import axios from "axios";
import DateRangePicker from "@wojtekmaj/react-daterange-picker/dist/entry";
import {
  Button,
  TextField,
  Box,
  Paper,
  DesktopDatePicker,
  Grid,
  Typography,
  MenuItem,
} from "@mui/material";

const LeaveRequest = () => {
  const [leaveType, setLeaveType] = useState("");
  const [noOfDays, setNoOfDays] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");
  const [value, onChange] = useState([new Date(), new Date()]);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/leaveRequest/add_leave_request",
        { leaveType, noOfDays, dateFrom, dateTo, reason, description },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(leaveType);
  return (
    //<div>
    //  <form onSubmit={(e) => handleSubmit(e)}>
    //    <input
    //      type="text"
    //      name="leaveType"
    //      onChange={(e) => {
    //        setLeaveType(e.target.value);
    //      }}
    //      placeholder="Enter your reason for leave"
    //    />
    //    <input
    //      type="text"
    //      name="noOfDays"
    //      onChange={(e) => setNoOfDays(e.target.value)}
    //      placeholder="Enter no of days"
    //    />
    //    <input
    //      type="text"
    //      name="dateFrom"
    //      onChange={(e) => setDateFrom(e.target.value)}
    //      placeholder="Enter date from"
    //    />
    //    <input
    //      type="text"
    //      name="dateTo"
    //      onChange={(e) => setDateTo(e.target.value)}
    //      placeholder="Enter date to"
    //    />
    //    <input
    //      type="text"
    //      onChange={(e) => setReason(e.target.value)}
    //      name="reason"
    //      placeholder="Enter reason"
    //    />
    //    <input
    //      type="text"
    //      name="description"
    //      onChange={(e) => setDescription(e.target.value)}
    //      placeholder="Enter desc"
    //    />
    //    <button>submit</button>
    //  </form>
    //</div>
    <Paper
      elevation={3}
      sx={{ minHeight: "400px", width: "85%", mx: "auto", mt: "10%" }}
    >
      <Grid container>
        <Grid xl={2} lg={3} md={4} sm={5} xs={4}>
          <Typography
            sx={{
              fontSize: "23px",
              textAlign: "center",
              mt: "8%",
              mr: "2%",
            }}
          >
            Reasons
          </Typography>
        </Grid>
        <Grid item xl={10} lg={9} md={8} sm={7} xs={12}>
          <Box>
            <TextField
              label=" Reason"
              variant="filled"
              select
              fullWidth
              size="small"
              sx={{ mt: "1.5%", mb: "1.5%", width: "95%" }}
              onChange={(e) => {
                setReason(e.target.value);
              }}
              // value={request}
              // onChange={handleChangeRequest}
              //  onChange={(e) => {
              //   setrequestDetail({
              //     ...requestDetail,
              //     type: e.target.value,
              //   });
              // }}
              // helperText={request ? 'selected' : 'open this select menu'}
            >
              <MenuItem value="Vacation">Vacation</MenuItem>
              <MenuItem value="Function">Function</MenuItem>
              <MenuItem value="Sick-Family">Sick-Family</MenuItem>
              <MenuItem value="Sick-Self">Sick-Self</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </TextField>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xl={2} lg={3} md={4} sm={5} xs={4}>
          <Typography
            sx={{
              fontSize: "23px",
              textAlign: "center",
              mt: "8%",

              mr: "2%",
            }}
          >
            Dates
          </Typography>
        </Grid>
        <Grid item xl={10} lg={9} md={8} sm={7} xs={12} sx={{ mt: "2.5%" }}>
          <DateRangePicker onChange={onChange} value={value} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{ width: "100%", mt: "10px", mb: "10px" }}
        >
          <Grid container>
            <Grid xl={2} lg={3} md={4} sm={5} xs={4}>
              <Typography
                sx={{
                  fontSize: "23px",
                  textAlign: "center",
                  mt: "8%",

                  mr: "2%",
                }}
              >
                No of Days
              </Typography>
            </Grid>
            <Grid item xl={10} lg={9} md={8} sm={7} xs={12}>
              <TextField
                required
                id="filled-required"
                variant="filled"
                placeholder="No. of Days"
                sx={{ width: "95%" }}
                // onChange={(e) => {
                //   setresult({ ...result, noOfDays: e.target.value });
                //   console.log("noofdays",e.target.value);
                // }}
                // value={calulateDate}
              />
            </Grid>
          </Grid>
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{ width: "100%", mt: "10px", mb: "10px" }}
          >
            <Grid container sx={{ mt: "3px" }}>
              <Grid xl={2} lg={3} md={4} sm={5} xs={4}>
                <Typography
                  sx={{
                    fontSize: "23px",
                    textAlign: "center",
                    mt: "8%",
                    mr: "2%",
                  }}
                  onChange={(e) => {
                    //  setresult({...result,desc:e.target.value})
                  }}
                >
                  Description
                </Typography>
              </Grid>
              <Grid item xl={10} lg={9} md={8} sm={7} xs={12}>
                <TextField
                  id="filled-multiline-static"
                  multiline
                  placeholder="Description"
                  rows={4}
                  variant="filled"
                  sx={{ width: "95%", mt: "1%" }}
                />
              </Grid>
              <Grid
                item
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                sx={{ width: "100%", textAlign: "center" }}
              >
                <Button
                  // onClick={handelsubmit}
                  variant="contained"
                  sx={{
                    borderRadius: 28,
                    color: "white",
                    background: "#2065D1",
                    width: "25%",
                    maxWidth: "250px",
                    minWidth: "250px",
                    ml: "auto",
                    mt: 2,
                    mr: "auto",
                    // mx: "auto",
                  }}
                >
                  SEND
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LeaveRequest;
