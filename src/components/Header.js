import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Paper, Grid, Button, Typography} from "@mui/material";

const Header = () => {
  const [datatwo, setDataTwo] = useState();
  const [datathree, setDataThree] = useState();

  useEffect(() => {

    try {
      axios
        .get(
          "attendance_employee/get_employee_attendence_byDate",
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

    console.log(currentTime);
    try {
      await axios
        .post(
          "attendance_employee/add_employee_attendence",
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
    try {
      await axios
        .put(
          `attendance_employee/update_employee_attendence/${id}`,
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
        await axios.get('auth/logout',{withCredentials:true}).then((response)=>{
          alert("Logged Out");
        }).catch((err)=>{
          alert(err);
        })
    } catch (err) {
      alert(err);
    }
  }

  let LoggedInTime = new Date(datathree).toLocaleTimeString();

  return (
    <Paper sx={{height:"60px",justifyContent:"center",alignContent:"center",bgcolor:"transparent"}} elevation={0}>
      <Grid
        container
        sx={{ width: "90%", ml: "auto", mr: 1, maxWidth: "600px",pt:2 }}
      >
        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
          {datatwo ? (
            <Typography sx={{fontFamily:"Inter"}}>You have logged In at {LoggedInTime}</Typography>
          ) : (
            <Button variant="contained" sx={{height:"30px"}} onClick={handleLogOn}>
              Log On
            </Button>
          )}
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
          <Button variant="outlined" sx={{height:"30px"}} onClick={handleLogOff}>Log-Off</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;
