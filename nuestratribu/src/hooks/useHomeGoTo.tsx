import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeCurrentScreen } from "../components/Home/HomeCurrentScreen";
import { reduxGeneralValues } from "../redux/actions/reduxGeneralValues";

type HomeGotoType = {
  screen: HomeCurrentScreen;
  parms: any;
};

export function useHomeGoTo() {
  const [data, setData] = useState<HomeGotoType>({
    screen: "SearchUsers",
    parms: null,
  });
  const oldData = useRef<HomeGotoType>({
    screen: "SearchUsers",
    parms: null,
  });

  useSelector((store: any) => {
    try {
      const lng: HomeGotoType = store.reducerGeneralValues.homeGoTo;
      if (typeof lng !== "undefined") {
        if (lng !== null) {
          if (
            oldData.current.screen !== lng.screen ||
            oldData.current.parms !== lng.parms
          ) {
            setData(lng);
          }
          oldData.current = lng;
        }
      }
      return lng;
    } catch (error) {}
    return 0;
  });

  return data;
}

export function useSetHomeGoTo() {
  const dispatch = useDispatch();

  return useCallback(
    (screen: HomeCurrentScreen, parms: any = null) => {
      dispatch(reduxGeneralValues.setHomeNavigation(screen, parms));
    },
    [dispatch]
  );
}
