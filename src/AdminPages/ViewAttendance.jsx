import react from "react";
import {
  Grid,
  Paper,
  Button,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import axios from "axios";
import AttendanceTable from "./AttendanceTable";
import AddHoliday from "./AddHoliday";
import ShowHolidays from "./ShowHolidays";
export default function ViewAttendance() {
  const [getEmployee, setGetEmployee] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("employee/get_employees", {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res?.data);
          setGetEmployee(res?.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log(getEmployee);
  return (
    <Paper sx={{ height: "100vh" }}>
      <Grid container sx={{ width: "85%", mx: "auto" }}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Button>Update Attendance</Button>
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
            {getEmployee.map((data) => {
              console.log(data);
              return (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{data.firstName}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <AttendanceTable />
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <ShowHolidays />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <AddHoliday />
        </Grid>
      </Grid>
    </Paper>
  );
}
