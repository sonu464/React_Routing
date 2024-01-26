import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "./routes/Home";
import ContactPage from "./routes/Contact";
import ErrorPage from "./routes/Error";
import ContactDetails from "./routes/ContactDetails";

import "./App.css";
import RootLayout from "./routes/RootLayout";
import Product from "./routes/Product";
import ProductDetails from "./routes/ProductDetails";

// Alternative way
// const routeDefination = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//   </Route>
// );
// const router = createBrowserRouter(routeDefination);

// const router = createBrowserRouter([
//   { path: "/", element: <HomePage /> }, //This is use for defining the router
//   { path: "/contactus", element: <ContactPage /> },
//   { path: "*", element: <ErrorPage /> },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, //path:""
      { path: "product", element: <Product /> },
      { path: "product/:productId", element: <ProductDetails /> },
      { path: "contactus", element: <ContactPage /> },
      { path: "contactus/:contactId", element: <ContactDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />; // Here we activate the router
}

export default App;
