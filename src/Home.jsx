import React, { useState, useEffect } from "react";
import axios from "axios";
import { Paper, Grid, Button, Typography } from "@mui/material";

const Home = () => {
  const [datatwo, setDataTwo] = useState();
  const [datathree, setDataThree] = useState();
  const [startTime,setstartTime]=useState()
  const [endTime,setendTime]=useState()

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/auth/getLoggedInUser", {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
        });
    } catch (err) {
      console.log(err);
    }

    try {
      axios
        .get(
          "http://localhost:5000/attendance_employee/get_employee_attendence_byDate",
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          setDataTwo(res.data[0]);
          setDataThree(res.data[0]?.createdAt);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  async function handleLogOn() {
    let currentTime = new Date().toLocaleTimeString();
    setstartTime(currentTime)
    console.log(currentTime);
    try {
      await axios
        .post(
          "http://localhost:5000/attendance_employee/add_employee_attendence",
          {
            entryTime: currentTime,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }

  async function handleLogOff() {
    const id = datatwo._id;
    let currentTime = new Date().toLocaleTimeString();
    setendTime(currentTime)
    console.warn(currentTime);
    try {
      await axios
        .put(
          `http://localhost:5000/attendance_employee/update_employee_attendence/${id}`,
          {
            exitTime: currentTime,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          alert("Logged Out");
        });
    } catch (err) {
      alert(err);
    }
  }
  console.log(new Date(datathree).toLocaleTimeString());
  let LoggedInTime = new Date(datathree).toLocaleTimeString();

  return (
    <Paper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Home</h1>
        </Grid>
        <Grid item xs={12}>
          <h2>Welcome to the home page</h2>
          {datatwo ? (
            <Typography>You have logged In at {LoggedInTime}</Typography>
          ) : (
            <Button variant="contained" onClick={handleLogOn}>
              Log On
            </Button>
          )}
          <Button variant="contained" onClick={handleLogOff}>
            Log off
          </Button>
        </Grid>
      </Grid>
      
    </Paper>
  );
};

export default Home;
