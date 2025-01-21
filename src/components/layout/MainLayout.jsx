import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";
import Footer from "@/shared/footer/Footer";


const MainLayout = () => {
    return (
        <div className="font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration />
        </div>
    );
};

export default MainLayout;