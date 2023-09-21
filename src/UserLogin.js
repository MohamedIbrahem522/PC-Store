import { TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    if (email.value && password.value) {
      console.log({ email: email.value, password: password.value });
      e.target.reset();
      setError({ status: false });
      navigate("/products");
    } else {
      setError({ status: true, msg: "All Fields are Required" });
    }
  };

  return (
    <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
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
      <Box textAlign="center">
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}>
          Login
        </Button>
      </Box>

      {error &&
        <Alert severity="error" sx={{ mt: 3 }}>
          All Fields are Required
        </Alert>}
    </Box>
  );
};

export default UserLogin;
