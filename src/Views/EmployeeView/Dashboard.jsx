import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Paper, Grid, Button, Typography } from "@mui/material";
import { MdMiscellaneousServices } from "react-icons/md";
// import ListAllLeaves from "../../pages/DashboardPages/ListAllLeaves";
// import ListAllHolidays from "../../pages/DashboardPages/ListAllHolidays";
import { ImExit } from "react-icons/im";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaMoneyCheckAlt } from "react-icons/fa";
import ListAllHolidays from "../../pages/DashboardPages/ListAllHolidays";
import GetLeaves from "../../hooks/Leaves/GetLeaves";
import GetRequests from "../../hooks/Requests/GetRequests";
import GetAttendance from "../../hooks/Attendance/GetAttendance";
import GetPayrole from "../../hooks/Payrole/GetPayrole";

const Dashboard = () => {
  const [user, setUser] = useState({});

  // const [getrequest, setGetrequest] = useState([]);
  // const [attendance, setAttendance] = useState([]);
  // const [getPayrole,setPayrole] = useState([]);

  async function getUser() {
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
  }

  // async function getAllPayrole() {
  //   try {
  //     await axios
  //       .get("adminPayrole/getAllPayrole", { withCredentials: true })
  //       .then((res) => {
  //         setPayrole(res.data);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  useEffect(() => {
    getUser();
    // getAllPayrole();
  }, []);

  // console.log(getPayrole.length);
  return (
    <Paper
      sx={{ bgcolor: "transparent", borderRadius: "0px", width: "100%" }}
      elevation={0}
    >
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
                fontSize: "16px",
                ml: 2,
                mr: "auto",
              }}
            >
              Welcome Back{" "}
              <span style={{ color: "gray", fontSize: "20px" }}>
                {user?.employeeName}
              </span>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Paper sx={{ bgcolor: "transparent" }} elevation={0}>
            <Grid container>
              <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                <Button
                  varient="contained"
                  sx={{
                    mx: "auto",
                    bgcolor: "#D1E9FC",
                    width: "100%",
                    maxWidth: "250px",
                    height: "100%",
                    minHeight: "200px",
                    maxHeight: "200px",
                    borderRadius: "20px",
                    display: "block",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xl: "70px",
                        lg: "70px",
                        md: "70px",
                        sm: "50px",
                        xs: "50px",
                      },
                      lineHeight: "50px",
                    }}
                  >
                    <MdMiscellaneousServices />
                  </Typography>
                  <GetRequests />
                  <Typography
                    sx={{
                      color: "#000",
                      fontFamily: "Inter",
                      fontSize: "14px",
                    }}
                  >
                    Service Requests
                  </Typography>
                </Button>
              </Grid>
              <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                <Button
                  varient="contained"
                  sx={{
                    mx: "auto",
                    bgcolor: "#FFE7D9",
                    width: "100%",
                    maxWidth: "250px",
                    height: "100%",
                    minHeight: "200px",
                    maxHeight: "200px",
                    borderRadius: "20px",
                    display: "block",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#ff7c00",
                      fontSize: {
                        xl: "50px",
                        lg: "50px",
                        md: "40px",
                        sm: "30px",
                        xs: "30px",
                      },
                    }}
                  >
                    <ImExit />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xl: "35px",
                        lg: "35px",
                        md: "35px",
                        sm: "30px",
                        xs: "30px",
                      },
                      lineHeight: "50px",
                    }}
                  >
                    <GetLeaves />
                  </Typography>
                  <Typography
                    sx={{
                      color: "#000",
                      fontFamily: "Inter",
                      fontSize: "14px",
                    }}
                  >
                    Applied Leaves
                  </Typography>
                </Button>
              </Grid>
              <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                <Button
                  varient="contained"
                  sx={{
                    mx: "auto",
                    bgcolor: "#D0F2FF",
                    width: "100%",
                    maxWidth: "250px",
                    height: "100%",
                    minHeight: "200px",
                    maxHeight: "200px",
                    borderRadius: "20px",
                    display: "block",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#00B8FF",
                      fontSize: {
                        xl: "50px",
                        lg: "50px",
                        md: "40px",
                        sm: "30px",
                        xs: "30px",
                      },
                    }}
                  >
                    <HiOutlineUserGroup />
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: {
                        xl: "35px",
                        lg: "35px",
                        md: "35px",
                        sm: "30px",
                        xs: "30px",
                      },
                      lineHeight: "50px",
                    }}
                  >
                    <GetAttendance />
                  </Typography>
                  <Typography
                    sx={{
                      color: "#000",
                      fontFamily: "Inter",
                      fontSize: "14px",
                    }}
                  >
                    Attendance
                  </Typography>
                </Button>
              </Grid>
              <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
                <Button
                  varient="contained"
                  sx={{
                    mx: "auto",
                    bgcolor: "#FFF7CD",
                    width: "100%",
                    maxWidth: "250px",
                    height: "100%",
                    minHeight: "200px",
                    maxHeight: "200px",
                    borderRadius: "20px",
                    display: "block",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFD600",
                      fontSize: {
                        xl: "50px",
                        lg: "50px",
                        md: "40px",
                        sm: "30px",
                        xs: "30px",
                      },
                    }}
                  >
                    <FaMoneyCheckAlt />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xl: "35px",
                        lg: "35px",
                        md: "35px",
                        sm: "30px",
                        xs: "30px",
                      },
                      lineHeight: "50px",
                    }}
                  >
                    <GetPayrole />
                  </Typography>
                  <Typography
                    sx={{
                      color: "#000",
                      fontFamily: "Inter",
                      fontSize: "14px",
                    }}
                  >
                    Payrole
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={"5%"}>
          <Paper sx={{ bgcolor: "transparent" }} elevation={0}>
            <Grid container>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <Paper sx={{ width: "90%", padding: "0px", mx: "auto" }}>
                  <ListAllHolidays />
                </Paper>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <Paper sx={{ width: "90%", padding: "0px", mx: "auto" }}>
                  <ListAllHolidays />
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Dashboard;
