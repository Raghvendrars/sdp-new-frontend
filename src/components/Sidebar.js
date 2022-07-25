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
import { BsFillCalendarEventFill } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Logo from "./logo.png";
import AvtarImg from "./avatar.jpg";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  console.log(user);

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
        {/*{user ? ({user?.employeeInfo?.name}):()}*/}
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
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
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
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
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
      </Paper>

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
                            Request a Service
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
