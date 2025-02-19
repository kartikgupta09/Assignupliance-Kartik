import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Box, Typography } from "@mui/material";

const data = [
  { name: "Jan", users: 10 },
  { name: "Feb", users: 20 },
  { name: "Mar", users: 50 },
  { name: "Apr", users: 80 },
];

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ p: 3, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        📈 User Growth Over Time
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Dashboard;
