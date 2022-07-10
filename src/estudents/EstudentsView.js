import { Typography } from "@mui/material";
import React, { useState } from "react";
import { JournalLayout } from "./layout/JournalLayout";
import { AssignedCases } from "./views/AssignedCases";
import { CasesReceived } from "./views/CasesReceived";
import { WelcomeView } from "./views/WelcomeView";

export const EstudentsView = () => {
  
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
      {valueSideBar === "Casos Asignados" && <AssignedCases /> }
      {valueSideBar === "Casos Recepcionados" && <CasesReceived /> }

    </JournalLayout>
  );
};
