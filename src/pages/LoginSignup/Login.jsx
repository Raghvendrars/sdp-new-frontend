import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// import LockOutlinedIcon from "@mui/icons/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AllRoleStatus from "../../Utils/AllRoleStatus";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const [id, setIdOfUser] = useState("");
  const [password, setPasswordOfUser] = useState("");

  const handleSubmit = (e) => {
    console.log(id, password);
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(data);
    axios
      .post(
        "http://localhost:5000/auth/login",
        {
          id,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        AllRoleStatus.map((role) => {
          if (res.data.code === role.code) {
            if (role.code === 101) {
              navigate("/dashboard");
            } else if (role.code === 102) {
              navigate("/attendance");
            }
          }
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/auth/login", {
          withCredentials: true,
        })
        .then((res) => {
          setUser(res.data);
          if (res.data) {
            navigate("/dashboard");
          } else {
            navigate("/login");
          }
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Paper
      sx={{
        position: "absolute",
        top: "0px",
        left: "0px",
        zIndex: 10,
        width: "100vw",
        height: "100vh",
      }}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />e
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={(e) => handleSubmit(e)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="id"
              label="Email Address"
              name="id"
              autoComplete="id"
              autoFocus
              onChange={(e) => {
                setIdOfUser(e.target.value);
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => {
                setPasswordOfUser(e.target.value);
              }}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </Paper>
  );
}
