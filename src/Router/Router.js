import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Paper, Grid, Button, Typography, Container } from "@mui/material";
import axios from "axios";
import Dashboard from "../Views/EmployeeView/Dashboard";
import LeaveRequest from "../pages/LeaveRequest/LeaveRequest";
import ListLeaveRequests from "../pages/LeaveRequest/ListLeaveRequests";
import ListAllServiceRequest from "../pages/ServiceRequest/ListAllServiceRequest";
import ServiceRequest from "../pages/ServiceRequest/ServiceRequest";
import Header from "../components/Header";
import RequestedModules from "../AdminPages/RequestedModules";
import AddPayCTC from "../AdminPages/AddPayCTC";
import Register from "../AdminPages/Register";
import AddPost from "../AdminPages/AddPost";
import ViewAttendance from "../AdminPages/ViewAttendance";
import AppliedLeaves from "../AdminPages/AppliedLeaves";
import { useNavigate } from "react-router-dom";
import AttendanceTable from "../AdminPages/AttendanceTable";

import Attendance from "../pages/Attendance/Attendance";
import Holidays from "../AdminPages/ShowHolidays";
import AllUser from "../AdminPages/AllUser";
import Payrole from "../pages/Payrole/Payrole";


const DashboardRouter = () => {
  const [user, setUser] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    try {
      axios
        .get("auth/getLoggedInUser", {
          withCredentials: true,
        })
        .then((res) => {
          setUser(true);
        });
    } catch (err) {
      console.log(err);
    }

  }, []);


  return (
    <Paper sx={{ bgcolor: "#f9fafb", height: "100vh" }}>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          {user.role === "Admin" && user.role === "HR" ? null : <Header />}
        </Grid>
      </Grid>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/leaverequest/addLeaveRequest"
          element={<LeaveRequest />}
        />
        <Route
          path="/leaverequest/listleaverequests"
          element={<ListLeaveRequests />}
        />
        <Route path="/payrole" element={<Payrole />} />
        <Route
          path="/servicerequest/addservicerequest"
          element={<ServiceRequest />}
        />
        <Route
          path="/servicerequest/listservicerequests"
          element={<ListAllServiceRequest />}
        />
        <Route path="/attendance" element={<Attendance />} />
        <Route
          path="/dashboard/requestedModules"
          element={<RequestedModules />}
        />
        <Route path="/dashboard/appliedLeaves" element={<AppliedLeaves />} />
        <Route path="/dashboard/addPayCTC" element={<AddPayCTC />} />
        <Route path="/dashboard/register" element={<Register />} />
        <Route path="/dashboard/addpost" element={<AddPost />} />
        <Route path="/dashboard/viewHolidays" element={<Holidays />} />
        <Route path="/dashboard/viewAttendance" element={<ViewAttendance />} />
        <Route path="/dashboard/allUser" element={<AllUser />} />
      </Routes>
    </Paper>
  );
};

export default DashboardRouter;
