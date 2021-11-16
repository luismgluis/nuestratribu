// import "./CustomAvatar.scss";
import React, { useState } from "react";
import { Stack, Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import CustomList from "./CustomList";

const TAG = "CUSTOM AVATAR";
type CustomAvatarProps = {
  prop1?: any;
};
const CustomAvatar: React.FC<CustomAvatarProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <Stack direction="row" spacing={2}>
      <div onClick={() => setMenuVisible(true)}>
        <Avatar
          sx={{ bgcolor: deepOrange[500] }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        >
          Fe
        </Avatar>
        <CustomList
          isVisible={menuVisible}
          onClose={() => setMenuVisible(false)}
        />
      </div>
    </Stack>
  );
};
export default CustomAvatar;
