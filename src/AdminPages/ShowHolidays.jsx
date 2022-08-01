import { useState, useEffect } from "react";
import axios from "axios";
import AddHoliday from "./AddHoliday";
import {
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";

export default function ShowHolidays() {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("employeeHolidays/getAllHolidays", {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res?.data);
          setHolidays(res?.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Table sx={{ background: "#eceff1" }}>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Holiday Name</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {holidays?.map((data, index) => {
              return (
                <TableRow>
                  <TableCell>
                    <Typography>{index + 1}</Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: "300px" }}>
                    <Typography>{data?.holidayName}</Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: "300px" }}>
                    <Typography>{data.holidayDate}</Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
}
