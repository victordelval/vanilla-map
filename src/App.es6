"use strict";

import leaflet from "leaflet";

const accessToken = 'pk.eyJ1IjoidmljdG9yZGVsdmFsIiwiYSI6IktrNVNPQ00ifQ.axLtszv3eOhChdcfh91G6A';

class VanillaMap {
    constructor(id = 'map', type = 'leaflet') {
        this.id = id;
        this.type = type;
        this.map = null;
    }

    renderLeaflet() {
        var map,
            baseLayer,
            mapId = this.id;
        this.map = map;
        map = L.map(mapId).setView([40.4, -3.7], 2);
        baseLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: accessToken
        })
        baseLayer.addTo(map);
        map.locate({setView: true, maxZoom: 15});
    }

    render() {
        if (this.type === 'leaflet') {
            this.renderLeaflet();
        } else {
            console.log("render other type...")
        }
    }
}

module.exports = (id, type) => {
    return new VanillaMap(id, type);
};