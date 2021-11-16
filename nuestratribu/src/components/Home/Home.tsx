import "./Home.scss";
import React, { useState } from "react";
import { Box } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import NavBarDrawer from "../NavBar/NavBarDrawer";
import useMobile from "../../hooks/useMobile";
import Profile from "../Profile/Profile";
import User from "../../classes/User";
import { useHomeGoTo } from "../../hooks/useHomeGoTo";
import EditProfile from "../EditProfile/EditProfile";
import SearchProfile from "../SearchProfile/SearchProfile";
import AddUser from "../AddUser/AddUser";

const TAG = "HOME";
type HomeProps = {
  prop1?: any;
};

const Home: React.FC<HomeProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  const homeGoTo = useHomeGoTo();
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const isDesktop = useMobile("desktop");
  const userTest = new User({
    id: "123",
    firstName: "pepe",
    middleName: "leo",
    lastName: "Rincón",
    secondSurname: "Serna",
    phoneNumber: "123456789",
    address: "Calle 5",
    email: "asdfdsg@gsgv.com",
    age: 22,
    gender: "M",
    creationDate: 17,
  });
  if (homeGoTo) {
    console.log("homeGoTo", homeGoTo);
  }
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
        {homeGoTo.screen === "SearchUsers" && <SearchProfile />}
        {homeGoTo.screen === "EditUser" && <EditProfile userData={userTest} />}
        {homeGoTo.screen === "InfoUser" && (
          <Profile userData={homeGoTo.parms} />
        )}
        {homeGoTo.screen === "AddUser" && <AddUser />}
      </Box>
    </Box>
  );
};
export default Home;
