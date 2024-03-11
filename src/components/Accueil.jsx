import { useEffect } from "react";
import leaflet from "leaflet";
import { Mapbox_API_KEY } from "./common/config.js";
import Map from "../Map.jsx";

function Accueil() {
    return (
        <div>
            <div>
                <Map />
            </div>
        </div>
    );
}

export default Accueil;
