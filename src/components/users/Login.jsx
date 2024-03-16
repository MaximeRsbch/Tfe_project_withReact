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
                console.log(response.data);
                localStorage.setItem("token", response.data.token);
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
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black bg-zinc-200"
                                        v-model="email"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Mot de passe
                                </label>
                                <div className="mt-1">
                                    <input
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        autoComplete="current-password"
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black bg-zinc-200"
                                        v-model="password"
                                    />
                                </div>
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
