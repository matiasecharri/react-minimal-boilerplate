import { ReactNode } from "react";

export interface ButtonProps {
  text: string;
  ariaLabel: string;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  handleClick: () => void;
}
