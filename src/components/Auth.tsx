import React from "react";
import { auth, provider } from "../config/firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";
import { Button, Card, CardContent, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Auth: React.FC = () => {
  const signIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Login Successful!");
    } catch (error) {
      console.error("Login Failed", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      alert("Logged Out");
    } catch (error) {
      console.error("Logout Failed", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f9",
      }}
    >
      <Card
        sx={{
          width: 350,
          padding: 3,
          textAlign: "center",
          boxShadow: 3,
          borderRadius: 3,
          background: "white",
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Welcome to MyApp
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Sign in to access your account
          </Typography>

          <Button
            onClick={signIn}
            variant="contained"
            startIcon={<GoogleIcon />}
            sx={{
              mt: 2,
              backgroundColor: "#4285F4",
              "&:hover": { backgroundColor: "#357ae8" },
              width: "100%",
            }}
          >
            Sign In with Google
          </Button>

          <Button
            onClick={logout}
            variant="outlined"
            startIcon={<ExitToAppIcon />}
            sx={{
              mt: 2,
              width: "100%",
            }}
          >
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
