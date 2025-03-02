import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../../pages/Home/Home";
import Order from "@/pages/Order/Order";
import About from "@/pages/About/About";
import Recipes from "@/pages/RecipeNutrition/Recipes";
import Vet from "@/pages/Vet/Vet";
import Work from "@/pages/Work/Work";
import Error from "@/pages/Error/Error";
import SidebarLayout from "../layout/SidebarLayout";
import Profile from "@/pages/SidebarPages/Profile";
import OrderHistory from "@/pages/SidebarPages/OrderHistory";
import SignIn from "@/pages/SignIn/SignIn";
import SignUp from "@/pages/SignUp/SignUp";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import AddToCart from "@/pages/AddToCart/AddToCart";
import Checkout from "@/pages/Checkout/Checkout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/recipe",
        element: <Recipes />,
      },
      {
        path: "/orders",
        element: <Order />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/vet",
        element: <Vet />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/productdetails",
        element: <ProductDetails />,
      },
      {
        path: "/addcart",
        element: <AddToCart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },

  {
    path: "/sidebar",
    element: <SidebarLayout></SidebarLayout>,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "history",
        element: <OrderHistory />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
