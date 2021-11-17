import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../api/Api";
import { useCurrentUser, useSetCurrentUser } from "../../hooks/currentUser";
const TAG = "PRIVATE ROUTE";
type PrivateRouteProps = {
  disableValidation?: boolean;
  children?: any;
};
const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  disableValidation,
}) => {
  console.log(TAG, "render");
  const navigate = useNavigate();
  const me = useCurrentUser();
  const setMe = useSetCurrentUser();
  useEffect(() => {
    console.log(TAG, "mememe");
    if (me.isEmpty()) {
      Api.app.getCurrentUser((user) => {
        if (!user) {
          navigate("/login");
          return;
        }
        const uid = user?.uid;
        if (uid)
          Api.database.user
            .getAdmin(uid)
            .then((user) => {
              if (!user.isEmpty()) {
                setMe(user);
                return;
              }
              navigate("/login");
            })
            .catch((err) => {
              // navigate("/login");
            });
      });
    }
  }, [me, setMe, navigate]);

  return (
    <React.Fragment>
      {(disableValidation || !me.isEmpty()) && children}
    </React.Fragment>
  );
};

export default PrivateRoute;
