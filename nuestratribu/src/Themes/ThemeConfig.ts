import { createTheme } from "@mui/material";
import { amber, indigo } from "@mui/material/colors";
const ThemeConfig = createTheme({
  palette: {
    primary: {
      main: indigo["700"],
    },
    secondary: {
      main: amber["700"],
    },
  },
});
export default ThemeConfig;
