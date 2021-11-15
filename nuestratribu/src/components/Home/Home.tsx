import "./Home.scss";
import React, { useState } from "react";
import { Box } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import NavBarDrawer from "../NavBar/NavBarDrawer";
import useMobile from "../../hooks/useMobile/useMobile";
import Profile from "../Profile/Profile";
import User from "../../classes/User";

const TAG = "HOME";
type HomeProps = {
  prop1?: any;
};
const Home: React.FC<HomeProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const isDesktop = useMobile("desktop");
  const userTest = new User({
    firstName: "pepe",
    middleName: "leo",
    lastName: "Rincón",
    secondSurname: "Serna",
    phoneNumber: 123456789,
    direction: "Calle 5",
  });
  return (
    <Box sx={{}} className="Home">
      <NavBar
        onOpenMenu={() => setVisibleDrawer(!visibleDrawer)}
        menuOpened={visibleDrawer}
      />
      <NavBarDrawer
        open={visibleDrawer}
        onClose={() => setVisibleDrawer(false)}
      />

      <Box
        sx={{
          width: `calc(100% - ${isDesktop ? 200 : 0}px)`,
          marginLeft: isDesktop ? "200px" : undefined,
        }}
      >
        <Profile userData={userTest} />
      </Box>
    </Box>
  );
};
export default Home;
