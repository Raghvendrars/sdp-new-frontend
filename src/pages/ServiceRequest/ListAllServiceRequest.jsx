import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Button,
  Grid,
  Container,
  Typography,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
} from "@mui/material";

const ListAllServiceRequest = () => {
  const [serviceRequests, setServiceRequests] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/serviceRequest/get_request", {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res?.data);
          setServiceRequests(res?.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div>
      <Link to="/servicerequest/addservicerequest">
        <Button variant="contained" color="primary">
          Add Service Request
        </Button>
      </Link>
      <h1>List All Service Request</h1>
      {/*{serviceRequests.length > 0 ? (*/}
      <>
        {/*{serviceRequests.map((data) => (
            <div>
              <div>{data.requestType}</div>
            </div>
          ))}*/}
        <Table sx={{ background: "#eceff1" }}>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Request Name</TableCell>
              <TableCell>Approval From</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Reason</TableCell>
              <TableCell>Request Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {serviceRequests.map((index, data) => {
              console.log(data);
              return (
                <TableRow>
                  <TableCell>
                    <Typography>{index + 1}</Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: "300px" }}>
                    <Typography>{data.name}</Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      maxWidth: "250px",

                      whiteSpace: "unset",
                      wordBreak: "break-all",
                    }}
                  >
                    <Typography sx={{ width: "100%" }}>
                      {data.dateFrom - data.dateFrom}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: "300px" }}>
                    <Typography sx={{ whiteSpace: "initial" }}>
                      {data.reason}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: "300px" }}>
                    <Typography>{data.description}</Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </>
      {/*) : (*/}
      {/*<h4>no data found</h4>*/}
    </div>
  );
};

export default ListAllServiceRequest;
