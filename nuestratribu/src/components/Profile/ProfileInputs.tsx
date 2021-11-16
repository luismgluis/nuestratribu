import React from "react";
import "./ProfileInputs.scss";
import {
  Chip,
  Divider,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  TextFieldProps,
} from "@mui/material";
import User from "../../classes/User";
import useMobile from "../../hooks/useMobile";
import { Box } from "@mui/system";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const TAG = "PROFILE INPUTS";
type ProfileInputsProps = {
  userData: User;
};
const ProfileInputs: React.FC<ProfileInputsProps> = ({ userData }) => {
  console.log(TAG, "render");
  const isMobile = useMobile();
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    navigator.clipboard.writeText(userData.id);
  };
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const defaultProps: TextFieldProps = {
    inputProps: { readOnly: true },
    variant: "standard",
    className: "CustomInput",
    style: {
      width: isMobile ? "100%" : undefined,
    },
  };

  const CustomDivider = (props: any) => {
    return (
      <Box sx={{ width: "100%", py: 4 }}>
        <Divider variant="fullWidth">
          <Chip label={props.children} />
        </Divider>
      </Box>
    );
  };

  return (
    // <div className="ProfileInputs">
    // </div>
    <React.Fragment>
      {userData.id !== "" && (
        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Identificador
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={"text"}
            disabled
            value={userData.id}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  <ContentCopyIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      )}
      {<CustomDivider>Informacion basica</CustomDivider>}

      <TextField
        label="Primer nombre"
        defaultValue={userData.firstName}
        {...defaultProps}
      />

      <TextField
        label="Segundo nombre"
        defaultValue={userData.middleName}
        {...defaultProps}
      />

      <TextField
        label="Primer Apellido"
        defaultValue={userData.lastName}
        {...defaultProps}
      />

      <TextField
        label="Segundo Apellido"
        defaultValue={userData.secondSurname}
        {...defaultProps}
      />

      <TextField label="Edad" defaultValue={userData.age} {...defaultProps} />

      <TextField
        label="Género"
        defaultValue={userData.gender}
        {...defaultProps}
      />

      {<CustomDivider>Informacion de contacto</CustomDivider>}

      <TextField
        label="Teléfono"
        defaultValue={userData.phoneNumber}
        {...defaultProps}
      />

      <TextField
        label="Email"
        defaultValue={userData.email}
        {...defaultProps}
      />

      <TextField
        label="Dirección"
        defaultValue={userData.address}
        {...defaultProps}
        margin="dense"
      />
    </React.Fragment>
  );
};
export default ProfileInputs;
