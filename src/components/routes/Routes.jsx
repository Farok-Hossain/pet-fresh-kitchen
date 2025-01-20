import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../../pages/Home/Home";
import NutritiousSection from "../home/NutritiousSection";
import Order from "@/pages/Order/Order";
import About from "@/pages/About/About";

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
            },
            {
                path: "/orders",
                element: <Order />
            },
            
            {
                path: "/about",
                element: <About />
            }
            
        ]
    }
])