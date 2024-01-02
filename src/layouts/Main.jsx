import { Outlet } from "react-router-dom";
import Navbar from '../Compoments/Header/Navbar/Navbar'
import Footer from "../Compoments/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />

        </div>
    );
};

export default Main;