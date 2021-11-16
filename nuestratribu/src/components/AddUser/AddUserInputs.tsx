import React from "react";
import "./AddUserInputs.scss";
import { Chip, Divider, TextField, TextFieldProps } from "@mui/material";
import useMobile from "../../hooks/useMobile";
import { Box } from "@mui/system";

const TAG = "ADD USER INPUTS";

const AddUserInputs: React.FC = () => {
  console.log(TAG, "render");
  const isMobile = useMobile();

  const defaultProps: TextFieldProps = {
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
    <React.Fragment>
      {<CustomDivider>Informacion basica</CustomDivider>}

      <TextField label="Cédula" required {...defaultProps} />

      <TextField label="Primer nombre" {...defaultProps} />

      <TextField label="Segundo nombre" {...defaultProps} />

      <TextField label="Primer Apellido" {...defaultProps} />

      <TextField label="Segundo Apellido" {...defaultProps} />

      <TextField label="Edad" {...defaultProps} />

      <TextField label="Género" {...defaultProps} />

      {<CustomDivider>Informacion de contacto</CustomDivider>}

      <TextField label="Teléfono" {...defaultProps} />

      <TextField label="Email" {...defaultProps} />

      <TextField label="Dirección" {...defaultProps} margin="dense" />
    </React.Fragment>
  );
};
export default AddUserInputs;
