import { Paper, Grid, TextField, Typography, Button } from "@mui/material";
import react from "react";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [experience, setexperience] = useState("");
  const [phone, setphone] = useState("");
  const [age, setage] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [joiningDate, setjoiningDate] = useState("");
  const [lastCompanyName, setlastCompanyName] = useState("");
  const [emergencyContactName, setemergencyContactName] = useState("");
  const [role, setrole] = useState("");
  const [designation, setdesignation] = useState("");
  const [lastEducationDetail, setlastEducationDetail] = useState("");
  const [universityName, setuniversityName] = useState("");
  const [bloodGroup, setbloodGroup] = useState("");
  const [martialStatus, setmartialStatus] = useState("");
  const [spouseName, setspouseName] = useState("");
  const [address, setaddress] = useState("");
  const [salaryPerAnnum, setsalaryPerAnnum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "/employee/add_employee",
        {
          firstName,
          lastName,
          email,
          experience,
          phone,
          birthDate,
          joiningDate,
          lastCompanyName,
          emergencyContactName,
          salaryPerAnnum,
          role,
          age,
          designation,
          lastEducationDetail,
          universityName,
          bloodGroup,
          martialStatus,
          spouseName,
          address,
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
    <form onSubmit={(e) => handleSubmit(e)}>
      <Grid
        container
        sx={{
          width: "70%",
          mx: "auto",
          mt: "3%",
          maxHeight: "80vh",
          overflow: "scroll",
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid container sx={{ width: "90%", mx: "auto", mt: "3%" }}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ pl: "1%%" }}>
              <TextField
                id="outlined-search"
                label="First Name"
                size="large"
                sx={{ width: "100%", minWidth: "80px" }}
                onChange={(e) => {
                  setfirstName(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ pl: "3%" }}>
              <TextField
                id="outlined-search"
                label="Last Name"
                size="large"
                sx={{ width: "90%", minWidth: "80px" }}
                onChange={(e) => {
                  setlastName(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                id="outlined-search"
                label="Email"
                size="large"
                sx={{ width: "90%", minWidth: "80px" }}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                id="outlined-search"
                label="Phone No"
                size="large"
                sx={{ width: "90%", minWidth: "80px" }}
                onChange={(e) => {
                  setphone(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ width: "90%", mx: "auto", mt: "3%" }}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ pl: "1%%" }}>
              <TextField
                id="outlined-search"
                label="birth Date"
                size="large"
                sx={{ width: "100%", minWidth: "80px" }}
                onChange={(e) => {
                  setbirthDate(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ pl: "3%" }}>
              <TextField
                id="outlined-search"
                label="Age"
                size="large"
                sx={{ width: "90%", minWidth: "80px" }}
                onChange={(e) => {
                  setage(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ width: "90%", mx: "auto", mt: "3%" }}>
            <Typography>
              -------------------- personal Details---------------
            </Typography>
          </Grid>
          <Grid container sx={{ width: "90%", mx: "auto", mt: "3%" }}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ pl: "1%%" }}>
              <TextField
                id="outlined-search"
                label="Maratial Status"
                size="large"
                sx={{ width: "100%", minWidth: "80px" }}
                onChange={(e) => {
                  setmartialStatus(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ pl: "3%" }}>
              <TextField
                id="outlined-search"
                label="Spouse Name"
                size="large"
                sx={{ width: "90%", minWidth: "80px" }}
                onChange={(e) => {
                  setspouseName(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ width: "90%", mx: "auto", mt: "3%" }}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ pl: "1%%" }}>
              <TextField
                id="outlined-search"
                label="Blood Group"
                size="large"
                sx={{ width: "100%", minWidth: "80px" }}
                onChange={(e) => {
                  setbloodGroup(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ pl: "3%" }}>
              <TextField
                id="outlined-search"
                label="Emergency Contact Name"
                size="large"
                sx={{ width: "90%", minWidth: "80px" }}
                onChange={(e) => {
                  setemergencyContactName(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                id="outlined-search"
                label="Address"
                size="large"
                sx={{ width: "90%", minWidth: "80px" }}
                onChange={(e) => {
                  setaddress(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ width: "90%", mx: "auto", mt: "3%" }}>
            <Typography>
              -------------------- personal Details---------------
            </Typography>
          </Grid>
          <Grid container sx={{ width: "90%", mx: "auto", mt: "3%" }}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ pl: "1%%" }}>
              <TextField
                id="outlined-search"
                label="University"
                size="large"
                sx={{ width: "100%", minWidth: "80px" }}
                onChange={(e) => {
                  setuniversityName(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ pl: "3%" }}>
              <TextField
                id="outlined-search"
                label="Last Education"
                size="large"
                sx={{ width: "90%", minWidth: "80px" }}
                onChange={(e) => {
                  setlastEducationDetail(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ width: "90%", mx: "auto", mt: "3%" }}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ pl: "1%%" }}>
              <TextField
                id="outlined-search"
                label="Last Company"
                size="large"
                sx={{ width: "100%", minWidth: "80px" }}
                onChange={(e) => {
                  setlastCompanyName(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ pl: "3%" }}>
              <TextField
                id="outlined-search"
                label="Experience"
                size="large"
                sx={{ width: "90%", minWidth: "80px" }}
                onChange={(e) => {
                  setexperience(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                id="outlined-search"
                label="Role"
                size="large"
                sx={{ width: "90%", minWidth: "80px" }}
                onChange={(e) => {
                  setrole(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                id="outlined-search"
                label="Designation"
                size="large"
                sx={{ width: "90%", minWidth: "80px" }}
                onChange={(e) => {
                  setdesignation(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ width: "90%", mx: "auto", mt: "3%" }}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ pl: "1%%" }}>
              <TextField
                id="outlined-search"
                label="Joining Date"
                size="large"
                sx={{ width: "100%", minWidth: "80px" }}
                onChange={(e) => {
                  setjoiningDate(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ pl: "3%" }}>
              <TextField
                id="outlined-search"
                label="Salary"
                size="large"
                sx={{ width: "90%", minWidth: "80px" }}
                onChange={(e) => {
                  setsalaryPerAnnum(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Button type="submit">submit</Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
