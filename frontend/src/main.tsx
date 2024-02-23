import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { ContextProvider } from "./contexts/ContextProvider.tsx"
import DefaultPage from "./pages/DefaultPage.tsx"
import App from "./App.tsx"
import GuestPage from "./pages/GuestPage.tsx"
import Login from "./pages/Login.tsx"
import LandingPage from "./pages/LandingPage.tsx"
import Signup from "./pages/Signup.tsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultPage />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home"/>
      },
      {
        path: '/home',
        element: <App />
      },
    ]
  },
  {
    path: '/',
    element: <GuestPage />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
    ]
  },
  {
    path: "*",
    element: <LandingPage />
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ContextProvider>
            <RouterProvider router={router} />
        </ContextProvider>
    </React.StrictMode>,
)
