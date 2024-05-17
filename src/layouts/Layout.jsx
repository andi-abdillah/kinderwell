import Navbar from "./Navbar";
import Footer from "../pages/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div data-theme="light" className="bg-primary">
      <div className="mx-auto">
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
