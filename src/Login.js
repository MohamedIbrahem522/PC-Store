import { Grid, Card, Box, Typography } from "@mui/material";
import { useState } from "react";
import Register from "./Register";
import UserLogin from "./UserLogin";

const TabPanel = props => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index &&
        <Box>
          {children}
        </Box>}
    </div>
  );
};

const Login = () => {
  const [value] = useState(0);

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
      <Grid item lg={5} sm={7} xs={12}>
        <Card sx={{ width: "100%", marginTop: 2 }}>
          <Box sx={{ p: 4 }}>
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                mb: 3,
                fontFamily: "Arial, sans-serif",
                color: "red"
              }}
            >
              Login
            </Typography>
            <TabPanel value={value} index={0}>
              <UserLogin />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Register />
            </TabPanel>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
