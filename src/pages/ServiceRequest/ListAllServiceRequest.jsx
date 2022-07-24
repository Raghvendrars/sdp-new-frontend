import React, { useState, useEffect } from "react";
import axios from "axios";
import { Paper, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

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
      {serviceRequests.length > 0 ? (
        <>
          {serviceRequests.map((data) => (
            <div>
              <div>{data.requestType}</div>
            </div>
          ))}
        </>
      ) : (
        <h4>no data found</h4>
      )}
    </div>
  );
};

export default ListAllServiceRequest;
