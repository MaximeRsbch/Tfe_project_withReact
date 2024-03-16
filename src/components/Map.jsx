import React, { useEffect } from "react";
import leaflet from "leaflet";
import { Mapbox_API_KEY } from "./common/config.js";
import "leaflet/dist/leaflet.css";

export default function Map() {
    useEffect(() => {
        let map = leaflet.map("map").setView([50.7001368, 4.5873087], 10);

        const ids = [
            "mapbox/satellite-streets-v12",
            "mapbox/dark-v11",
            "mapbox/outdoors-v12",
        ];
        const baselayers = {};

        ids.forEach(
            (id) =>
                (baselayers[id] = leaflet.tileLayer(
                    `https://api.mapbox.com/styles/v1/${id}/tiles/{z}/{x}/{y}?access_token=${Mapbox_API_KEY}`,
                    {
                        maxZoom: 19,
                        attribution:
                            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                        tileSize: 512,
                        zoomOffset: -1,
                    }
                ))
        );

        baselayers["mapbox/outdoors-v12"].addTo(map);
        const layerControl = leaflet.control.layers(baselayers);
        layerControl.addTo(map).setPosition("bottomright");

        map.zoomControl.remove();

        return () => {
            map.remove();
        };
    }, []);

    return <div id="map" style={{ height: "90vh" }}></div>;
}
