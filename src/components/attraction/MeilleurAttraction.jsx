import "./MeilleurAttraction.css";
import { useState, useEffect, useRef } from "react";

function MeilleurAttraction() {
    return (
        <div>
            <div className="flex justify-center">
                <select
                    id="parc"
                    className="block px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#344d59] focus:ring-[#344d59] focus:ring-opacity-40 focus:outline-none focus:ring"
                ></select>
            </div>
            <div className="flex items-center justify-center px-4 xl:px-20">
                <div className="container">
                    <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                        <thead className="text-white">
                            <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                <th className="p-3 text-left ">
                                    <span className="md:hidden">Nom</span>
                                    <span className="hidden md:flex">
                                        Nom de l'attraction
                                    </span>
                                </th>
                                <th className="p-3 text-left ">
                                    <span className="md:hidden">O/F</span>
                                    <span className="hidden md:flex">
                                        Ouverte/fermée
                                    </span>
                                </th>
                                <th className="p-3 text-left ">
                                    <span className="md:hidden">Note</span>
                                    <span className="hidden md:flex">
                                        Note moyenne
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="flex-1 sm:flex-none">
                            <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                <td className="border-grey-light border hover:bg-gray-100 p-3">
                                    Cobra
                                </td>
                                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                                    Ouvert
                                </td>
                                <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                                    4.25
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MeilleurAttraction;
