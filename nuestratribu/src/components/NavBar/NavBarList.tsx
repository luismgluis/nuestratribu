import React, { useCallback } from "react";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  styled,
  Divider,
  Box,
} from "@mui/material";
//import SendIcon from "@mui/icons-material/Send";

//import DraftsIcon from "@mui/icons-material/Drafts";
import useMobile from "../../hooks/useMobile";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useSetHomeGoTo } from "../../hooks/useHomeGoTo";
import { HomeCurrentScreen } from "../Home/HomeCurrentScreen";

const TAG = "NAVBAR LIST";

const MyThemeSpacingDiv = styled("div")(({ theme }) => ({
  minHeight: theme.mixins.toolbar.minHeight,
  marginBottom: "1rem",
}));

type NavBarListProps = {
  onSelect?: () => void;
};

const NavBarList: React.FC<NavBarListProps> = ({ onSelect }) => {
  console.log(TAG, "render");

  const isMobile = useMobile();
  const setHomeGoTo = useSetHomeGoTo();
  const customGoto = useCallback(
    (screen: HomeCurrentScreen) => {
      setHomeGoTo(screen);
      if (onSelect) onSelect();
    },
    [setHomeGoTo, onSelect]
  );
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: isMobile ? undefined : 360,
        minWidth: isMobile ? undefined : 200,
        bgcolor: "background.paper",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <div>
          <MyThemeSpacingDiv>
            <Box
              sx={{
                alignContent: "center",
                justifyContent: "center",
                display: "flex",
                margin: "10px 0px 0px 10px",
              }}
            >
              <img
                height="100"
                width="80%"
                src="https://firebasestorage.googleapis.com/v0/b/nuestra-tribu.appspot.com/o/pp.svg?alt=media&token=63f48e86-56fa-42b0-a46a-b746f532e3ab"
                alt="App icon"
              ></img>
            </Box>
          </MyThemeSpacingDiv>
          <Divider />
        </div>
      }
    >
      <ListSubheader component="div" id="nested-list-subheader">
        Herramientas
      </ListSubheader>

      <ListItemButton onClick={() => customGoto("SearchUsers")}>
        <ListItemIcon>
          <PersonSearchIcon />
        </ListItemIcon>
        <ListItemText primary="Consultar usuario" />
      </ListItemButton>

      <ListItemButton onClick={() => customGoto("AddUser")}>
        <ListItemIcon>
          <PersonAddIcon />
        </ListItemIcon>
        <ListItemText primary="Agregar usuario" />
      </ListItemButton>

      {/* <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse> */}
    </List>
  );
};
export default NavBarList;
