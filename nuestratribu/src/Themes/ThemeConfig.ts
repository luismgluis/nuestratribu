import { createTheme } from "@mui/material";
import { red, indigo } from "@mui/material/colors";
const ThemeConfig = createTheme({
  palette: {
    primary: {
      main: indigo["A700"],
    },
    secondary: {
      main: red["A400"],
    },
  },
});
export default ThemeConfig;
