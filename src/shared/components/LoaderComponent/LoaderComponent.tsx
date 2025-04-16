interface LaoderComponentProps {
  message: string;
}
export const LoaderComponent = ({ message }: LaoderComponentProps) => (
  <p>{message}</p>
);
