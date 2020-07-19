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
var format_kel3_1 = new ol.format.GeoJSON();
var features_kel3_1 = format_kel3_1.readFeatures(json_kel3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kel3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kel3_1.addFeatures(features_kel3_1);
var lyr_kel3_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kel3_1, 
                style: style_kel3_1,
                interactive: true,
                title: '<img src="styles/legend/kel3_1.png" /> kel3'
            });
var format_kel4_2 = new ol.format.GeoJSON();
var features_kel4_2 = format_kel4_2.readFeatures(json_kel4_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kel4_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kel4_2.addFeatures(features_kel4_2);
var lyr_kel4_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kel4_2, 
                style: style_kel4_2,
                interactive: true,
                title: '<img src="styles/legend/kel4_2.png" /> kel4'
            });
var format_Kel1_3 = new ol.format.GeoJSON();
var features_Kel1_3 = format_Kel1_3.readFeatures(json_Kel1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kel1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kel1_3.addFeatures(features_Kel1_3);
var lyr_Kel1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kel1_3, 
                style: style_Kel1_3,
                interactive: true,
                title: '<img src="styles/legend/Kel1_3.png" /> Kel1'
            });
var format_kel7_4 = new ol.format.GeoJSON();
var features_kel7_4 = format_kel7_4.readFeatures(json_kel7_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kel7_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kel7_4.addFeatures(features_kel7_4);
var lyr_kel7_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kel7_4, 
                style: style_kel7_4,
                interactive: true,
                title: '<img src="styles/legend/kel7_4.png" /> kel7'
            });
var format_tugasbesar1_5 = new ol.format.GeoJSON();
var features_tugasbesar1_5 = format_tugasbesar1_5.readFeatures(json_tugasbesar1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tugasbesar1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tugasbesar1_5.addFeatures(features_tugasbesar1_5);
var lyr_tugasbesar1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tugasbesar1_5, 
                style: style_tugasbesar1_5,
                interactive: true,
                title: '<img src="styles/legend/tugasbesar1_5.png" /> tugasbesar1'
            });
var format_kel2_6 = new ol.format.GeoJSON();
var features_kel2_6 = format_kel2_6.readFeatures(json_kel2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kel2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kel2_6.addFeatures(features_kel2_6);
var lyr_kel2_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kel2_6, 
                style: style_kel2_6,
                interactive: true,
                title: '<img src="styles/legend/kel2_6.png" /> kel2'
            });
var format_kel5_7 = new ol.format.GeoJSON();
var features_kel5_7 = format_kel5_7.readFeatures(json_kel5_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kel5_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kel5_7.addFeatures(features_kel5_7);
var lyr_kel5_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kel5_7, 
                style: style_kel5_7,
                interactive: true,
                title: '<img src="styles/legend/kel5_7.png" /> kel5'
            });

