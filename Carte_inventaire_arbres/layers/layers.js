var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_arbre_1 = new ol.format.GeoJSON();
var features_arbre_1 = format_arbre_1.readFeatures(json_arbre_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arbre_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arbre_1.addFeatures(features_arbre_1);
var lyr_arbre_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_arbre_1, 
                style: style_arbre_1,
                popuplayertitle: 'arbre',
                interactive: true,
    title: 'arbre<br />\
    <img src="styles/legend/arbre_1_0.png" /> Arbre de Judée<br />\
    <img src="styles/legend/arbre_1_1.png" /> Cèdre de l\'Atlas<br />\
    <img src="styles/legend/arbre_1_2.png" /> Charme commun<br />\
    <img src="styles/legend/arbre_1_3.png" /> Chêne blanc<br />\
    <img src="styles/legend/arbre_1_4.png" /> Chêne chevelu<br />\
    <img src="styles/legend/arbre_1_5.png" /> Chêne pédonculé<br />\
    <img src="styles/legend/arbre_1_6.png" /> Chêne pubescent<br />\
    <img src="styles/legend/arbre_1_7.png" /> Chêne rouge<br />\
    <img src="styles/legend/arbre_1_8.png" /> Chêne vert<br />\
    <img src="styles/legend/arbre_1_9.png" /> Cyprès toujours vert<br />\
    <img src="styles/legend/arbre_1_10.png" /> Érable argenté<br />\
    <img src="styles/legend/arbre_1_11.png" /> Érable champêtre<br />\
    <img src="styles/legend/arbre_1_12.png" /> Érable de Norvège<br />\
    <img src="styles/legend/arbre_1_13.png" /> Érable du Japon<br />\
    <img src="styles/legend/arbre_1_14.png" /> Érable sycomore<br />\
    <img src="styles/legend/arbre_1_15.png" /> Févier d\'Amérique<br />\
    <img src="styles/legend/arbre_1_16.png" /> Frêne à feuilles étroites<br />\
    <img src="styles/legend/arbre_1_17.png" /> Frêne commun<br />\
    <img src="styles/legend/arbre_1_18.png" /> Marronnier d\'Inde<br />\
    <img src="styles/legend/arbre_1_19.png" /> Micocoulier du Sud<br />\
    <img src="styles/legend/arbre_1_20.png" /> Néflier commun<br />\
    <img src="styles/legend/arbre_1_21.png" /> Noyer noir<br />\
    <img src="styles/legend/arbre_1_22.png" /> Olivier européen<br />\
    <img src="styles/legend/arbre_1_23.png" /> Pin parasol<br />\
    <img src="styles/legend/arbre_1_24.png" /> Platane hybride<br />\
    <img src="styles/legend/arbre_1_25.png" /> Poirier de Chine<br />\
    <img src="styles/legend/arbre_1_26.png" /> Robinier faux-acacia<br />\
    <img src="styles/legend/arbre_1_27.png" /> Tilleul à grandes feuilles<br />\
    <img src="styles/legend/arbre_1_28.png" /> Tilleul à petites feuilles<br />\
    <img src="styles/legend/arbre_1_29.png" /> Tilleul argenté<br />\
    <img src="styles/legend/arbre_1_30.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_arbre_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_arbre_1];
lyr_arbre_1.set('fieldAliases', {'espece': 'espece', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_arbre_1.set('fieldImages', {'espece': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_arbre_1.set('fieldLabels', {'espece': 'no label', 'latitude': 'hidden field', 'longitude': 'hidden field', });
lyr_arbre_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});