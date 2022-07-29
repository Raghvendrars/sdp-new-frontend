import { useState, useEffect } from "react";
import axios from "axios";
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
export default function AllUser() {
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
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell>Employee Name</TableCell>
          <TableCell>Post</TableCell>
          <TableCell>Designation</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {getEmployee?.map((data, index) => {
          return (
            <TableRow>
              <TableCell>{index + 1}</TableCell>

              <TableCell>{data.firstName}</TableCell>
              <TableCell>{data.role}</TableCell>
              <TableCell>{data.designation}</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
