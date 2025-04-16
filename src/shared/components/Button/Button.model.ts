import { ReactNode } from "react";

export interface ButtonProps {
  text: string;
  ariaLabel: string;
  children?: ReactNode;
  handleClick: () => void;
}
