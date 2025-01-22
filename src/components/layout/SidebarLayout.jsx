import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import Sidebar from "@/shared/Sidebar/Sidebar";
import { Outlet, ScrollRestoration } from "react-router-dom";

const SidebarLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex container ">
        <Sidebar />
        <Outlet></Outlet>
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default SidebarLayout;
