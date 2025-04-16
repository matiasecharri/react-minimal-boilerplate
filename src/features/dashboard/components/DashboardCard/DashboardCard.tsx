import { ApiCharacter } from "@/api";

interface DashboardCardProps extends ApiCharacter {}

export const DashboardCard = ({ name, image }: DashboardCardProps) => {
  return (
    <article>
      <p>{name}</p>
      <img src={image} alt={name} />
    </article>
  );
};
