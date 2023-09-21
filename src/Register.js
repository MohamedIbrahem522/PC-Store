import React, { useState } from "react";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Alert,
  Card,
  Typography,
  Grid
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Register() {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  });
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
      tc: data.get("tc")
    };

    if (
      actualData.name &&
      actualData.email &&
      actualData.password &&
      actualData.password_confirmation &&
      actualData.tc !== null
    ) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById("registration-form").reset();
        setError({
          status: true,
          msg: "Registration Successful",
          type: "success"
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setError({
          status: true,
          msg: "Password and Confirm Password Don't Match",
          type: "error"
        });
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "690px",
        backgroundColor: "#f0f0f0"
      }}
    >
      <Card sx={{ mt: 5, p: 4, width: "650px" }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ color: "red" }}
        >
          Register
        </Typography>

        <Typography variant="h6" align="center" gutterBottom>
          Kindly fill in this form to register.
        </Typography>
        <Box
          component="form"
          noValidate
          id="registration-form"
          onSubmit={handleSubmit}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            name="name"
            label="Name"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            label="Email Address"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password_confirmation"
            name="password_confirmation"
            label="Confirm Password"
            type="password"
          />
          <FormControlLabel
            control={
              <Checkbox value="agree" color="primary" name="tc" id="tc" />
            }
            label="I agree to term and condition."
          />
          <Box textAlign="center" sx={{ mt: 2 }}>
            <Button type="submit" variant="contained" sx={{ px: 5 }}>
              Join
            </Button>
          </Box>
          {error.status
            ? <Alert severity={error.type} sx={{ mt: 2 }}>
                {error.msg}
              </Alert>
            : null}
        </Box>
      </Card>
    </Grid>
  );
}

export default Register;
