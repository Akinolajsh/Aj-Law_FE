import { RouterProvider } from "react-router-dom";
import { MainRoute } from "./Router/MainRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

const client = new QueryClient();

const App = () => {
  return (
    <div>
        <QueryClientProvider client={client}>
      <RecoilRoot>
          <RouterProvider router={MainRoute} />
      </RecoilRoot>
        </QueryClientProvider>
    </div>
  );
};

export default App;
