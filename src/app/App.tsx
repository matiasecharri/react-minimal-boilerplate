import { Nav } from "@/shared/components";
import { Provider } from "@/shared/context";
import { AppRouter } from "@/shared/routes";

export const App = () => {
  return (
    <>
      <Provider>
        <AppRouter>
          <Nav />
        </AppRouter>
      </Provider>
    </>
  );
};
