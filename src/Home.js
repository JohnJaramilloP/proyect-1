import React from "react";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

export const Home = () => {
  return (
    <div>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </div>
  );
};
