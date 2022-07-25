import react from "react";
import { useQuery } from "@tanstack/react-query";

export default function PostLeaves() {
  return useQuery(["post-leaves"], async () => {
    return await axios.post(
      "http://localhost:5000/leaveRequest/get_leave_requests",
      {
        withcreditentials: true,
      }
    );
  });
}
