import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./components/Cart/CartContext.jsx";
import { CardProductProvider } from "./components/Cart/CardProductProvider.jsx";

/* const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/cart',
    element: <DefaultLayout/>
  }
])
 */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <CartProvider>
      <CardProductProvider>
        <App />
      </CardProductProvider>
    </CartProvider>
  </React.StrictMode>
);
