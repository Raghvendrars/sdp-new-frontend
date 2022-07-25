import react from "react";
import { useQuery } from "react-query";
import axios from "axios";

export default function postRequests() {
  return useQuery(["post-requests"], async () => {
    return await axios.post("serviceRequest/add_request", {
      withcreditentials: true,
    });
  });
}
