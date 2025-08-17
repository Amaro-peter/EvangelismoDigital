import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ArticlePage from "../pages/ArticlePage";
import HomePageWrapper from "../components/HomePageWrapper";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {path: "", element: <HomePageWrapper />},
            { path: "artigo/:artigoId", element: <ArticlePage /> },
        ]
    }
])

export default router;