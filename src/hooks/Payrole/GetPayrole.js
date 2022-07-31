import React, { useEffect, useState } from "react";
import axios from "axios";

const GetPayrole = () => {
  const [payrole, setPayrole] = useState([]);
  async function getAllLeaves() {
    try {
      await axios
        .get("adminPayrole/getAllPayrole", { withCredentials: true })
        .then((res) => {
          setPayrole(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllLeaves();
  }, []);

  return <div>{payrole.length}</div>;
};

export default GetPayrole;
