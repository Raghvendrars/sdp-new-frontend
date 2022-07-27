import React from "react";
import { Paper, Grid, Typography } from "@mui/material";

const ListAllLeaves = () => {
  return (
    <Paper sx={{ minHeight: "200px", width: "90%" }}>
      <Grid container>
        <Typography>My Leaves</Typography>
      </Grid>
      <Grid container></Grid>
    </Paper>
  );
};

export default ListAllLeaves;
