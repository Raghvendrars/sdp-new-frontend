import "./App.css";
import Home from "./Home";
// import Login from "./Login";
import { useState, useEffect } from "react";
import { Paper, Grid, Button, Typography } from "@mui/material";
import Sidebar from "./components/Sidebar";
import DashboardRouter from "./Router/Router";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import Login from "./pages/LoginSignup/Login";
import Header from "./components/Header";
import Dashboard from "./Views/EmployeeView/Dashboard";

import LeaveRequest from "./pages/LeaveRequest/LeaveRequest";
import ListLeaveRequests from "./pages/LeaveRequest/ListLeaveRequests";
import ListAllServiceRequest from "./pages/ServiceRequest/ListAllServiceRequest";
import ServiceRequest from "./pages/ServiceRequest/ServiceRequest";
import Attendance from "./pages/Attendance/Attendance";
import Holidays from "./AdminPages/ShowHolidays";
import AllUser from "./AdminPages/AllUser";
import Payrole from "./pages/Payrole/Payrole";
import AppliedLeaves from "./AdminPages/AppliedLeaves";
import AddPayCTC from "./AdminPages/AddPayCTC";
import Register from "./AdminPages/Register";
import AddPost from "./AdminPages/AddPost";
import ViewAttendance from "./AdminPages/ViewAttendance";
import RequestedModules from "./AdminPages/RequestedModules";

// axios.defaults.baseURL = "https://sdpportalbackend.herokuapp.com/";
axios.defaults.baseURL = "http://localhost:5000/";

function App() {
  // const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    try {
      axios
        .get("auth/getLoggedInUser", {
          withCredentials: true,
        })
        .then((res) => {
          setUser(true);
          setRole(res.data.role);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(user);

  return (
    <div className="App">
      <Router>
        {user ? (
          <Grid container>
            <Grid xl={2} lg={2} md={2} sm={2} xs={2}>
              <Sidebar />
            </Grid>
            <Grid xl={10} lg={10} md={10} sm={10} xs={10}>
              <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Header />
                </Grid>
                <Grid xl={12} md={12} lg={12} sm={12} xs={12}>
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
                    <Route path="/holidays" element={<Holidays />} />
                    <Route path="/login" element={<Login />} />
                  </Routes>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Routes>
                    <Route
                      path="/dashboard/requestedModules"
                      element={<RequestedModules />}
                    />
                    <Route
                      path="/dashboard/appliedLeaves"
                      element={<AppliedLeaves />}
                    />
                    <Route
                      path="/dashboard/addPayCTC"
                      element={<AddPayCTC />}
                    />
                    <Route path="/dashboard/register" element={<Register />} />
                    <Route path="/dashboard/addpost" element={<AddPost />} />
                    <Route
                      path="/dashboard/viewHolidays"
                      element={<Holidays />}
                    />
                    <Route
                      path="/dashboard/viewAttendance"
                      element={<ViewAttendance />}
                    />
                    <Route path="/dashboard/allUser" element={<AllUser />} />
                  </Routes>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Login />
        )}
      </Router>
    </div>
  );
}

export default App;
