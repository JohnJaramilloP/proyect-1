import { Typography } from "@mui/material";
import React, { useState } from "react";
import { JournalLayout } from "./layout/JournalLayout";
import { Cases } from "./views/Cases";
import { Estudents } from "./views/Estudents";
import { WelcomeView } from "./views/WelcomeView";

export const AdvisersView = () => {
  
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

    </JournalLayout>
  );
};
