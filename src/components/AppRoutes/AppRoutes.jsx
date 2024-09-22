import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
