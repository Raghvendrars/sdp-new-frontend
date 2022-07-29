import react from "react";
import axios from "axios";
import {
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCTC from "./AddCTC";
import AddPayrole from "./AddPayrole";
import ShowAllCTC from "./ShowAllCTC";
import ShowAllPayrole from "./ShowAllPayrole";
export default function AddPayCTC() {
  return (
    <Paper>
      <Grid container>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              Add CTC
            </Grid>
          </Grid>
          <Grid container sx={{ mx: "auto", mt: "3%" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{ mx: "auto" }}
            >
              <Accordion>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Add CTC</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <AddCTC />
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              Add PayRole
            </Grid>
          </Grid>
          <Grid container sx={{ mx: "auto", mt: "3%" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{ mx: "auto" }}
            >
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Add PayRole</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <AddPayrole />
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              ALl CTC
            </Grid>
          </Grid>
          <Grid container sx={{ mx: "auto", mt: "3%" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{ mx: "auto" }}
            >
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Show All CTC</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ShowAllCTC />
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              All PayRole
            </Grid>
          </Grid>
          <Grid container sx={{ mx: "auto", mt: "3%" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{ mx: "auto" }}
            >
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Add PayRole</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ShowAllPayrole />
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
