// import "./CustomList.scss";
import React, { useEffect, useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import useMobile from "../../hooks/useMobile";

type CustomListProps = {
  isVisible: boolean;
  onClose: () => void;
};
const CustomList: React.FC<CustomListProps> = ({
  isVisible = false,
  onClose,
}) => {
  const [open, setOpen] = useState(false);
  const isMobile = useMobile();
  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  useEffect(() => {
    setOpen(isVisible);
  }, [isVisible]);

  return (
    <Menu
      id="menu-appbar"
      // anchorEl={currentElement}
      anchorOrigin={{
        vertical: isMobile ? "bottom" : "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Editar perfil</MenuItem>
      <MenuItem onClick={handleClose}>Salir</MenuItem>
    </Menu>
  );
};

export default CustomList;
