import { useState, useEffect } from "react";
import axios from "axios";
import { Paper, Grid, Typography, TextField, Button } from "@mui/material";

export default function AddHoliday() {
  const [holidayName, setholidayName] = useState("");
  const [holidayDate, setholidayDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "holidays/addHoliday",
        {
          holidayName,
          holidayDate,
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
      <Grid Container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Paper sx={{ mt: "3%" }}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography sx={{ fontSize: "28px" }}>Add Holidays</Typography>
              </Grid>
            </Grid>
          </Paper>
          <Grid container sx={{ mt: "3%" }}>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
              <Typography sx={{ fontSize: "28px" }}>New Holiday</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
              <TextField
                id="outlined-search"
                label="Employment ID"
                size="large"
                sx={{ width: "80%", minWidth: "80px" }}
                onChange={(e) => {
                  setholidayName(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ mt: "3%" }}>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
              <Typography sx={{ fontSize: "28px" }}>Date</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
              <TextField
                id="outlined-search"
                label="Date"
                size="large"
                sx={{ width: "80%", minWidth: "80px" }}
                onChange={(e) => {
                  setholidayDate(e.target.value);
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Button type="submit">Submit</Button>
        </Grid>
      </Grid>
    </form>
  );
}