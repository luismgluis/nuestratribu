import "./SearchProfile.scss";
import React, { Fragment, useEffect, useState } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import SearchInputs from "./SearchInputs";
import useMobile from "../../hooks/useMobile";
import { useSetHomeGoTo } from "../../hooks/useHomeGoTo";
import SearchProfileTable from "./SearchProfileTable";
import Api from "../../api/Api";
import GenericUser from "../../classes/GenericUser";

const TAG = "SEARCH PROFILE";

const SearchProfile: React.FC = () => {
  console.log(TAG, "render");
  const isMobile = useMobile();
  const setHomeGoto = useSetHomeGoTo();
  const [textSearch, setTextSearch] = useState("");
  const [usersList, setUsersList] = useState<GenericUser[]>([]);
  useEffect(() => {
    Api.database
      .getGenericUsers()
      .then((data) => {
        setUsersList(data);
      })
      .catch((err) => {
        console.log(err);
        setUsersList([]);
      });
  }, []);
  return (
    <Fragment>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "16ch" },
          pb: 10,
        }}
        noValidate
        autoComplete="off"
        alignSelf="center"
      >
        <Box
          sx={{
            pt: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <b>Consultar información</b>
          </Typography>
        </Box>

        <div className="container">
          <Grid item component="main" sx={{ height: "100vh", padding: "50px" }}>
            <Box
              className="boxinputs"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pb: 20,
              }}
            >
              <Box
                sx={{
                  pb: 5,
                  "& .MuiTextField-root": { m: 1, width: "50ch" },
                }}
              >
                <SearchInputs
                  onSearch={(e) => {
                    setTextSearch(e);
                  }}
                />
              </Box>
              <SearchProfileTable usersList={usersList} />
            </Box>
          </Grid>
        </div>
      </Box>
    </Fragment>
  );
};
export default SearchProfile;
