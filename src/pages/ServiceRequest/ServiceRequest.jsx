import React, { useState } from "react";
import axios from "axios";
import {
  Paper,
  Button,
  Modal,
  Input,
  TextField,
  DesktopDatePicker,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  FormControlLabel,
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  Container,
  MenuItem,
} from "@mui/material";

const ServiceRequest = () => {
  const [requestType, setrequestType] = useState("");
  const [requestName, setrequestName] = useState("");
  const [approvalName, setapprovalName] = useState("");
  const [requestDate, setrequestDate] = useState("");
  const [subject, setsubject] = useState("");
  const [description, setdescription] = useState("");
  const [requestStatus, setrequestStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "serviceRequest/add_request",
        {
          requestType,
          requestName,
          approvalName,
          requestDate,
          subject,
          description,
          requestStatus,
        },
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
  return (
    //<div>
    //  {" "}
    //  <form onSubmit={(e) => handleSubmit(e)}>
    //    <input
    //      type="text"
    //      name="requestType"
    //      onChange={(e) => {
    //        setrequestType(e.target.value);
    //      }}
    //      placeholder="Enter your subject for leave"
    //    />
    //    <input
    //      type="text"
    //      name="requestName"
    //      onChange={(e) => setrequestName(e.target.value)}
    //      placeholder="Enter no of days"
    //    />
    //    <input
    //      type="text"
    //      name="approvalName"
    //      onChange={(e) => setapprovalName(e.target.value)}
    //      placeholder="Enter date from"
    //    />
    //    <input
    //      type="text"
    //      name="requestDate"
    //      onChange={(e) => setrequestDate(e.target.value)}
    //      placeholder="Enter date to"
    //    />
    //    <input
    //      type="text"
    //      onChange={(e) => setsubject(e.target.value)}
    //      name="subject"
    //      placeholder="Enter subject"
    //    />
    //    <input
    //      type="text"
    //      name="description"
    //      onChange={(e) => setdescription(e.target.value)}
    //      placeholder="Enter desc"
    //    />
    //    <input
    //      type="text"
    //      name="requestStatus"
    //      onChange={(e) => setrequestStatus(e.target.value)}
    //    />
    //    <button>submit</button>
    //  </form>
    //</div>
    <form onSubmit={(e) => handleSubmit(e)}>
      <Paper
        elevation={3}
        sx={{
          minHeight: "400px",
          minHeight: "500px",
          width: "85%",
          mt: "10%",
          mx: "auto",
        }}
      >
        <Grid container sx={{ pt: "2%" }}>
          <Grid item xl={2} lg={3} md={4} sm={5} xs={4}>
            <Typography
              sx={{
                fontSize: "23px",
                textAlign: "center",
                mt: "8%",

                mr: "2%",
              }}
            >
              Employee Id
            </Typography>
          </Grid>
          <Grid item xl={10} lg={9} md={8} sm={7} xs={12}>
            <TextField
              required
              id="filled-required"
              variant="filled"
              placeholder="No. of Days"
              sx={{ width: "95%" }}
            />
          </Grid>
        </Grid>
        <Grid container sx={{ mt: "2%" }}>
          <Grid item xl={2} lg={3} md={4} sm={5} xs={4}>
            <Typography
              sx={{
                fontSize: "23px",
                textAlign: "center",
                mt: "8%",

                mr: "2%",
              }}
            >
              Name
            </Typography>
          </Grid>
          <Grid item xl={10} lg={9} md={8} sm={7} xs={12}>
            <TextField
              required
              id="filled-required"
              variant="filled"
              placeholder="No. of Days"
              sx={{ width: "95%" }}
            />
          </Grid>
        </Grid>
        <Grid container sx={{ mt: "2%" }}>
          <Grid item xl={2} lg={3} md={4} sm={5} xs={4}>
            <Typography
              sx={{
                fontSize: "23px",
                textAlign: "center",
                mt: "8%",

                mr: "2%",
              }}
            >
              Request Name
            </Typography>
          </Grid>
          <Grid item xl={10} lg={9} md={8} sm={7} xs={12}>
            <TextField
              required
              id="filled-required"
              variant="filled"
              placeholder="No. of Days"
              sx={{ width: "95%" }}
              onChange={(e) => {
                setrequestName(e.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Grid container sx={{ mt: "2%" }}>
          <Grid item xl={2} lg={3} md={4} sm={5} xs={4}>
            <Typography
              sx={{
                fontSize: "23px",
                textAlign: "center",
                mt: "8%",

                mr: "2%",
              }}
            >
              Approval From
            </Typography>
          </Grid>
          <Grid item xl={10} lg={9} md={8} sm={7} xs={12}>
            <TextField
              required
              id="filled-required"
              variant="filled"
              placeholder="No. of Days"
              sx={{ width: "95%" }}
              onChange={(e) => {
                setapprovalName(e.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Grid container sx={{ mt: "2%" }}>
          <Grid item xl={2} lg={3} md={4} sm={5} xs={4}>
            <Typography
              sx={{
                fontSize: "23px",
                textAlign: "center",
                mt: "8%",

                mr: "2%",
              }}
            >
              Subject
            </Typography>
          </Grid>
          <Grid item xl={10} lg={9} md={8} sm={7} xs={12}>
            <TextField
              required
              id="filled-required"
              variant="filled"
              placeholder="No. of Days"
              sx={{ width: "95%" }}
              onChange={(e) => {
                setsubject(e.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Grid container sx={{ mt: "2%" }}>
          <Grid item xl={2} lg={3} md={4} sm={5} xs={4}>
            <Typography
              sx={{
                fontSize: "23px",
                textAlign: "center",
                mt: "8%",

                mr: "2%",
              }}
            >
              Request Type
            </Typography>
          </Grid>
          <Grid item xl={10} lg={9} md={8} sm={7} xs={12}>
            <Box>
              <TextField
                label=" Request Type"
                id="filled-required"
                variant="filled"
                select
                fullWidth
                sx={{ width: "95%" }}
                onChange={(e) => {
                  setrequestType(e.target.value);
                }}

                //  value={request}
                //  onChange={handleChangeRequest}
                //  onChange={(e) => {
                //   setrequestDetail({
                //     ...requestDetail,
                //     type: e.target.value,
                //   });
                // }}
                //  helperText={request ? "selected" : "open this select menu"}
              >
                <MenuItem value="H">High</MenuItem>
                <MenuItem value="M">medium</MenuItem>
                <MenuItem value="L">Low</MenuItem>
              </TextField>
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{ width: "100%", textAlign: "center", pb: "2%", pt: "1%" }}
        >
          <Button
            //onClick={handelsubmit}
            type="submit"
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
      </Paper>
    </form>
  );
};

export default ServiceRequest;
