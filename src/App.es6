"use strict";

import leaflet from "leaflet";

const accessToken = 'pk.eyJ1IjoidmljdG9yZGVsdmFsIiwiYSI6IktrNVNPQ00ifQ.axLtszv3eOhChdcfh91G6A';

class VanillaMap {
    constructor(id) {
        this.id = id || 'map';
        this.map = null;
    }

    render() {
        var map = L.map('map').fitWorld();

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: accessToken
        }).addTo(map);

        map.locate({setView: true, maxZoom: 16});

        return map;
    }
}

module.exports = (options) => {
    return new VanillaMap(options);
};