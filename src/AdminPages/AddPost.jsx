import react from "react";
import { useState } from "react";
import axios from "axios";
import { Paper, Grid, Typography, TextField, Button } from "@mui/material";

export default function AddPost() {
  const [employeeRoleName, setemployeeRoleName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "addEmployeeRole/add_role",
        {
          employeeRoleName,
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
    <Grid container sx={{ width: "70%", mx: "auto" }}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Paper sx={{ mt: "3%" }}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography sx={{ fontSize: "28px" }}>Add Post</Typography>
              </Grid>
            </Grid>
          </Paper>
          <Grid container sx={{ mt: "3%" }}>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
              <Typography sx={{ fontSize: "28px" }}>New role</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
              <TextField
                id="outlined-search"
                label="New Role"
                size="large"
                sx={{ width: "80%", minWidth: "80px" }}
                onChange={(e) => {
                  setemployeeRoleName(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Button type="submit">Submit</Button>
          </Grid>
        </Grid>
      </form>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Paper sx={{ mt: "3%" }}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography sx={{ fontSize: "28px" }}>Add Designation</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Grid container sx={{ mt: "3%" }}>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            <Typography sx={{ fontSize: "28px" }}>New Designation</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
            <TextField
              id="outlined-search"
              label="Employment ID"
              size="large"
              sx={{ width: "80%", minWidth: "80px" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
