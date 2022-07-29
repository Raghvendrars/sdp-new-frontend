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
  const [requestDate, setrequestDate] = useState();
  const [subject, setsubject] = useState("");


  const handleSubmit = (e) => {
    setrequestDate(new Date());
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
    <Paper
      elevation={3}
      sx={{ maxHeight: "100vh", minHeight: "100vh", marginTop:"9vh" }}
    > 
    <Grid container mt={5}></Grid>
      <Paper sx={{width:"90%",mx:"auto",mt:"3%"}}>
        <form onSubmit={(e) => handleSubmit(e)}>
          
            <Grid container sx={{ mt: "5%" }}>
              <Grid item xl={2} lg={3} md={4} sm={12} xs={12} mt={3}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    textAlign: "center",
                    mt: "8%",
                    mr: "2%",
                  }}
                >
                  Request Name
                </Typography>
              </Grid>
              <Grid item xl={10} lg={9} md={8} sm={12} xs={12} mt={3}>
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
              <Grid item xl={2} lg={3} md={4} sm={12} xs={12}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    textAlign: "center",
                    mt: "8%",

                    mr: "2%",
                  }}
                >
                  Approval From
                </Typography>
              </Grid>
              <Grid item xl={10} lg={9} md={8} sm={12} xs={12}>
                <Box>
                  <TextField
                    label="Approval From"
                    id="filled-required"
                    variant="filled"
                    select
                    fullWidth
                    sx={{ width: "95%" }}
                    onChange={(e) => {
                      setapprovalName(e.target.value);
                    }}
                  >
                    <MenuItem value="Admin">Admin</MenuItem>
                    <MenuItem value="Hr">HR</MenuItem>
                    <MenuItem value="Project Manager">Project Manager</MenuItem>
                  </TextField>
                </Box>
              </Grid>
            </Grid>
            <Grid container sx={{ mt: "2%" }}>
              <Grid item xl={2} lg={3} md={4} sm={12} xs={12}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    textAlign: "center",
                    mt: "8%",

                    mr: "2%",
                  }}
                >
                  Subject
                </Typography>
              </Grid>
              <Grid item xl={10} lg={9} md={8} sm={12} xs={12}>
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
              <Grid item xl={2} lg={3} md={4} sm={12} xs={12}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    textAlign: "center",
                    mt: "8%",
                    mr: "2%",
                  }}
                >
                  Request Type
                </Typography>
              </Grid>
              <Grid item xl={10} lg={9} md={8} sm={12} xs={12}>
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
                  >
                    <MenuItem value="High">High</MenuItem>
                    <MenuItem value="Medium">medium</MenuItem>
                    <MenuItem value="Low">Low</MenuItem>
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
              mt={3}
              mb={3}
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
                  mb:2,
                  mr: "auto",
                  // mx: "auto",
                }}
              >
                SEND
              </Button>
            </Grid>       
        </form>
      </Paper>
    </Paper>
  );
};

export default ServiceRequest;
