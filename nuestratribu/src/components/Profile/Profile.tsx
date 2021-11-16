import "./Profile.scss";
import React, { Fragment } from "react";

import { Box, Button, Typography, Grid } from "@mui/material";
import ProfileInputs from "./ProfileInputs";
import useMobile from "../../hooks/useMobile";
import { useSetHomeGoTo } from "../../hooks/useHomeGoTo";
import User from "../../classes/User";

const TAG = "PROFILE";
type ProfileProps = {
  userData: User;
};
const Profile: React.FC<ProfileProps> = ({ userData }) => {
  console.log(TAG, "render");
  const isMobile = useMobile();
  const setHomeGoto = useSetHomeGoTo();
  return (
    <Fragment>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "16ch" },
          pb: 10,
        }}
        noValidate
        autoComplete="off"
        alignSelf="center"
      >
        <Box
          sx={{
            pt: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <b>Información de usuario</b>
          </Typography>
        </Box>

        <div className="container">
          <Grid item component="main" sx={{ height: "100vh", padding: "50px" }}>
            <Box
              className="boxinputs"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pb: 20,
              }}
            >
              {isMobile && <ProfileInputs userData={userData} />}
              {!isMobile && (
                <div>
                  <ProfileInputs userData={userData} />
                </div>
              )}
              <Box mt={4}>
                <Button
                  variant="contained"
                  onClick={() => setHomeGoto("EditUser")}
                >
                  Editar información
                </Button>
              </Box>
            </Box>
          </Grid>
        </div>
      </Box>
    </Fragment>
  );
};
export default Profile;
