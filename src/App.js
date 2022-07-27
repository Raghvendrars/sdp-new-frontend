import "./App.css";
import Home from "./Home";
// import Login from "./Login";
import { useState, useEffect } from "react";
import { Paper, Grid, Button, Typography } from "@mui/material";
import Sidebar from "./components/Sidebar";
import DashboardRouter from "./Router/Router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Login from "./pages/LoginSignup/Login";

axios.defaults.baseURL = "http://localhost:5000/";
//axios.defaults.baseURL = "https://sdpportalbackend.herokuapp.com/";

function App() {
  const [user, setUser] = useState(true);
  useEffect(() => {
    axios
      .get("auth/getLoggedInUser")
      .then((res) => {
        setUser(true);
      })
      .catch((err) => {
        setUser(false);
      });
  }, []);
  return (
    <div className="App">
      <Router>
        {user ? (
          <Paper sx={PaperStyle}>
            <Grid container>
              <Grid
                item
                xl={2}
                lg={2}
                md={3}
                sm={12}
                xs={12}
                sx={{
                  position: {
                    xl: "relative",
                    lg: "relative",
                    md: "relative",
                    sm: "absolute",
                    xs: "absolute",
                  },
                  zIndex: 10,
                }}
              >
                <Sidebar />
              </Grid>
              <Grid item xl={10} lg={10} md={9} sm={12} xs={12}>
                <DashboardRouter />
              </Grid>
            </Grid>
          </Paper>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;

const PaperStyle = {
  height: "100vh",
  width: "100vw",
  borderRadius: "0px",
  bgcolor: "lightgray",
};
