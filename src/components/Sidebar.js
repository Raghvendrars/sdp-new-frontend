import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {
  Paper,
  Grid,
  Button,
  Typography,
  Container,
  Stack,
  Box,
} from "@mui/material";
import { MdSpaceDashboard, MdMiscellaneousServices } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Logo from "./logo.png";
import AvtarImg from "./avatar.jpg";
import { GiHamburgerMenu, GiArchiveRegister } from "react-icons/gi";
import { HiOutlineUserAdd, HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlinePostAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import AddHoliday from "../AdminPages/AddHoliday";
// import  AllRoleStatus from "../../Utils/AllRoleStatus";

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    try {
      axios
        .get("auth/getLoggedInUser", {
          withCredentials: true,
        })
        .then((res) => {
          setUser(res?.data);
          console.log(res?.data);
        });
    } catch (err) {
      alert(err);
      navigate("/login");
    }
  }, []);

  console.log("user", user);

  async function logout() {
    try {
      await axios.get("auth/logout", { withCredentials: true });
      window.location.reload();
    } catch (err) {
      alert(err);
    }
  }
  return (
    <Paper
      sx={{
        bgcolor: "#f9fafb",
        height: "100vh",
      }}
      elevation={0}
    >
      <Paper
        elevation={0}
        sx={{
          bgcolor: "transparent",
          display: {
            xl: "block",
            lg: "block",
            md: "block",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <Container>
          <Stack spacing={4}>
            <a href="/">
              <Paper
                sx={{
                  width: "100%",
                  mt: 5,
                  bgcolor: "transparent",
                  textAlign: "left",
                }}
                elevation={0}
              >
                <img src={Logo} alt="logoimg" width="200px" />
              </Paper>
            </a>
            <Paper
              sx={{
                height: "60px",
                bgcolor: "#EDEFF1",
                borderRadius: "10px",
              }}
              elevation={0}
            >
              <Grid container>
                <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                  <Box
                    sx={{
                      borderRadius: "50px",
                      width: "40px",
                      height: "40px",
                      mx: "auto",
                      mt: 1.2,
                    }}
                  >
                    <img
                      src={AvtarImg}
                      alt="Avtar"
                      width="40px"
                      height="auto"
                    />
                  </Box>
                </Grid>
                <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      mt: 2,
                      textAlign: "left",
                      ml: 2,
                      fontWight: 500,
                    }}
                  >
                    {user?.employeeName}
                  </Typography>
                </Grid>
              </Grid>{" "}
            </Paper>
            <Paper
              sx={{
                bgcolor: "transparent",
                borderRadius: "0px",
                paddingTop: "30px",
              }}
              elevation={0}
            >
              {/* Admin Routes */}
              {user.role === "Admin" ? (
                <Stack>
                  <Link
                    to="/dashboard/requestedModules"
                    style={{ textDecoration: "none" }}
                  >
                    <Paper sx={ActiveSidebarBox} elevation={0}>
                      <Grid container mt={1}>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                          <Typography
                            sx={{ color: "#2266D1", fontSize: "21px", mt: 0.5 }}
                          >
                            <MdMiscellaneousServices />
                          </Typography>
                        </Grid>
                        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                          <Typography sx={SidebarActiveTextStyle}>
                            Requested Modules
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Link>
                  <Link
                    to="/dashboard/appliedleaves"
                    style={{ textDecoration: "none" }}
                  >
                    <Paper sx={ActiveSidebarBox} elevation={0}>
                      <Grid container mt={1}>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                          <Typography
                            sx={{ color: "#2266D1", fontSize: "21px", mt: 0.5 }}
                          >
                            <ImExit />
                          </Typography>
                        </Grid>
                        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                          <Typography sx={SidebarActiveTextStyle}>
                            Applied Leaves
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Link>
                  <Link
                    to="/dashboard/addPayCTC"
                    style={{ textDecoration: "none" }}
                  >
                    <Paper sx={ActiveSidebarBox} elevation={0}>
                      <Grid container mt={1}>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                          <Typography
                            sx={{ color: "#2266D1", fontSize: "21px", mt: 0.5 }}
                          >
                            <BiRupee />
                          </Typography>
                        </Grid>
                        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                          <Typography sx={SidebarActiveTextStyle}>
                            Payroll/CTC
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Link>
                  <Link
                    to="/dashboard/register"
                    style={{ textDecoration: "none" }}
                  >
                    <Paper sx={ActiveSidebarBox} elevation={0}>
                      <Grid container mt={1}>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                          <Typography
                            sx={{ color: "#2266D1", fontSize: "21px", mt: 0.5 }}
                          >
                            <HiOutlineUserAdd />
                          </Typography>
                        </Grid>
                        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                          <Typography sx={SidebarActiveTextStyle}>
                            Register
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Link>
                  <Link
                    to="/dashboard/allUser"
                    style={{ textDecoration: "none" }}
                  >
                    <Paper sx={ActiveSidebarBox} elevation={0}>
                      <Grid container mt={1}>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                          <Typography
                            sx={{ color: "#2266D1", fontSize: "21px", mt: 0.5 }}
                          >
                            <MdMiscellaneousServices />
                          </Typography>
                        </Grid>
                        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                          <Typography sx={SidebarActiveTextStyle}>
                            All Users
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Link>
                  <Link
                    to="/dashboard/appliedLeavesAdmin"
                    style={{ textDecoration: "none" }}
                  >
                    <Paper sx={ActiveSidebarBox} elevation={0}>
                      <Grid container mt={1}>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                          <Typography
                            sx={{ color: "#2266D1", fontSize: "21px", mt: 0.5 }}
                          >
                            <MdMiscellaneousServices />
                          </Typography>
                        </Grid>
                        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                          <Typography sx={SidebarActiveTextStyle}>
                            Applied Leaves Admin
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Link>
                  <Link
                    to="/dashboard/addpost"
                    style={{ textDecoration: "none" }}
                  >
                    <Paper sx={ActiveSidebarBox} elevation={0}>
                      <Grid container mt={1}>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                          <Typography
                            sx={{ color: "#2266D1", fontSize: "21px", mt: 0.5 }}
                          >
                            <MdOutlinePostAdd />
                          </Typography>
                        </Grid>
                        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                          <Typography sx={SidebarActiveTextStyle}>
                            Add post
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Link>
                  <Link
                    to="/dashboard/viewAttendance"
                    style={{ textDecoration: "none", marginTop: "10px" }}
                  >
                    <Paper sx={ActiveSidebarBox} elevation={0}>
                      <Grid container mt={1}>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                          <Typography
                            sx={{ color: "#2266D1", fontSize: "21px", mt: 0.5 }}
                          >
                            <HiOutlineUserGroup />
                          </Typography>
                        </Grid>
                        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                          <Typography sx={SidebarActiveTextStyle}>
                            Attendance
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Link>
                  <Link
                    to="/dashboard/viewHolidays"
                    style={{ textDecoration: "none", marginTop: "10px" }}
                  >
                    <Paper sx={ActiveSidebarBox} elevation={0}>
                      <Grid container mt={1}>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                          <Typography
                            sx={{ color: "#2266D1", fontSize: "21px", mt: 0.5 }}
                          >
                            <HiOutlineUserGroup />
                          </Typography>
                        </Grid>
                        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                          <Typography sx={SidebarActiveTextStyle}>
                            Holidays
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Link>
                </Stack>
              ) : (
                <Stack spacing={2}>
                  <Link to="/dashboard" style={{ textDecoration: "none" }}>
                    <Paper sx={ActiveSidebarBox} elevation={0}>
                      <Grid container mt={1}>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                          <Typography
                            sx={{ color: "#2266D1", fontSize: "20px", mt: 0.5 }}
                          >
                            <MdSpaceDashboard />
                          </Typography>
                        </Grid>
                        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                          <Typography sx={SidebarActiveTextStyle}>
                            Dashboard
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Link>
                  <Link
                    to="/leaverequest/listleaverequests"
                    style={{ textDecoration: "none" }}
                  >
                    <Paper sx={ActiveSidebarBox} elevation={0}>
                      <Grid container mt={1}>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                          <Typography
                            sx={{ color: "#2266D1", fontSize: "17px", mt: 0.8 }}
                          >
                            <BsFillCalendarEventFill />
                          </Typography>
                        </Grid>
                        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                          <Typography sx={SidebarActiveTextStyle}>
                            Apply for Leave
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Link>

                  <Link
                    to="/servicerequest/listservicerequests"
                    style={{ textDecoration: "none" }}
                  >
                    <Paper sx={ActiveSidebarBox} elevation={0}>
                      <Grid container mt={1}>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                          <Typography
                            sx={{ color: "#2266D1", fontSize: "21px", mt: 0.5 }}
                          >
                            <MdMiscellaneousServices />
                          </Typography>
                        </Grid>
                        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                          <Typography sx={SidebarActiveTextStyle}>
                            Request a Service
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Link>
                  <Link to="/attendance" style={{ textDecoration: "none" }}>
                    <Paper sx={UnactiveSidebarBox} elevation={0}>
                      <Grid container mt={1}>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                          <Typography
                            sx={{ color: "gray", fontSize: "23px", mt: 0.5 }}
                          >
                            <BiRupee />
                          </Typography>
                        </Grid>
                        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                          <Typography sx={SidebarUnactiveTextStyle}>
                            View Attendance
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Link>
                  <Link to="/payrole" style={{ textDecoration: "none" }}>
                    <Paper sx={UnactiveSidebarBox} elevation={0}>
                      <Grid container mt={1}>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                          <Typography
                            sx={{ color: "gray", fontSize: "23px", mt: 0.5 }}
                          >
                            <BiRupee />
                          </Typography>
                        </Grid>
                        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                          <Typography sx={SidebarUnactiveTextStyle}>
                            View Payrole
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Link>
                </Stack>
              )}

              <Paper sx={{ cursor: "pointer" }} elevation={0} onClick={logout}>
                <Grid container mt={1}>
                  <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                    <Typography
                      sx={{ color: "#2266D1", fontSize: "20px", mt: 0.5 }}
                    >
                      <MdSpaceDashboard />
                    </Typography>
                  </Grid>
                  <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                    <Typography sx={SidebarActiveTextStyle}>Logout</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Paper>
          </Stack>
        </Container>
      </Paper>

      {/* For mobile  */}
      <Paper
        elevation={0}
        sx={{
          bgcolor: "transparent",
          display: {
            xl: "none",
            lg: "none",
            md: "none",
            sm: "block",
            xs: "block",
          },
        }}
      >
        {open ? (
          <Button onClick={() => setOpen(false)}>Close</Button>
        ) : (
          <Button onClick={() => setOpen(true)}>
            <GiHamburgerMenu />
          </Button>
        )}

        {open ? (
          <Container>
            <Stack spacing={4}>
              <Paper
                sx={{
                  width: "100%",
                  mt: 5,
                  bgcolor: "transparent",
                  textAlign: "left",
                }}
                elevation={0}
              >
                <img src={Logo} alt="logoimg" width="200px" />
              </Paper>
              <Paper
                sx={{
                  height: "60px",
                  bgcolor: "#EDEFF1",
                  borderRadius: "10px",
                }}
                elevation={0}
              >
                <Grid container>
                  <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                    <Box
                      sx={{
                        borderRadius: "50px",
                        width: "40px",
                        height: "40px",
                        mx: "auto",
                        mt: 1.2,
                      }}
                    >
                      <img
                        src={AvtarImg}
                        alt="Avtar"
                        width="40px"
                        height="auto"
                      />
                    </Box>
                  </Grid>
                  <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                    <Typography
                      sx={{
                        fontSize: "17px",
                        mt: 2,
                        textAlign: "left",
                        ml: 2,
                        fontWight: 500,
                      }}
                    >
                      {user?.employeeName}
                    </Typography>
                  </Grid>
                </Grid>{" "}
              </Paper>
              <Paper
                sx={{
                  bgcolor: "transparent",
                  borderRadius: "0px",
                  paddingTop: "30px",
                }}
                elevation={0}
              >
                <Stack spacing={2}>
                  <Link to="/dashboard" style={{ textDecoration: "none" }}>
                    <Paper sx={ActiveSidebarBox} elevation={0}>
                      <Grid container mt={1}>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                          <Typography
                            sx={{
                              color: "#2266D1",
                              fontSize: "20px",
                              mt: 0.5,
                            }}
                          >
                            <MdSpaceDashboard />
                          </Typography>
                        </Grid>
                        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                          <Typography sx={SidebarActiveTextStyle}>
                            Dashboard
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Link>
                  <Link to="/auth-payroll" style={{ textDecoration: "none" }}>
                    <Paper sx={ActiveSidebarBox} elevation={0}>
                      <Grid container mt={1}>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                          <Typography
                            sx={{
                              color: "#2266D1",
                              fontSize: "20px",
                              mt: 0.5,
                            }}
                          >
                            <MdSpaceDashboard />
                          </Typography>
                        </Grid>
                        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                          <Typography sx={SidebarActiveTextStyle}>
                            Auth
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Link>
                  <Link to="/dashboard" style={{ textDecoration: "none" }}>
                    <Paper sx={ActiveSidebarBox} elevation={0}>
                      <Grid container mt={1}>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                          <Typography
                            sx={{
                              color: "#2266D1",
                              fontSize: "17px",
                              mt: 0.8,
                            }}
                          >
                            <BsFillCalendarEventFill />
                          </Typography>
                        </Grid>
                        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                          <Typography sx={SidebarActiveTextStyle}>
                            Apply for Leave
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Link>
                  <Link to="/dashboard" style={{ textDecoration: "none" }}>
                    <Paper sx={ActiveSidebarBox} elevation={0}>
                      <Grid container mt={1}>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                          <Typography
                            sx={{
                              color: "#2266D1",
                              fontSize: "21px",
                              mt: 0.5,
                            }}
                          >
                            <MdMiscellaneousServices />
                          </Typography>
                        </Grid>
                        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                          <Typography sx={SidebarActiveTextStyle}>
                            Request a Services
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Link>
                  <Link to="/dashboard" style={{ textDecoration: "none" }}>
                    <Paper sx={UnactiveSidebarBox} elevation={0}>
                      <Grid container mt={1}>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                          <Typography
                            sx={{ color: "gray", fontSize: "23px", mt: 0.5 }}
                          >
                            <BiRupee />
                          </Typography>
                        </Grid>
                        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                          <Typography sx={SidebarUnactiveTextStyle}>
                            View Payrole
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Link>
                </Stack>
              </Paper>
            </Stack>
          </Container>
        ) : null}
      </Paper>
    </Paper>
  );
};

export default Sidebar;

const ActiveSidebarBox = {
  borderRadius: "10px",
  bgcolor: "#E8EEF7",
  height: "50px",
  width: "100%",
  display: "flex",
};

const UnactiveSidebarBox = {
  borderRadius: "10px",
  bgcolor: "transparent",
  height: "50px",
  width: "100%",
  display: "flex",
};

const SidebarActiveTextStyle = {
  fontSize: "1rem",
  fontWeight: "normal",
  color: "#2266D1",
  mt: 0.5,
  textAlign: "left",
};
const SidebarActiveIconStyle = {
  fontSize: "1.7rem",
  color: "#2266D1",
};

const SidebarUnactiveTextStyle = {
  fontSize: "1rem",
  fontWeight: "normal",
  color: "#637381",
  mt: 0.5,
  textAlign: "left",
};
const SidebarUnactiveIconStyle = {
  fontSize: "1.7rem",
  color: "gray",
};
