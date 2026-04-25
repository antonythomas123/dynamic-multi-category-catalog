import MainLayout from "./layouts/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductCatalog } from "./pages";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ProductCatalog />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
