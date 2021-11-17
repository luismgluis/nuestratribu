import Admin from "../../classes/Admin";

type InitialStateSesion = {
  currentUser: Admin;
};
const INITIAL_STATE: InitialStateSesion = {
  currentUser: new Admin(null),
};
const reducerSesion = (
  state: InitialStateSesion = INITIAL_STATE,
  action: any
) => {
  switch (action.type) {
    case "setCurrentUser":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "setCurrentGroup":
      return {
        ...state,
        currentGroup: action.payload,
      };
    default:
      return state;
  }
};
export default reducerSesion;
