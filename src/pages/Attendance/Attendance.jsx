import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Paper, Grid ,Button} from "@mui/material";

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/attendance_employee/get_employee_attendence",
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setAttendanceData(res?.data);
      });
  }, []);

  console.log(attendanceData);

  return (
    <Paper>

      <Paper>
        {attendanceData.length > 0 ? (
          attendanceData.map((data) => {
            return (
              <div>
                <h3>{data.createdAt}</h3>
                <div>{data.entryTime}</div>
              </div>
            );
          })
        ) : (
          <h4>no data found</h4>
        )}
      </Paper>
    </Paper>
  );
};

export default Attendance;
