import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />

            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default MainLayout;