import react from "react";
import { useQuery } from "react-query";
import axios from "axios";

export default function useGetLoginUser() {
  return useQuery(["login-Status"], async () => {
    return await axios.get(
      "http://localhost:5000/employeeAuth/getLoggedInUser",
      {
        withcreditentials: true,
      }
    );
  });
}
