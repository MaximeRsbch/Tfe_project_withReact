import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function navbar() {
    const OpenMobileNavbar = () => {
        document.getElementById("menu").classList.toggle("hidden");
    };

    const CloseMobileNavbar = () => {
        document.getElementById("menu").classList.toggle("hidden");
    };

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    };

    const isConnect = localStorage.getItem("token");

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="z-10">
            <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
                <a className="text-3xl font-bold leading-none" href="#">
                    <img className="h-16" src="assets/img/logo.png" alt="" />
                </a>
                <div className="lg:hidden">
                    <button
                        id="navbar-burger"
                        onClick={OpenMobileNavbar}
                        className="navbar-burger flex items-center text-blue-600 p-3"
                    >
                        <svg
                            className="block h-5 w-5 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 font-bold"
                                    : "text-sm text-gray-400 hover:text-gray-500"
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li className="text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            className="w-4 h-4 current-fill"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                        </svg>
                    </li>
                    <li>
                        <NavLink
                            to="/meilleur-attraction"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 font-bold"
                                    : "text-sm text-gray-400 hover:text-gray-500"
                            }
                        >
                            Meilleur attraction
                        </NavLink>
                    </li>
                    <li className="text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            className="w-4 h-4 current-fill"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                        </svg>
                    </li>
                    <li>
                        <NavLink
                            to="/features"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 font-bold"
                                    : "text-sm text-gray-400 hover:text-gray-500"
                            }
                        >
                            Nouveautés
                        </NavLink>
                    </li>
                    <li className="text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            className="w-4 h-4 current-fill"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                        </svg>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 font-bold"
                                    : "text-sm text-gray-400 hover:text-gray-500"
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li className="text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            className="w-4 h-4 current-fill"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                        </svg>
                    </li>
                </ul>
                {isConnect ? (
                    <div>
                        <div
                            className="relative"
                            data-twe-dropdown-ref
                            data-twe-dropdown-alignment="end"
                        >
                            <a
                                onClick={() =>
                                    setIsDropdownOpen(!isDropdownOpen)
                                }
                                className="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                                id="dropdownMenuButton2"
                                role="button"
                                data-twe-dropdown-toggle-ref
                                aria-expanded="false"
                            >
                                <img
                                    src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                                    className="rounded-full h-10 w-10 md:h-12 md:w-12"
                                    alt=""
                                    loading="lazy"
                                />
                            </a>

                            {isDropdownOpen && (
                                <div
                                    className="absolute right-0 z-30 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="dropdownMenuButton2"
                                    data-twe-dropdown-menu-ref
                                >
                                    <div
                                        className="py-1"
                                        role="none"
                                        data-twe-dropdown-menu-items-ref
                                    >
                                        <NavLink
                                            to="/profil"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem"
                                            data-twe-dropdown-item-ref
                                        >
                                            Votre profil
                                        </NavLink>
                                        <NavLink
                                            to="/settings"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem"
                                            data-twe-dropdown-item-ref
                                        >
                                            Paramètres
                                        </NavLink>
                                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            <button
                                                onClick={logout}
                                                className=""
                                                role="menuitem"
                                                data-twe-dropdown-item-ref
                                            >
                                                Déconnexion
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div>
                        <button
                            onClick={goToLogin}
                            className="hidden lg:flex px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl  items-center gap-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>Login</span>
                        </button>
                    </div>
                )}
            </nav>
            <div id="menu" className=" relative z-50 hidden">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a
                            className="mr-auto text-3xl font-bold leading-none"
                            href="#"
                        >
                            <img
                                className="h-16"
                                src="assets/img/logo.png"
                                alt=""
                            />
                        </a>
                        <button
                            onClick={CloseMobileNavbar}
                            className="navbar-close"
                        >
                            <svg
                                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-1 block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 ">
                                <NavLink
                                    onClick={CloseMobileNavbar}
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-blue-600 font-bold"
                                            : "text-sm text-gray-400 hover:text-blue-600 rounded"
                                    }
                                >
                                    Accueil
                                </NavLink>
                            </li>
                            <li className="mb-1 block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 ">
                                <NavLink
                                    onClick={CloseMobileNavbar}
                                    to="/meilleur-attraction"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-blue-600 font-bold"
                                            : "text-sm text-gray-400 hover:text-blue-600 rounded"
                                    }
                                >
                                    Meilleur attraction
                                </NavLink>
                            </li>
                            <li className="mb-1 block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 ">
                                <NavLink
                                    onClick={CloseMobileNavbar}
                                    to="/features"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-blue-600 font-bold"
                                            : "text-sm text-gray-400 hover:text-blue-600 rounded"
                                    }
                                >
                                    Features
                                </NavLink>
                            </li>

                            <li className="mb-1 block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 ">
                                <NavLink
                                    onClick={CloseMobileNavbar}
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-blue-600 font-bold"
                                            : "text-sm text-gray-400 hover:text-blue-600 rounded"
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        {!isConnect && (
                            <div className="pt-6">
                                <button className="flex px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl  items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Login</span>
                                </button>
                            </div>
                        )}
                        <p className="my-4 text-xs text-center text-gray-400">
                            <span>Copyright © 2024</span>
                        </p>
                        <p className="my-4 text-xs text-center text-gray-400">
                            <span>Rossbach Maxime</span>
                        </p>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default navbar;
