
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Team from "../pages/Team";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/team" element={<Team/>} />
    </Routes>
  )
}

export default AppRoutes;