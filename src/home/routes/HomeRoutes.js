import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Advisers } from "../views/Advisers";
import { Estudents } from "../views/Estudents";
import { WelcomeView } from "../views/WelcomeView";
import { Cases } from "../views/Cases";
import { Configuration } from "../views/Configuration";
import { Persons } from "../views/Persons";
import { SeeCase } from "../components";

export const HomeRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/Bienvenido" element={<WelcomeView />} />
        <Route path="/Casos" element={<Cases />} />
        <Route path="/Estudiantes" element={<Estudents />} />
        <Route path="/Asesores" element={<Advisers />} />
        <Route path="/Personas" element={<Persons />} />
        <Route path="/Configuracion" element={<Configuration />} />
        <Route path="/Ver_caso" element={<SeeCase />} />
        <Route path="/" element={<Navigate to="/Bienvenido" />} />
      </Routes>
    </div>
  );
};
