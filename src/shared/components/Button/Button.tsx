import clsx from "clsx";
import { ButtonProps } from "./button.model";
import s from "./Button.module.css";

export const Button = ({
  text,
  ariaLabel,
  children,
  disabled,
  className,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      className={clsx(s.base, className)}
      onClick={handleClick}
      type="button"
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {text}
      {children}
    </button>
  );
};
