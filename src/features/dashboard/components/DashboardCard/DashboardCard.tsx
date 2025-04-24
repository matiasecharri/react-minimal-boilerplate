import { DashboardCardProps } from "./dashboardCard.models";

export const DashboardCard = ({ name, image }: DashboardCardProps) => {
  return (
    <article>
      <p>{name}</p>
      <img src={image} alt={name} />
    </article>
  );
};
