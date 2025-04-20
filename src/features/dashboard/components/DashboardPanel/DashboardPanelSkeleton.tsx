import clsx from "clsx";
import s from "./DashboardPanel.module.css";

interface DashboardPanelSkeletonProps {
  quantity: number;
  className: string;
}

export const DashboardPanelSkeleton = ({
  quantity,
  className,
}: DashboardPanelSkeletonProps) => {
  const skeletonCards = new Array(quantity).fill(null);

  return (
    <div className={s.container}>
      {skeletonCards.map((_, i) => (
        <div key={i} className={clsx(s.skeletonCard, className)}></div>
      ))}
    </div>
  );
};
