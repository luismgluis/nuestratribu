import User from "../../classes/User";

const setCurrentUser = (user: User) => (dispatch: any) => {
  dispatch({
    type: "setCurrentUser",
    payload: user,
  });
};

export const reduxSesion = {
  setCurrentUser,
};
