import { Nav } from "@/shared/components";
import { Provider } from "@/shared/context";
import { Router } from "@/shared/routes";

export const App = () => {
  return (
    <>
      <Provider>
        <Router>
          <Nav />
        </Router>
      </Provider>
    </>
  );
};
