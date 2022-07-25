import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Paper, Grid, Button, Typography, Container } from "@mui/material";
import axios from "axios";
import Dashboard from "../Views/EmployeeView/Dashboard";
import LeaveRequest from "../pages/LeaveRequest/LeaveRequest";
import ListLeaveRequests from "../pages/LeaveRequest/ListLeaveRequests";
import ListAllServiceRequest from "../pages/ServiceRequest/ListAllServiceRequest";
import ServiceRequest from "../pages/ServiceRequest/ServiceRequest";
import Header from "../components/Header";
import Attendance from "../pages/Attendance/Attendance";
import {useNavigate} from 'react-router-dom'

const DashboardRouter = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/employeeAuth/getLoggedInUser", {
          withCredentials: true,
        })
        .then((res) => {
          setUser(res.data);
        });
    } catch (err) {
      console.log(err);
    }
    if(!user){
        navigate('/login')
      }
  }, []);

  
  return (
    <Paper sx={{ bgcolor: "#f9fafb", height: "100vh" }}>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Header />
        </Grid>
      </Grid>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/leaverequest/addLeaveRequest"
            element={<LeaveRequest />}
          />
          <Route
            path="/leaverequest/listleaverequests"
            element={<ListLeaveRequests />}
          />
          <Route
            path="/servicerequest/addservicerequest"
            element={<ServiceRequest />}
          />
          <Route
            path="/servicerequest/listservicerequests"
            element={<ListAllServiceRequest />}
          />
          <Route path="/attendance" element={<Attendance />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
    </Paper>
  );
};

export default DashboardRouter;
