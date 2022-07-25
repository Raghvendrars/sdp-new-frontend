import React from "react";
import { Paper, Grid, Typography } from "@mui/material";

const ListAllHolidays = () => {
  return (
    <Paper sx={{ minHeight: "200px", width: "100%", mx: "auto" }}>
      <Grid container>
        <Paper elevation={3} sx={{ width: "100%" }}>
          <Typography sx={{ fontSize: "28px", pb: "2%", pl: "2%", pt: "1%" }}>
            Upcoming Holidays
          </Typography>
        </Paper>
      </Grid>
      <Grid container>
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            borderRadius: "0px",
            minHeight: "60px",
            mx: "auto",
          }}
        >
          {" Navratri"}
        </Paper>
      </Grid>
    </Paper>
  );
};

export default ListAllHolidays;
