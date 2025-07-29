import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import Article from "../pages/Article";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {path: "", element: <HomePage />},
            { path: "artigo/:artigoId", element: <Article /> },
        ]
    }
])

export default router;