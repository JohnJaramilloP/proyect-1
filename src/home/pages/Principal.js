import { Typography } from "@mui/material";
import React, { useState } from "react";
import { JournalLayout } from "../layout/JournalLayout";
import { OldCases } from "../views";
import { Advisers } from "../views/Advisers";
import { Cases } from "../views/Cases";
import { Estudents } from "../views/Estudents";
import { Persons } from "../views/Persons";
import { WelcomeView } from "../views/WelcomeView";

export const Principal = () => {
  
  const [valueSideBar, setValueSideBar] = useState(" ");
  const [valueSideBarHidden, setValueSideBarHidden] = useState(true);

  return (
    <JournalLayout 
    valueSideBar={valueSideBar}
    setValueSideBar={setValueSideBar}
    valueSideBarHidden={valueSideBarHidden}
    setValueSideBarHidden={setValueSideBarHidden}
    >
      {valueSideBar === " " && <WelcomeView /> }
      {valueSideBar === "Casos" && <Cases /> }
      {valueSideBar === "Estudiantes" && <Estudents /> }
      {valueSideBar === "Asesores" && <Advisers /> }
      {valueSideBar === "Personas" && <Persons /> }
      {valueSideBar === "Casos Antiguos" && <OldCases /> }
    </JournalLayout>
  );
};
