import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
<<<<<<< HEAD
import { CartProvider } from "./components/CartContext.jsx";
=======
import newBooks from "./api/defaultNewBookApi.js";

>>>>>>> 7ea665b9fabbde2ad0c2f6cedc1b9cfd7de0bdab
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
newBooks();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
