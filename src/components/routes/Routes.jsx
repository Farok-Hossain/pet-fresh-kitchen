import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../../pages/Home/Home";
import Order from "@/pages/Order/Order";
import About from "@/pages/About/About";
import Recipes from "@/pages/RecipeNutrition/Recipes";

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
                path:"/recipe",
                element: <Recipes />
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