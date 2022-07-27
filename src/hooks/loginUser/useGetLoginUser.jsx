import { useQuery } from "react-query";
import axios from "axios";

export default function useGetLoginUser() {
  return useQuery(["login-Status"], async () => {
    return await axios.get(
      "auth/getLoggedInUser",
      {
        withcreditentials: true,
      }
    );
  });
}
