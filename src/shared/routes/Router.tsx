import { ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routes.enum";
import { PrivateGuard } from "./PrivateGuard";
import { DashboardPanel } from "@/features/dashboard";
import { useAuth } from "../context/auth";
import { FallbackComponent } from "../components";

interface RouterProps {
  children?: ReactNode;
}

export const AppRouter = ({ children }: RouterProps) => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route
          path={AppRoutes.private.DASHBOARD}
          element={
            <PrivateGuard
              condition={user.isLogged}
              redirection={AppRoutes.public.HOME}
            >
              <DashboardPanel />
            </PrivateGuard>
          }
        />
        <Route
          path="/not-found"
          element={
            <FallbackComponent title="Whoops" message="page not found" />
          }
        />
        <Route path="*" element={<Navigate to={"/not-found"} replace />} />
      </Routes>
    </BrowserRouter>
  );
};
