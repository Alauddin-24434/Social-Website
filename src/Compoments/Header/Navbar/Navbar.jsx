import { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    const navLink = (
        <>
            <li>
                <NavLink
                    to="/"
                    exact
                    className="nav-link"
                    activeClassName="active-link"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/newsFeed"
                    className="nav-link"
                    activeClassName="active-link"
                >
                   News Feed
                </NavLink>
            </li>
        </>
    );

    return (
        <div>
            <nav>

                {/* small screen code start */}
                <div className=" block md:hidden">
                    <div className="flex  items-center justify-between bg-slate-300 p-2 shadow-lg">
                        <span >
                            LOGO
                        </span>
                        <div>
                            <span onClick={handleMenu}><IoMenu /></span>
                        </div>
                       
                    </div>
                    {
                            isMenuOpen && (
                                <div className="bg-slate-400 float-right p-4 mt-2 translate-x-2">
                                    <ul className="flex flex-col gap-2 cursor-pointer">
                                        <li className="bg-slate-300 px-4 shadow-md hover:bg-slate-700 hover:text-white transition duration-300 ease-in-out">Profile</li>
                                        <li className="bg-slate-300 px-4 shadow-md hover:bg-slate-700 hover:text-white transition duration-300 ease-in-out">Dashboard</li>
                                        <li className="bg-slate-300 px-4 shadow-md hover:bg-slate-700 hover:text-white transition duration-300 ease-in-out">Setting</li>
                                        <li className="bg-slate-300 px-4 shadow-md hover:bg-slate-700 hover:text-white transition duration-300 ease-in-out">Help</li>
                                        <li className="bg-slate-300 px-4 shadow-md hover:bg-slate-700 hover:text-white transition duration-300 ease-in-out">Logout</li>
                                    </ul>
                                </div>
                            )
                        }

                </div>

                {/* small screen code end */}

                {/* large screen start */}
                <div className="hidden md:block ">
                    <div className="flex items-center  justify-between bg-slate-300 p-2 shadow-lg">

                        <span className="hidden md:block">
                            LOGO
                        </span>

                        <ul className="flex items-center gap-4">
                            {navLink}
                        </ul>

                        <div className="flex items-center gap-4 mr-4">
                            <span><IoMdNotifications className="text-2xl" /></span>
                            <div onClick={handleClick}>
                                <img className="w-12 h-12 border border-spacing-1 rounded-full cursor-pointer" src="https://i.ibb.co/vDzgrz3/replicate-prediction-tt72p7jbdvhnwbili2di7xgygi.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* menu open */}
                {isOpen && (
                    <div className="float-right mr-6 bg-slate-400 p-2 mt-2">
                        <ul className="flex flex-col gap-2 cursor-pointer">
                            <li className="bg-slate-300 px-4 shadow-md hover:bg-slate-700 hover:text-white transition duration-300 ease-in-out">Profile</li>
                            <li className="bg-slate-300 px-4 shadow-md hover:bg-slate-700 hover:text-white transition duration-300 ease-in-out">Dashboard</li>
                            <li className="bg-slate-300 px-4 shadow-md hover:bg-slate-700 hover:text-red-500 transition duration-300 ease-in-out">Logout</li>
                        </ul>
                    </div>
                )}
                {/* large screen end */}
            </nav>
        </div>
    );
};

export default Navbar;
