import react from "react";
import axios from "axios";
import { useQuery } from "react-query";

export default function PostLeaves() {
  return useQuery(["post-leaves"], async () => {
    return await axios.post(
      "leaveRequest/get_leave_requests",
      {
        withcreditentials: true,
      }
    );
  });
}
