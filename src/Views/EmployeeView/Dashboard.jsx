import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Paper, Grid, Button, Typography, Container } from "@mui/material";
import { MdMiscellaneousServices } from "react-icons/md";
import ListAllLeaves from "../../pages/DashboardPages/ListAllLeaves";
import ListAllHolidays from "../../pages/DashboardPages/ListAllHolidays";
import { ImExit } from "react-icons/im";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaMoneyCheckAlt } from "react-icons/fa";
import ShowHolidays from "../../AdminPages/ShowHolidays";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    try {
      axios
        .get("auth/getLoggedInUser", {
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
          <Paper sx={{ bgcolor: "transparent" }} elevation={0}>
            <Grid container>
              <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                <Link to={"/servicerequest/listservicerequests"}>
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
                  >
                    <MdMiscellaneousServices size={100} />
                    <br />
                    <Typography sx={{ color: "#000", fontFamily: "Inter" }}>
                      Service Request
                    </Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                <Link to={"/leaverequest/listleaverequests"}>
                  <Button
                    varient="contained"
                    sx={{
                      width: "80%",
                      mx: "auto",
                      bgcolor: "#FFE7D9",
                      height: "280px",
                      borderRadius: "20px",
                      display: "block",
                    }}
                  >
                    <Typography sx={{ color: "#ff7c00" }}>
                      <ImExit size={80} />
                    </Typography>
                    <br />
                    <Typography sx={{ color: "#000", fontFamily: "Inter" }}>
                      Applied Leaves
                    </Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                <Link to={"/attendance"}>
                  <Button
                    varient="contained"
                    sx={{
                      width: "80%",
                      mx: "auto",
                      bgcolor: "#D0F2FF",
                      height: "280px",
                      borderRadius: "20px",
                      display: "block",
                    }}
                  >
                    <Typography sx={{ color: "#00B8FF" }}>
                      <HiOutlineUserGroup size={80} />
                    </Typography>
                    <br />
                    <Typography sx={{ color: "#000", fontFamily: "Inter" }}>
                      Attendance
                    </Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                <Link to={"/payrole"}>
                  <Button
                    varient="contained"
                    sx={{
                      width: "80%",
                      mx: "auto",
                      bgcolor: "#FFF7CD",
                      height: "280px",
                      borderRadius: "20px",
                      display: "block",
                    }}
                  >
                    <Typography sx={{ color: "#FFD600" }}>
                      <FaMoneyCheckAlt size={80} />
                    </Typography>
                    <br />
                    <Typography sx={{ color: "#000", fontFamily: "Inter" }}>
                      Payrole
                    </Typography>
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={2}>
          <Grid container mt={1}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Paper sx={{ width: "90%", padding: "0px", mx: "auto" }}>
                <ShowHolidays />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Dashboard;
