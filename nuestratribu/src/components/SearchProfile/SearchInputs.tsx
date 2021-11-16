import React, { useState } from "react";
import "./SearchInputs.scss";
import {
  Divider,
  TextFieldProps,
  IconButton,
  InputBase,
  Paper,
  Box,
} from "@mui/material";
import useMobile from "../../hooks/useMobile";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

const TAG = "SEARCH INPUTS";
type SearchInputsProps = {
  onSearch: (text: string) => void;
};
const SearchInputs: React.FC<SearchInputsProps> = ({ onSearch }) => {
  console.log(TAG, "render");
  const isMobile = useMobile();
  const [text, setText] = useState("");
  return (
    <React.Fragment>
      {/* <TextField label="Cédula" {...defaultProps} /> */}
      <Box>
        <Paper
          component="form"
          elevation={1}
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          {/* <IconButton sx={{ p: "10px" }} aria-label="menu">
          <MenuIcon />
        </IconButton> */}
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Buscar Usuarios"
            inputProps={{ "aria-label": "search users" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            type="submit"
            color="primary"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={() => onSearch(text)}
          >
            <SearchIcon />
          </IconButton>

          {/* <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          <DirectionsIcon />
        </IconButton> */}
        </Paper>
      </Box>
      {/* <TextField label="Número de teléfono" {...defaultProps} /> */}
    </React.Fragment>
  );
};
export default SearchInputs;
