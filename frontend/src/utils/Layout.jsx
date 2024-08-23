import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="p-0 flex flex-col min-h-screen bg-yellow-100">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}