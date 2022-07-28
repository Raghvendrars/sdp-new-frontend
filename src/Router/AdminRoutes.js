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
import Attendance from "../pages/Attendance/Attendance";
import RequestedModules from "../AdminPages/RequestedModules";
import AddPayCTC from "../AdminPages/AddPayCTC";
import Register from "../AdminPages/Register";
import AddPost from "../AdminPages/AddPost";
import ViewAttendance from "../AdminPages/ViewAttendance";

const AdminRoutes = () => {
  return (
    <Paper>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Header />
        </Grid>
      </Grid>
      <Routes>
        <Route path="/dashboard/addPayCTC" element={<AddPayCTC />} />
        <Route path="/dashboard/register" element={<Register />} />
        <Route path="/dashboard/addpost" element={<AddPost />} />
        <Route path="/dashboard/viewAttendance" element={<ViewAttendance />} />
      </Routes>
    </Paper>
  );
};

export default AdminRoutes;
