import React, { useState, useContext, useEffect } from "react";
import { JournalLayout } from "../layout/JournalLayout";
import { HomeRoutes } from "../routes/HomeRoutes";
import Swal from 'sweetalert2';

export const Principal = () => {
  const [valueSideBarHidden, setValueSideBarHidden] = useState(true);
  
  const alert = (icon, text) => {
    Swal.fire({
      icon: icon,
      title: 'Oops...',
      text: text,
    })
  };

  return (
    <JournalLayout
      valueSideBarHidden={valueSideBarHidden}
      setValueSideBarHidden={setValueSideBarHidden}
    >
      <HomeRoutes />
    </JournalLayout>
  );
};
