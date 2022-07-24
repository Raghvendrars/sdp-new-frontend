import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Paper, Grid, Button, Typography, Container } from "@mui/material";
import { MdMiscellaneousServices } from "react-icons/md";
import ListAllLeaves from "../../Pages/DashboardPages/ListAllLeaves";
import ListAllHolidays from "../../Pages/DashboardPages/ListAllHolidays";

const Dashboard = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/employeeAuth/getLoggedInUser", {
          withCredentials: true,
        })
        .then((res) => {
          setUser(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Paper sx={{ bgcolor: "transparent", borderRadius: "0px" }} elevation={0}>
      <Grid container>
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{ textAlign: "left" }}
        >
          <Paper
            sx={{ height: "auto", py: "1%", bgcolor: "transparent" }}
            elevation={0}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "20px",
                ml: 2,
                mr: "auto",
              }}
            >
              Welcome Back {user?.employeeName}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Paper sx={{bgcolor:"transparent"}} elevation={0}>
            <Grid container>
              <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                <Button
                  varient="contained"
                  sx={{
                    width: "80%",
                    mx: "auto",
                    bgcolor: "#D1E9FC",
                    height: "280px",
                    borderRadius: "20px",
                    display: "block",
                  }}
                  onClick={() => {
                    window.location.href =
                      "/servicerequest/listservicerequests";
                  }}
                >
                  <MdMiscellaneousServices size={100} />
                  <br />
                  <Typography sx={{ color: "#000", fontFamily: "Inter" }}>
                    Request Module
                  </Typography>
                </Button>
              </Grid>
              <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                <Button
                  varient="contained"
                  sx={{
                    width: "80%",
                    mx: "auto",
                    bgcolor: "#FFE7D9",
                    height: "280px",
                    borderRadius: "20px",
                  }}
                  onClick={() => {
                    window.location.href = "/leaverequest/listleaverequests";
                  }}
                >
                  Applied Leaves
                </Button>
              </Grid>
              <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                <Button
                  varient="contained"
                  sx={{
                    width: "80%",
                    mx: "auto",
                    bgcolor: "#D0F2FF",
                    height: "280px",
                    borderRadius: "20px",
                  }}
                  onClick={() => {
                    window.location.href = "/attendance";
                  }}
                >
                  Attendance
                </Button>
              </Grid>
              <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                <Button
                  varient="contained"
                  sx={{
                    width: "80%",
                    mx: "auto",
                    bgcolor: "#FFF7CD",
                    height: "280px",
                    borderRadius: "20px",
                  }}
                >
                  Payrole
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={2}>
          <Paper sx={{ width: "100%", padding: "0px" }}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              My Leaves
            </Typography>
          </Paper>
          <Grid container mt={1}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Paper sx={{ width: "100%", padding: "0px" }}>
                <ListAllLeaves />
              </Paper>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Paper sx={{ width: "100%", padding: "0px" }}>
                <ListAllHolidays />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Dashboard;
