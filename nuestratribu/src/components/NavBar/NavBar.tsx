import "./NavBar.scss";
import React, { useMemo } from "react";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  IconButton,
  styled,
  Toolbar,
  Typography,
  useTheme,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import useMobile from "../../hooks/useMobile";
import { useHomeGoTo } from "../../hooks/useHomeGoTo";
import CustomAvatar from "./CustomAvatar";

const TAG = "NAV BAR";
type NavBarProps = {
  onOpenMenu?: () => void;
  menuOpened: boolean;
};

const MyThemeSpacingDiv = styled("div")(({ theme }) => ({
  minHeight: theme.mixins.toolbar.minHeight,
  marginBottom: "1rem",
}));

const NavBar: React.FC<NavBarProps> = ({ onOpenMenu, menuOpened }) => {
  console.log(TAG, "render");

  const isMobile = useMobile();
  const isDesktop = useMobile("desktop");
  const theme = useTheme();

  const contrastColorPrimary = useMemo(() => {
    return theme.palette.getContrastText(theme.palette.primary.main);
  }, [theme]);

  const homeGoTo = useHomeGoTo();

  const nameScreen = useMemo(() => {
    switch (homeGoTo.screen) {
      case "EditUser":
        return "Editar Usuario";

      case "InfoUser":
        return "Informacion del Usuario";

      case "SearchUsers":
        return "Busqueda de usuarios";

      default:
        break;
    }
  }, [homeGoTo]);
  return (
    <React.Fragment>
      <Box
        sx={{
          flexGrow: 1,
          position: "fixed",
          width: "100%",
          bottom: 0,
          zIndex: 99,
        }}
      >
        {isMobile && (
          <BottomNavigation showLabels sx={{ bgcolor: "primary.main" }}>
            <BottomNavigationAction
              onClick={onOpenMenu}
              icon={
                <MenuIcon fontSize="large" htmlColor={contrastColorPrimary} />
              }
            />
            <Button fullWidth variant="contained" disableElevation>
              {nameScreen}
            </Button>
            <BottomNavigationAction icon={<CustomAvatar />} />
          </BottomNavigation>
        )}
        {!isMobile && (
          <AppBar
            className="CustomAppBar"
            position="fixed"
            sx={{
              width: `calc(100% - ${menuOpened || isDesktop ? 200 : 0}px)`,
            }}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, display: isDesktop ? "none" : undefined }}
                onClick={() => {
                  if (onOpenMenu) onOpenMenu();
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {nameScreen}
              </Typography>

              {/* <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
              <CustomAvatar />
            </Toolbar>
          </AppBar>
        )}
      </Box>
      {!isMobile && <MyThemeSpacingDiv />}
    </React.Fragment>
  );
};
export default NavBar;
