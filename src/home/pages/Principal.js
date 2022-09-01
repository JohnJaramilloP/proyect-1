import React, { useState } from "react";
import { JournalLayout } from "../layout/JournalLayout";
import { HomeRoutes } from "../routes/HomeRoutes";


export const Principal = () => {
  
  const [valueSideBarHidden, setValueSideBarHidden] = useState(true);

  return (
    <JournalLayout 
    valueSideBarHidden={valueSideBarHidden}
    setValueSideBarHidden={setValueSideBarHidden}
    >
      <HomeRoutes />
    </JournalLayout>
  );
};
