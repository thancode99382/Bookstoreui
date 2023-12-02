import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Api from './api.jsx'
import './index.css'


Api()


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
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <App />
  </React.StrictMode>,
)