lyr_OSMStandard_0.setVisible(true);lyr_kel3_1.setVisible(true);lyr_kel4_2.setVisible(true);lyr_Kel1_3.setVisible(true);lyr_kel7_4.setVisible(true);lyr_tugasbesar1_5.setVisible(true);lyr_kel2_6.setVisible(true);lyr_kel5_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_kel3_1,lyr_kel4_2,lyr_Kel1_3,lyr_kel7_4,lyr_tugasbesar1_5,lyr_kel2_6,lyr_kel5_7];
lyr_kel3_1.set('fieldAliases', {'fid': 'fid', 'x': 'x', 'y': 'y', 'nm_img': 'nm_img', 'ketinggian': 'ketinggian', 'img': 'img', });
lyr_kel4_2.set('fieldAliases', {'fid': 'fid', 'Y': 'Y', 'X': 'X', 'Ketinggian': 'Ketinggian', 'Foto': 'Foto', 'img': 'img', });
lyr_Kel1_3.set('fieldAliases', {'fid': 'fid', 'No': 'No', 'X': 'X', 'Y': 'Y', 'Jalan': 'Jalan', 'Photo': 'Photo', 'Ketinggian Banjir': 'Ketinggian Banjir', 'img': 'img', });
lyr_kel7_4.set('fieldAliases', {'fid': 'fid', 'Y': 'Y', 'X': 'X', 'IMAGE': 'IMAGE', 'KETINGGIAN AIR': 'KETINGGIAN AIR', 'img': 'img', });
lyr_tugasbesar1_5.set('fieldAliases', {'fid': 'fid', 'x': 'x', 'y': 'y', 'foto': 'foto', 'ketingian banjir': 'ketingian banjir', 'img': 'img', });
lyr_kel2_6.set('fieldAliases', {'fid': 'fid', 'X': 'X', 'Y': 'Y', 'Lokasi': 'Lokasi', 'Kode_Foto': 'Kode_Foto', 'Tinggi_Banjir(cm)': 'Tinggi_Banjir(cm)', 'img': 'img', });
lyr_kel5_7.set('fieldAliases', {'fid': 'fid', 'X': 'X', 'Y': 'Y', 'Image': 'Image', 'Alamat': 'Alamat', 'Ketinggian Air': 'Ketinggian Air', 'img': 'img', });
lyr_kel3_1.set('fieldImages', {'fid': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'nm_img': 'Range', 'ketinggian': 'Range', 'img': '', });
lyr_kel4_2.set('fieldImages', {'fid': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Ketinggian': 'Range', 'Foto': 'TextEdit', 'img': '', });
lyr_Kel1_3.set('fieldImages', {'fid': 'TextEdit', 'No': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', 'Jalan': 'TextEdit', 'Photo': 'TextEdit', 'Ketinggian Banjir': 'TextEdit', 'img': 'TextEdit', });
lyr_kel7_4.set('fieldImages', {'fid': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'IMAGE': 'TextEdit', 'KETINGGIAN AIR': 'TextEdit', 'img': '', });
lyr_tugasbesar1_5.set('fieldImages', {'fid': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'foto': 'TextEdit', 'ketingian banjir': 'TextEdit', 'img': '', });
lyr_kel2_6.set('fieldImages', {'fid': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Lokasi': 'TextEdit', 'Kode_Foto': 'TextEdit', 'Tinggi_Banjir(cm)': 'TextEdit', 'img': '', });
lyr_kel5_7.set('fieldImages', {'fid': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Image': 'TextEdit', 'Alamat': 'TextEdit', 'Ketinggian Air': 'TextEdit', 'img': 'TextEdit', });
lyr_kel3_1.set('fieldLabels', {'fid': 'inline label', 'x': 'inline label', 'y': 'inline label', 'nm_img': 'inline label', 'ketinggian': 'inline label', 'img': 'no label', });
lyr_kel4_2.set('fieldLabels', {'fid': 'inline label', 'Y': 'inline label', 'X': 'inline label', 'Ketinggian': 'inline label', 'Foto': 'inline label', 'img': 'no label', });
lyr_Kel1_3.set('fieldLabels', {'fid': 'no label', 'No': 'no label', 'X': 'no label', 'Y': 'no label', 'Jalan': 'no label', 'Photo': 'no label', 'Ketinggian Banjir': 'no label', 'img': 'no label', });
lyr_kel7_4.set('fieldLabels', {'fid': 'inline label', 'Y': 'inline label', 'X': 'inline label', 'IMAGE': 'inline label', 'KETINGGIAN AIR': 'inline label', 'img': 'no label', });
lyr_tugasbesar1_5.set('fieldLabels', {'fid': 'inline label', 'x': 'inline label', 'y': 'inline label', 'foto': 'inline label', 'ketingian banjir': 'inline label', 'img': 'no label', });
lyr_kel2_6.set('fieldLabels', {'fid': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'Lokasi': 'inline label', 'Kode_Foto': 'inline label', 'Tinggi_Banjir(cm)': 'inline label', 'img': 'no label', });
lyr_kel5_7.set('fieldLabels', {'fid': 'no label', 'X': 'no label', 'Y': 'no label', 'Image': 'no label', 'Alamat': 'no label', 'Ketinggian Air': 'no label', 'img': 'no label', });
lyr_kel5_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});