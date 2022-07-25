import react from "react";
import { useQuery } from "@tanstack/react-query";

export default function postRequests() {
  return useQuery(["post-requests"], async () => {
    return await axios.post(
      "http://localhost:5000/serviceRequest/add_request",
      {
        withcreditentials: true,
      }
    );
  });
}
