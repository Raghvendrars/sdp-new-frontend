import react from "react";
import { useQuery } from "react-query";
import axios from "axios";

export default function GetRequests() {
  return useQuery(["request-status"], async () => {
    return await axios.get("http://localhost:5000/serviceRequest/get_request", {
      withcreditentials: true,
    });
  });
}
