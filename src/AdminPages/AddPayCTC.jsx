import react from "react";
import axios from "axios";
import { Paper, Grid, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import AddCTC from "./AddCTC";
import AddPayrole from "./AddPayrole";
export default function AddPayCTC() {
  return (
    <Paper>
      <Grid Continer>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <AddCTC />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <AddPayrole />
        </Grid>
      </Grid>
    </Paper>
  );
}
