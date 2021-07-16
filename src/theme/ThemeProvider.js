import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./index";

// import { useCookies } from "react-cookie";

export const CustomThemeProvider = (props) => {
  //const { data } = useSession();
  // const [cookies] = useCookies(["userData"]);

  // useEffect(() => {
  //   console.log(cookies);
  // }, [cookies]);

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
