function SlippyMap(lat, lon) {
    this.coordinates = [lon, lat];

    this.init = function () {

        var markers = [new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.transform(this.coordinates, 'EPSG:4326', 'EPSG:3857')),
        })];

        var vectorSource = new ol.source.Vector({
            features: markers //add an array of features
        });

        var iconStyle = new ol.style.Style({
            image: new ol.style.Icon(/** @type {olx.style.IconOptions} */({
                anchor: [0.5, 46],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                opacity: 1,
                src: 'openlayers/marker.png'
            }))
        });

        var titleLayer = new ol.layer.Tile({
            source: new ol.source.OSM()
        });

        var vectorLayer = new ol.layer.Vector({
            source: vectorSource,
            style: iconStyle
        });

        var map = new ol.Map({
            target: 'map',
            layers: [titleLayer, vectorLayer],
            view: new ol.View({
                center: ol.proj.fromLonLat(this.coordinates),
                zoom: 16,
            }),
            interactions: ol.interaction.defaults({mouseWheelZoom:false}),
        });
    };
};