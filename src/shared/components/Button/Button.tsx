import { ButtonProps } from "./Button.model";

export const Button = ({
  text,
  ariaLabel,
  children,
  handleClick,
}: ButtonProps) => {
  return (
    <button onClick={handleClick} type="button" aria-label={ariaLabel}>
      {text}
      {children}
    </button>
  );
};
