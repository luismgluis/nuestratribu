import "./Edit.scss";
import React, { useState } from "react";
import { Box } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import NavBarDrawer from "../NavBar/NavBarDrawer";
import useMobile from "../../hooks/useMobile";
import AddUser from "../AddUser/AddUser";
import User from "../../classes/User";

const TAG = "HOME";

const Edit: React.FC = () => {
  console.log(TAG, "render");
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
    creationDate: 18,
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
        <AddUser />
      </Box>
    </Box>
  );
};
export default Edit;
