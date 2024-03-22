import "./MeilleurAttraction.css";
import { useState, useEffect } from "react";
import axios from "axios";

function MeilleurAttraction() {
    const [parcs, setParcs] = useState([]);
    const [attractions, setAttractions] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/parcs").then((res) => {
            setParcs(res.data.data);
        });
    }, []);

    const choixParc = () => {
        const idParc =
            document.getElementById("parc").options[
                document.getElementById("parc").selectedIndex
            ].id;

        if (idParc) {
            axios
                .get(`http://localhost:3000/api/attractions/${idParc}/all`)
                .then((res) => {
                    setTimeout(() => {
                        setAttractions(res.data);
                    }, 300);
                });
        }
    };

    const [averageRatings, setAverageRatings] = useState({});

    useEffect(() => {
        const calculateAverageRatings = () => {
            const result = {};

            attractions.forEach((attraction) => {
                const totalRating = attraction.Reviews.reduce(
                    (sum, review) => sum + review.rating,
                    0
                );

                const averageRating =
                    totalRating / Math.max(attraction.Reviews.length, 1);
                result[attraction.id] = averageRating.toFixed(2);
            });

            setAverageRatings(result);
        };

        calculateAverageRatings();
    }, [attractions]);

    return (
        <div>
            <div className="flex justify-center">
                <select
                    id="parc"
                    onChange={choixParc}
                    className="block px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#344d59] focus:ring-[#344d59] focus:ring-opacity-40 focus:outline-none focus:ring"
                >
                    {parcs.map((parc) => (
                        <option id={parc.id} key={parc.id}>
                            {parc.nom}
                        </option>
                    ))}
                </select>
            </div>
            {attractions.length > 0 ? (
                <div className="flex items-center justify-center px-4 xl:px-20">
                    <div className="container">
                        <table className="w-full  flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 hidden md:flex">
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
                                {attractions.map((attraction) => (
                                    <tr
                                        key={attraction.id}
                                        className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
                                    >
                                        <td className="border-grey-light border hover:bg-gray-100 p-3">
                                            {attraction.nom}
                                        </td>
                                        <td className="border-grey-light border hover:bg-gray-100 p-3">
                                            {attraction.etat
                                                ? "Ouverte"
                                                : "Fermée"}
                                        </td>
                                        <td className="border-grey-light border hover:bg-gray-100 p-3">
                                            {averageRatings[attraction.id] ||
                                                "Pas de note disponible"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="md:hidden">
                            {attractions.map((attraction) => (
                                <table className="w-full  flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 flex md:hidden">
                                    <thead className="text-white">
                                        <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                            <th className="p-3 text-left ">
                                                <span className="md:hidden">
                                                    Nom
                                                </span>
                                                <span className="hidden md:flex">
                                                    Nom de l'attraction
                                                </span>
                                            </th>
                                            <th className="p-3 text-left ">
                                                <span className="md:hidden">
                                                    O/F
                                                </span>
                                                <span className="hidden md:flex">
                                                    Ouverte/fermée
                                                </span>
                                            </th>
                                            <th className="p-3 text-left ">
                                                <span className="md:hidden">
                                                    Note
                                                </span>
                                                <span className="hidden md:flex">
                                                    Note moyenne
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="flex-1 sm:flex-none">
                                        <tr
                                            key={attraction.id}
                                            className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
                                        >
                                            <td className="border-grey-light border hover:bg-gray-100 p-3">
                                                {attraction.nom}
                                            </td>
                                            <td className="border-grey-light border hover:bg-gray-100 p-3">
                                                {attraction.etat
                                                    ? "Ouverte"
                                                    : "Fermée"}
                                            </td>
                                            <td className="border-grey-light border hover:bg-gray-100 p-3">
                                                {averageRatings[
                                                    attraction.id
                                                ] || "Pas de note disponible"}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <h2 className="flex justify-center pt-20 text-3xl">
                    Veuillez selectionner un parc d'attraction
                </h2>
            )}
        </div>
    );
}

export default MeilleurAttraction;
