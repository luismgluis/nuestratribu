import "./Profile.scss";
import React from "react";
import User from "../../classes/User";
const TAG = "PROFILE";
type ProfileProps = {
  userData: User;
};
const Profile: React.FC<ProfileProps> = ({ userData }) => {
  console.log(TAG, "render");
  return (
    <div className="Profile">
      Hola me llamo: {userData.firstName} {userData.middleName}{" "}
      {userData.lastName} {userData.secondSurname} {userData.phoneNumber}{" "}
      {userData.direction}
    </div>
  );
};
export default Profile;
