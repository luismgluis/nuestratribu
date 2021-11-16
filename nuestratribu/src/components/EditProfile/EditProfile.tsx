import "./EditProfile.scss";
import React, { Fragment } from "react";
import User from "../../classes/User";
import { Box, Button, Typography, Grid } from "@mui/material";
import ProfileInputs from "./ProfileInputs";
import useMobile from "../../hooks/useMobile";
import { useHomeGoTo, useSetHomeGoTo } from "../../hooks/useHomeGoTo";

const TAG = "EDIT PROFILE";
type ProfileProps = {
  userData: User;
};
const EditProfile: React.FC<ProfileProps> = ({ userData }) => {
  console.log(TAG, "render");
  const isMobile = useMobile();
  const setHomeGoto = useSetHomeGoTo();
  return (
    <Fragment>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "16ch" },
          pb: 40,
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
            <b>Editar información</b>
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
                  color="secondary"
                  //onClick={() => setHomeGoto("InfoUser")}
                  sx={{ mr: 2 }}
                >
                  Eliminar
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setHomeGoto("InfoUser")}
                >
                  Guardar
                </Button>
              </Box>
            </Box>
          </Grid>
        </div>
      </Box>
    </Fragment>
  );
};
export default EditProfile;
