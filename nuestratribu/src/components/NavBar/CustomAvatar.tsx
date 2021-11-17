// import "./CustomAvatar.scss";
import React, { useMemo, useState } from "react";
import { Stack, Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import CustomList from "./CustomList";
import { useCurrentUser } from "../../hooks/currentUser";

const TAG = "CUSTOM AVATAR";
type CustomAvatarProps = {
  prop1?: any;
};
const CustomAvatar: React.FC<CustomAvatarProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  const [menuVisible, setMenuVisible] = useState(false);

  const me = useCurrentUser();
  const initials = useMemo(() => {
    let text = "";
    if (me.firstName.length > 0 && text.length < 2)
      text += me.firstName.substr(0, 1);
    if (me.middleName.length > 0 && text.length < 2)
      text += me.middleName.substr(0, 1);

    if (me.lastName.length > 0 && text.length < 2)
      text += me.lastName.substr(0, 1);
    if (me.secondSurname.length > 0 && text.length < 2)
      text += me.secondSurname.substr(0, 1);

    return text;
  }, [me]);
  console.log(menuVisible);
  return (
    <Stack direction="row" spacing={2}>
      <div
        onClick={() => {
          console.log("c");
          setMenuVisible(true);
        }}
      >
        <Avatar
          sx={{ bgcolor: deepOrange[500] }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        >
          {initials}
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
