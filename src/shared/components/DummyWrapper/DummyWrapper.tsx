import { ReactNode } from "react";

interface DummyWrapperProps {
  children: ReactNode;
  className: string;
}

export const DummyWrapper = ({ children, className }: DummyWrapperProps) => (
  <div className={className}>{children}</div>
);
