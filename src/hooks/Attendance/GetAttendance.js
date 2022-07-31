import React, { useEffect, useState } from "react";
import axios from "axios";

const GetAttendance = () => {
  const [attendance, setAttendance] = useState([]);
  async function getAllLeaves() {
    try {
      await axios
        .get("attendance_admin/get_employee_attendence", { withCredentials: true })
        .then((res) => {
            setAttendance(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllLeaves();
  }, []);

  return <div>{attendance.length}</div>;
};

export default GetAttendance;
