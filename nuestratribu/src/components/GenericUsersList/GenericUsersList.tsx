import "./GenericUsersList.scss";
import React from "react";
const TAG = "GENERIC USERS LIST";
type GenericUsersListProps = {
  prop1?: any;
};
const GenericUsersList: React.FC<GenericUsersListProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  return <div className="GenericUsersList">GenericUsersList</div>;
};
export default GenericUsersList;
