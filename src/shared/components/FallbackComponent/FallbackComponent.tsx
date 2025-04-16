import { ReactNode } from "react";

interface FallbackComponentProps {
  title: string;
  message?: string;
  children?: ReactNode;
}
export const FallbackComponent = ({
  title,
  message,
  children,
}: FallbackComponentProps) => (
  <>
    <p>
      {title}!, {message?.toLowerCase()}
    </p>
    {children}
  </>
);
