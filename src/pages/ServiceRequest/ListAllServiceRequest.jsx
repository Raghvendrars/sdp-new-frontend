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
        .get("serviceRequest/get_request", {
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
        <Table sx={{ background: "#eceff1" }}>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Request Type</TableCell>
              <TableCell>Requested From</TableCell>
              <TableCell>Requested Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {serviceRequests?.map((data, index) => {
              let date = new Date(data.createdAt).toLocaleDateString();
              console.log(data,date);
              return (
                <TableRow>
                  <TableCell>
                    <Typography>{index + 1}</Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: "300px" }}>
                    <Typography>{data.requestName}</Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      maxWidth: "250px",

                      whiteSpace: "unset",
                      wordBreak: "break-all",
                    }}
                  >
                    <Typography sx={{ width: "100%" }}>
                      {data.subject}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: "300px" }}>
                    <Typography sx={{ whiteSpace: "initial" }}>
                      {data.requestType}
                    </Typography>
                  </TableCell>
                  <TableCell>{data.approvalName}</TableCell>
                  <TableCell sx={{ maxWidth: "300px" }}>
                    <Typography>{date}</Typography>
                  </TableCell>
                  <TableCell>{data.requestStatus?(<>Approved</>):(<>Pending</>)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
    </div>
  );
};

export default ListAllServiceRequest;
