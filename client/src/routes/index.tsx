import { Route, Routes } from "react-router-dom";
import AuthLayout from "../components/layouts/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AppLayout from "../components/layouts/AppLayout";
import Home from "../pages/Home";
import Memo from "../pages/Memo";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="memo" element={<Home />} />
        <Route path="memo/:memoId" element={<Memo />} />
      </Route>
    </Routes>
  );
};
