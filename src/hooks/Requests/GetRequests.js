import React, { useEffect, useState } from "react";
import axios from "axios";

const GetRequests = () => {
  const [request, setRequest] = useState([]);
  async function getAllLeaves() {
    try {
      await axios
        .get("adminServiceRequest/get_all_request", { withCredentials: true })
        .then((res) => {
          setRequest(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllLeaves();
  }, []);

  return <div>{request.length}</div>;
};

export default GetRequests;
