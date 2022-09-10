import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Advisers } from "../views/Advisers";
import { Estudents } from "../views/Estudents";
import { WelcomeView } from "../views/WelcomeView";
import { Cases } from "../views/Cases";
import { CasesReceived } from "../views/CasesReceived";
import { Configuration } from "../views/Configuration";
import { Persons } from "../views/Persons";
import { SeeCase } from "../components";
import { CasesAssigned } from "../views/CasesAssigned";
import { SeeCaseEstudent } from "../components/SeeCaseEstudent";

export const HomeRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/Bienvenido" element={<WelcomeView />} />
        <Route path="/Casos" element={<Cases />} />
        <Route path="Casos_Recepcionados" element={<CasesReceived />} />
        <Route path="Casos_Asignados" element={<CasesAssigned />} />
        <Route path="/Estudiantes" element={<Estudents />} />
        <Route path="/Asesores" element={<Advisers />} />
        <Route path="/Personas" element={<Persons />} />
        <Route path="/Configuracion" element={<Configuration />} />
        <Route path="/Ver_caso" element={<SeeCase />} />
        <Route path="/Ver_caso_ase_estu" element={<SeeCaseEstudent />} />
        <Route path="/" element={<Navigate to="/Bienvenido" />} />
      </Routes>
    </div>
  );
};
