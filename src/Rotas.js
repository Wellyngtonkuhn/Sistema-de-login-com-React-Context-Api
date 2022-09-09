import { Routes, Route } from "react-router-dom";

import RotasPrivadas from "./RotasPrivadas";

import Home from "./components/Home";
import DashBoard from "./components/dashboard/DashBoard";
import Login from "./components/login/Login";
import Cadastro from "./components/login/Cadastro";

export default function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<RotasPrivadas />}>
          <Route path="dashboard" element={<DashBoard />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="criar-conta" element={<Cadastro />} />
      </Routes>
    </>
  );
}
