import React, { useState } from "react";
import axios from "axios";

const LeaveRequest = () => {
  const [leaveType, setLeaveType] = useState("");
  const [noOfDays, setNoOfDays] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/leaveRequest/add_leave_request",
        { leaveType, noOfDays, dateFrom, dateTo, reason, description },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(leaveType);
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="leaveType"
          onChange={(e) => {
            setLeaveType(e.target.value);
          }}
          placeholder="Enter your reason for leave"
        />
        <input
          type="text"
          name="noOfDays"
          onChange={(e) => setNoOfDays(e.target.value)}
          placeholder="Enter no of days"
        />
        <input
          type="text"
          name="dateFrom"
          onChange={(e) => setDateFrom(e.target.value)}
          placeholder="Enter date from"
        />
        <input
          type="text"
          name="dateTo"
          onChange={(e) => setDateTo(e.target.value)}
          placeholder="Enter date to"
        />
        <input
          type="text"
          onChange={(e) => setReason(e.target.value)}
          name="reason"
          placeholder="Enter reason"
        />
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter desc"
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default LeaveRequest;
