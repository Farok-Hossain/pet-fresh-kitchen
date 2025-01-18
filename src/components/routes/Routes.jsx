import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../../pages/Home/Home";
import NutritiousSection from "../home/NutritiousSection";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/nutrition",
                element: <NutritiousSection />
            }
        ]
    }
])