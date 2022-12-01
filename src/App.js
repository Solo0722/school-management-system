import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ConfigProvider, theme } from "antd";
import Login from "./pages/login";
import Main from "./pages/main";
import colors from "./shared/utils/colors";
import GlobalProvider from "./context/context";

const { darkAlgorithm, compactAlgorithm } = theme;

function App() {
  return (
    <AnimatePresence mode="wait">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: `${colors.primary}`,
            borderRadius: "4px",
          },
        }}
      >
        <BrowserRouter>
          <GlobalProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<Main />} />
            </Routes>
          </GlobalProvider>
        </BrowserRouter>
      </ConfigProvider>
    </AnimatePresence>
  );
}

export default App;
