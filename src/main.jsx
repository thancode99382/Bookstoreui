import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./components/CartContext.jsx";

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
      <App />
    </CartProvider>
  </React.StrictMode>
);
