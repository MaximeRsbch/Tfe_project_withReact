import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function BasicExample() {
    const navigate = useNavigate();

    const goToRegisterPage = () => {
        navigate("/register");
    };

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const recupUser = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3000/api/auth/login", {
                email: email,
                password: password,
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                navigate("/profil");
            });
    };

    return (
        <div>
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Connectez-vous à votre compte !
                    </h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={recupUser}>
                            <div>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="w-4 h-4 opacity-70"
                                    >
                                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                    </svg>
                                    <input
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        type="text"
                                        className="grow"
                                        placeholder="Email"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="w-4 h-4 opacity-70"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <input
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        type="password"
                                        className="grow"
                                        placeholder="Mot de passe"
                                    />
                                </label>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#344d59] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Connectez-vous !
                                </button>
                            </div>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-base">
                                    <span className="px-2 bg-white text-gray-500">
                                        Ou
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="pt-5">
                            <button
                                onClick={goToRegisterPage}
                                type="button"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#344d59] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Inscrivez-vous !
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
