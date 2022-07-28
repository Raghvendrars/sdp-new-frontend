import { useQuery } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Paper, Typography, Box } from "@mui/material";
import "./Loading.css";
// import { Typography } from "antd";

export default function ProtectedRouteWrapper({ children }) {
  const navigate = useNavigate();
  const { data, isLoading, isError, isFetched, isFetching } = useQuery(
    "userData",
    async () => {
      await axios.get("user/getLoggedInUser", { withCredentials: true });
    },
    {
      refetchInterval: 10000,
      retry: 0,
    },
    {
      onerror: () => {
        navigate("/login");
      },
    }
  );

  useEffect(() => {
    if (isError && !isFetching) {
      navigate("/login");
    }
  }, [isError]);

  if (isLoading) {
    return (
      <Paper
        sx={{
          bgcolor: "#000",
          height: "100%",
          minHeight: "100vh",
          borderRadius: "0px",
          border: "0px",
        }}
        elevation={0}
      >
        <Box sx={BoxStyle}>
          <div class="loader">
            <div class="circle one"></div>
            <div class="circle two"></div>
            <div class="circle three"></div>
          </div>
        </Box>
      </Paper>
    );
  }

  if (!isError) {
    return <>{children}</>;
  }

  return <></>;
}

const BoxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
