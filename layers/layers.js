var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_highway_2 = new ol.format.GeoJSON();
var features_highway_2 = format_highway_2.readFeatures(json_highway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_2.addFeatures(features_highway_2);
var lyr_highway_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_2, 
                style: style_highway_2,
                interactive: true,
                title: '<img src="styles/legend/highway_2.png" /> highway'
            });
var format_highway_3 = new ol.format.GeoJSON();
var features_highway_3 = format_highway_3.readFeatures(json_highway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_3.addFeatures(features_highway_3);
var lyr_highway_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_3, 
                style: style_highway_3,
                interactive: false,
                title: '<img src="styles/legend/highway_3.png" /> highway'
            });

lyr_OSMStandard_0.setVisible(true);lyr_building_1.setVisible(true);lyr_highway_2.setVisible(true);lyr_highway_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_building_1,lyr_highway_2,lyr_highway_3];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'height': 'height', 'start_date': 'start_date', 'building:material': 'building:material', 'shelter_type': 'shelter_type', 'lit': 'lit', 'bench': 'bench', 'shop': 'shop', 'description': 'description', 'social_facility': 'social_facility', 'name': 'name', 'amenity': 'amenity', 'addr:region': 'addr:region', 'addr:city': 'addr:city', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:province': 'addr:province', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:hamlet': 'addr:hamlet', 'addr:district': 'addr:district', 'addr:country': 'addr:country', 'adress': 'adress', });
lyr_highway_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'layer': 'layer', 'bridge': 'bridge', 'service': 'service', 'smoothness': 'smoothness', 'tracktype': 'tracktype', 'width': 'width', 'horse': 'horse', 'motor_vehicle': 'motor_vehicle', 'foot': 'foot', 'bicycle': 'bicycle', 'footway': 'footway', 'crossing': 'crossing', 'ref': 'ref', 'old_ref': 'old_ref', 'lanes': 'lanes', 'ford': 'ford', 'postal_code': 'postal_code', 'surface': 'surface', 'oneway': 'oneway', 'name:ru': 'name:ru', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name:en': 'name:en', 'name': 'name', 'maxspeed': 'maxspeed', });
lyr_highway_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'crossing': 'crossing', 'ford': 'ford', 'shelter': 'shelter', 'public_transport': 'public_transport', 'bus': 'bus', 'traffic_sign': 'traffic_sign', 'name': 'name', 'barrier': 'barrier', });
lyr_building_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'height': 'TextEdit', 'start_date': 'TextEdit', 'building:material': 'TextEdit', 'shelter_type': 'TextEdit', 'lit': 'TextEdit', 'bench': 'TextEdit', 'shop': 'TextEdit', 'description': 'TextEdit', 'social_facility': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'addr:region': 'TextEdit', 'addr:city': 'TextEdit', 'building:levels': 'TextEdit', 'addr:street': 'TextEdit', 'addr:province': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:hamlet': 'TextEdit', 'addr:district': 'TextEdit', 'addr:country': 'TextEdit', 'adress': 'TextEdit', });
lyr_highway_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'layer': '', 'bridge': '', 'service': '', 'smoothness': '', 'tracktype': '', 'width': '', 'horse': '', 'motor_vehicle': '', 'foot': '', 'bicycle': '', 'footway': '', 'crossing': '', 'ref': '', 'old_ref': '', 'lanes': '', 'ford': '', 'postal_code': '', 'surface': '', 'oneway': '', 'name:ru': '', 'name:etymology:wikidata': '', 'name:en': '', 'name': '', 'maxspeed': '', });
lyr_highway_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'crossing': '', 'ford': '', 'shelter': '', 'public_transport': '', 'bus': '', 'traffic_sign': '', 'name': '', 'barrier': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'height': 'no label', 'start_date': 'no label', 'building:material': 'no label', 'shelter_type': 'no label', 'lit': 'no label', 'bench': 'no label', 'shop': 'no label', 'description': 'no label', 'social_facility': 'no label', 'name': 'no label', 'amenity': 'no label', 'addr:region': 'no label', 'addr:city': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:province': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:hamlet': 'no label', 'addr:district': 'no label', 'addr:country': 'no label', 'adress': 'no label', });
lyr_highway_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'layer': 'no label', 'bridge': 'no label', 'service': 'no label', 'smoothness': 'no label', 'tracktype': 'no label', 'width': 'no label', 'horse': 'no label', 'motor_vehicle': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'footway': 'no label', 'crossing': 'no label', 'ref': 'no label', 'old_ref': 'no label', 'lanes': 'no label', 'ford': 'no label', 'postal_code': 'no label', 'surface': 'no label', 'oneway': 'no label', 'name:ru': 'no label', 'name:etymology:wikidata': 'no label', 'name:en': 'no label', 'name': 'no label', 'maxspeed': 'no label', });
lyr_highway_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'crossing': 'no label', 'ford': 'no label', 'shelter': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'traffic_sign': 'no label', 'name': 'no label', 'barrier': 'no label', });
lyr_highway_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});