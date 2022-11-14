import "./App.less";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import Auth from "./pages/auth/auth";
import StudentRoutes from "./pages/students";
import StaffRoutes from "./pages/staff";
import AdminRoutes from "./pages/admin";
import PageNotFound from "./pages/404";
import { AnimatePresence } from "framer-motion";
import GlobalProvider from "./context/context";

function App() {
  return (
    <AnimatePresence mode="wait">
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/auth/:authId" element={<Auth />} />
            <Route path="/student-portal/*" element={<StudentRoutes />} />
            <Route path="/staff-portal/*" element={<StaffRoutes />} />
            <Route path="/admin-portal/*" element={<AdminRoutes />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
