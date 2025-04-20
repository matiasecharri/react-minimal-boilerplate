import { DashboardPanel } from "@/features/dashboard/components";
import { Provider } from "@/shared/context";

export const App = () => {
  return (
    <>
      <Provider>
        <DashboardPanel />
      </Provider>
    </>
  );
};
