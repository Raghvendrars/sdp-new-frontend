import react from "react";
import { useQuery } from "react-query";
import axios from "axios";

export default function GetRequests() {
  return useQuery(["request-status"], async () => {
    return await axios.get("serviceRequest/get_request", {
      withcreditentials: true,
    });
  });
}
