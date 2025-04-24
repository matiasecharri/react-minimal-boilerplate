import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateGuardProps {
  children: ReactNode;
  condition: boolean;
  redirection: string;
}

export const PrivateGuard = ({
  children,
  condition,
  redirection,
}: PrivateGuardProps) => {
  return condition ? children : <Navigate to={redirection} replace />;
};
