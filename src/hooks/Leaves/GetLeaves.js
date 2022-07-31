import React, { useEffect, useState } from "react";
import axios from "axios";

const GetLeaves = () => {
  const [leaves, setLeaves] = useState([]);
  async function getAllLeaves() {
    try {
      await axios
        .get("allLeaves/get_leave_requests", { withCredentials: true })
        .then((res) => {
          setLeaves(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllLeaves();
  }, []);

  return <div>{leaves.length}</div>;
};

export default GetLeaves;
