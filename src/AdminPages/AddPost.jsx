import react from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import AddDesignation from "./AddDesignation";

export default function AddRole() {
  const [employeeRoleName, setemployeeRoleName] = useState("");
  const [allRolesData, setallRolesData] = useState([]);

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

  useEffect(() => {
    console.log("useEffect");
    async function getData() {
      try {
        const res = await axios.get("roles/get_all_roles", {
          withCredentials: true,
        });
        console.log(res.data);
        setallRolesData(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);
  return (
    <Paper>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>All Roles</Typography>
        </AccordionSummary>
        {allRolesData.map((data) => {
          console.log(data);
          return <AccordionDetails>{data.employeeRoleName}</AccordionDetails>;
        })}
      </Accordion>

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
        <AddDesignation />
      </Grid>
    </Paper>
  );
}
