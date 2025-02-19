import React, { useState } from "react";
import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import Auth from "./components/Auth";
import CounterComponent from "./components/CounterComponent";
import UserForm from "./components/UserForm";
import RichTextEditor from "./components/RichTextEditor";
import Dashboard from "./components/Dashboard";

const components = {
  Auth: <Auth />,
  Counter: <CounterComponent />,
  Form: <UserForm />,
  Editor: <RichTextEditor />,
  Dashboard: <Dashboard />,
};

const App: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<keyof typeof components>("Auth");

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "#1e1e2f",
            color: "#fff",
          },
        }}
      >
        <Typography variant="h5" sx={{ p: 2, textAlign: "center", fontWeight: "bold" }}>
          My Dashboard
        </Typography>
        <List>
          {Object.keys(components).map((key) => (
            <ListItem key={key} disablePadding>
              <ListItemButton onClick={() => setSelectedComponent(key as keyof typeof components)}>
                <ListItemText primary={key} sx={{ textAlign: "center" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {components[selectedComponent]}
      </Box>
    </Box>
  );
};

export default App;
