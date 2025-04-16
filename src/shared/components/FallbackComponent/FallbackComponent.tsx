import { ReactNode } from "react";

interface FallbackComponentProps {
  message: string;
  children?: ReactNode;
}
export const FallbackComponent = ({
  message,
  children,
}: FallbackComponentProps) => (
  <>
    <p>{message}</p>
    {children}
  </>
);
