import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthContext from "../../auth/context/AuthContext";
import { loginRefresh } from "../components/servicesCases";
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
import { EstudentsAdviser } from "../views/EstudentsAdviser";
import { CasesAssignedAdviser } from "../views/CasesAssignedAdviser";

export const HomeRoutes = () => {

  const { auth, handleAuth } = useContext(AuthContext);

  useEffect(() => {
    console.log('UPDATING TOKEN')

    loginRefresh().then((res) => {
      if (!!res.response && res.response.status === 406) {
        handleAuth(false, "");
        <Navigate to="/auth/login" />;
        localStorage.setItem("lastPath", "/auth/login");
        localStorage.setItem("login", false);
      }
      if (res.accessToken) {
        console.log('UPDATING TOKEN')
        handleAuth(true, res.accessToken);
      }
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/Bienvenido" element={<WelcomeView />} />
        <Route path="/Casos" element={<Cases />} />
        <Route path="/Casos_Recepcionados" element={<CasesReceived />} />
        <Route path="/Casos_Asignados" element={<CasesAssigned />} />
        <Route path="/Casos_Asignados_asesor" element={<CasesAssignedAdviser />} />
        <Route path="/Estudiantes" element={<Estudents />} />
        <Route path="/Estudiantes_Asesor" element={<EstudentsAdviser />} />
        <Route path="/Asesores" element={<Advisers />} />
        <Route path="/Personas" element={<Persons />} />
        <Route path="/Configuracion" element={<Configuration />} />
        <Route path="/Ver_caso/:id" element={<SeeCase />} />
        <Route path="/Casos_en_progreso/:id" element={<SeeCaseEstudent />} />
        <Route path="/Casos_asesoramiento/:id" element={<SeeCaseEstudent />} />
        <Route path="/" element={<Navigate to="/Bienvenido" />} />
      </Routes>
    </div>
  );
};
