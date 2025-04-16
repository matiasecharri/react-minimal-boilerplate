import { ButtonProps } from "./Button.model";

export const Button = ({
  text,
  ariaLabel,
  children,
  disabled,
  handleClick,
}: ButtonProps) => {
  return (
    <button
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
