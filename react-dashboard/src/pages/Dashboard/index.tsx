import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import Team from "../Team";

const Dashboard = () => {
  return (
    <Box className="app-dashboard" m="20px">
      <Header title="Dashboard" subtitle="Welcome to your Dashboard" />
    </Box>
  );
};

export default Dashboard;
