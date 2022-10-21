import { AuthProvider } from "./auth/context/AuthContext";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

export const Home = () => {
  return (
    <div>
      <AuthProvider>
          <AppTheme>
            <AppRouter />
          </AppTheme>
      </AuthProvider>
    </div>
  );
};
