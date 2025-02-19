import { useState, useEffect } from "react";
import { TextField, Button, Container, Paper, Typography, Box } from "@mui/material";
import { Person, Home, Email, Phone } from "@mui/icons-material";

export default function UserForm() {
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const [changesSaved, setChangesSaved] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      userId: "USER-" + Math.floor(Math.random() * 100000),
    }));

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (changesSaved) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes. Are you sure you want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [changesSaved]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangesSaved(true);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    setChangesSaved(false);
    alert("User Data Saved!");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, backgroundColor: "#f9f9f9" }}>
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
          📝 User Form
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
          Please enter your details below.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
            User ID: <span style={{ fontWeight: "normal" }}>{formData.userId}</span>
          </Typography>

          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            margin="normal"
            InputProps={{
              startAdornment: <Person sx={{ color: "gray", mr: 1 }} />,
            }}
          />

          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            margin="normal"
            InputProps={{
              startAdornment: <Home sx={{ color: "gray", mr: 1 }} />,
            }}
          />

          <TextField
            fullWidth
            type="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            margin="normal"
            InputProps={{
              startAdornment: <Email sx={{ color: "gray", mr: 1 }} />,
            }}
          />

          <TextField
            fullWidth
            type="tel"
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            margin="normal"
            InputProps={{
              startAdornment: <Phone sx={{ color: "gray", mr: 1 }} />,
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              mt: 3,
              fontSize: "1rem",
              fontWeight: "bold",
              py: 1.5,
              borderRadius: 2,
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "#1565c0",
                transform: "scale(1.05)",
              },
            }}
          >
            💾 Save Data
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
