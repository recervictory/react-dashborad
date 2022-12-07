import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./global/TopBar";
import { ColorModeContext, useMode } from "./styles/theme";

import AppRoutes from "./Routes";
import SideBar from "./global/SideBar";
import { useProSidebar } from "react-pro-sidebar";
import "./styles/main.css"

function App() {
  const [theme, colorMode] = useMode();
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <AppRoutes />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
