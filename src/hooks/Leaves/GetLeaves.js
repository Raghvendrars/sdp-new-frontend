import react from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function GetLeaves() {
  return useQuery(["leave-status"], async () => {
    return await axios.get(
      "leaveRequest/get_leave_requests",
      {
        withcreditentials: true,
      }
    );
  });
}
