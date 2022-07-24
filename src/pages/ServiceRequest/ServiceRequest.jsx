import React, { useState } from "react";
import axios from "axios";

const ServiceRequest = () => {
  const [requestType, setrequestType] = useState("");
  const [requestName, setrequestName] = useState("");
  const [approvalName, setapprovalName] = useState("");
  const [requestDate, setrequestDate] = useState("");
  const [subject, setsubject] = useState("");
  const [description, setdescription] = useState("");
  const [requestStatus, setrequestStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/serviceRequest/add_request",
        {
          requestType,
          requestName,
          approvalName,
          requestDate,
          subject,
          description,
          requestStatus
        },
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
  return (
    <div>
      {" "}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="requestType"
          onChange={(e) => {
            setrequestType(e.target.value);
          }}
          placeholder="Enter your subject for leave"
        />
        <input
          type="text"
          name="requestName"
          onChange={(e) => setrequestName(e.target.value)}
          placeholder="Enter no of days"
        />
        <input
          type="text"
          name="approvalName"
          onChange={(e) => setapprovalName(e.target.value)}
          placeholder="Enter date from"
        />
        <input
          type="text"
          name="requestDate"
          onChange={(e) => setrequestDate(e.target.value)}
          placeholder="Enter date to"
        />
        <input
          type="text"
          onChange={(e) => setsubject(e.target.value)}
          name="subject"
          placeholder="Enter subject"
        />
        <input
          type="text"
          name="description"
          onChange={(e) => setdescription(e.target.value)}
          placeholder="Enter desc"
        />
        <input
          type="text"
          name="requestStatus"
          onChange={(e) => setrequestStatus(e.target.value)}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default ServiceRequest;
