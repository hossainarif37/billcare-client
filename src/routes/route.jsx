import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import SignUp from "../auth/SignUp";
import Login from "../auth/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },

        ]

    },
]);