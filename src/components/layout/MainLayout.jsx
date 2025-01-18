import { Outlet } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;