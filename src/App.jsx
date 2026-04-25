import MainLayout from "./layouts/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductCatalog, ProductDetails } from "./pages";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ProductCatalog />,
      },
      {
        path: "products/:slug",
        element: <ProductDetails />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
