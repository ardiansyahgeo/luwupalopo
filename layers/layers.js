var wms_layers = [];


        var lyr_googleimagery_0 = new ol.layer.Tile({
            'title': 'google imagery',
            //'type': 'base',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_LBS2024_1 = new ol.format.GeoJSON();
var features_LBS2024_1 = format_LBS2024_1.readFeatures(json_LBS2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LBS2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LBS2024_1.addFeatures(features_LBS2024_1);
var lyr_LBS2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LBS2024_1, 
                style: style_LBS2024_1,
                popuplayertitle: "LBS (2024)",
                interactive: true,
                title: '<img src="styles/legend/LBS2024_1.png" /> LBS (2024)'
            });
var format_LSD_2 = new ol.format.GeoJSON();
var features_LSD_2 = format_LSD_2.readFeatures(json_LSD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LSD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSD_2.addFeatures(features_LSD_2);
var lyr_LSD_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LSD_2, 
                style: style_LSD_2,
                popuplayertitle: "LSD",
                interactive: true,
                title: '<img src="styles/legend/LSD_2.png" /> LSD'
            });
var format_LP2B_KOTAPALOPO_3 = new ol.format.GeoJSON();
var features_LP2B_KOTAPALOPO_3 = format_LP2B_KOTAPALOPO_3.readFeatures(json_LP2B_KOTAPALOPO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LP2B_KOTAPALOPO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LP2B_KOTAPALOPO_3.addFeatures(features_LP2B_KOTAPALOPO_3);
var lyr_LP2B_KOTAPALOPO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LP2B_KOTAPALOPO_3, 
                style: style_LP2B_KOTAPALOPO_3,
                popuplayertitle: "LP2B_KOTA PALOPO",
                interactive: true,
                title: '<img src="styles/legend/LP2B_KOTAPALOPO_3.png" /> LP2B_KOTA PALOPO'
            });
var format_FungsiKawasanHutan_4 = new ol.format.GeoJSON();
var features_FungsiKawasanHutan_4 = format_FungsiKawasanHutan_4.readFeatures(json_FungsiKawasanHutan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FungsiKawasanHutan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FungsiKawasanHutan_4.addFeatures(features_FungsiKawasanHutan_4);
var lyr_FungsiKawasanHutan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FungsiKawasanHutan_4, 
                style: style_FungsiKawasanHutan_4,
                popuplayertitle: "Fungsi Kawasan Hutan",
                interactive: true,
    title: 'Fungsi Kawasan Hutan<br />\
    <img src="styles/legend/FungsiKawasanHutan_4_0.png" /> Area Penggunaan Lain<br />\
    <img src="styles/legend/FungsiKawasanHutan_4_1.png" /> Hutan lindung<br />\
    <img src="styles/legend/FungsiKawasanHutan_4_2.png" /> Hutan Produksi<br />\
    <img src="styles/legend/FungsiKawasanHutan_4_3.png" /> Hutan Produksi Terbatas<br />\
    <img src="styles/legend/FungsiKawasanHutan_4_4.png" /> Taman Wisata Alam/Hutan Wisata Darat<br />'
        });
var lyr_RDTRKECWARUUTARADANBARA_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "RDTR KEC. WARU UTARA DAN BARA",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RDTRKECWARUUTARADANBARA_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13374719.907236, -334332.675725, 13382259.353708, -326125.567020]
                            })
                        });
var format_SISISELATAN_6 = new ol.format.GeoJSON();
var features_SISISELATAN_6 = format_SISISELATAN_6.readFeatures(json_SISISELATAN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SISISELATAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SISISELATAN_6.addFeatures(features_SISISELATAN_6);
var lyr_SISISELATAN_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SISISELATAN_6, 
                style: style_SISISELATAN_6,
                popuplayertitle: "SISI SELATAN",
                interactive: true,
    title: 'SISI SELATAN<br />\
    <img src="styles/legend/SISISELATAN_6_0.png" /> Badan Air<br />\
    <img src="styles/legend/SISISELATAN_6_1.png" /> Kawasan Ekosistem Mangrove<br />\
    <img src="styles/legend/SISISELATAN_6_2.png" /> Kawasan Hortikultura<br />\
    <img src="styles/legend/SISISELATAN_6_3.png" /> Kawasan Hutan Lindung<br />\
    <img src="styles/legend/SISISELATAN_6_4.png" /> Kawasan Hutan Produksi Terbatas<br />\
    <img src="styles/legend/SISISELATAN_6_5.png" /> Kawasan Hutan Produksi Tetap<br />\
    <img src="styles/legend/SISISELATAN_6_6.png" /> Kawasan Pariwisata<br />\
    <img src="styles/legend/SISISELATAN_6_7.png" /> Kawasan Pembangkitan Tenaga Listrik<br />\
    <img src="styles/legend/SISISELATAN_6_8.png" /> Kawasan Perikanan Budi Daya<br />\
    <img src="styles/legend/SISISELATAN_6_9.png" /> Kawasan Perikanan Tangkap<br />\
    <img src="styles/legend/SISISELATAN_6_10.png" /> Kawasan Perkebunan<br />\
    <img src="styles/legend/SISISELATAN_6_11.png" /> Kawasan Perkebunan Rakyat<br />\
    <img src="styles/legend/SISISELATAN_6_12.png" /> Kawasan Perlindungan Setempat<br />\
    <img src="styles/legend/SISISELATAN_6_13.png" /> Kawasan Permukiman Perdesaan<br />\
    <img src="styles/legend/SISISELATAN_6_14.png" /> Kawasan Permukiman Perkotaan<br />\
    <img src="styles/legend/SISISELATAN_6_15.png" /> Kawasan Pertahanan dan Keamanan<br />\
    <img src="styles/legend/SISISELATAN_6_16.png" /> Kawasan Peruntukan Industri<br />\
    <img src="styles/legend/SISISELATAN_6_17.png" /> Kawasan Tanaman Pangan<br />\
    <img src="styles/legend/SISISELATAN_6_18.png" /> Kawasan Transportasi<br />'
        });
var format_SISIUTARA_7 = new ol.format.GeoJSON();
var features_SISIUTARA_7 = format_SISIUTARA_7.readFeatures(json_SISIUTARA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SISIUTARA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SISIUTARA_7.addFeatures(features_SISIUTARA_7);
var lyr_SISIUTARA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SISIUTARA_7, 
                style: style_SISIUTARA_7,
                popuplayertitle: "SISI UTARA",
                interactive: true,
    title: 'SISI UTARA<br />\
    <img src="styles/legend/SISIUTARA_7_0.png" /> Badan Air<br />\
    <img src="styles/legend/SISIUTARA_7_1.png" /> Kawasan Ekosistem Mangrove<br />\
    <img src="styles/legend/SISIUTARA_7_2.png" /> Kawasan Hortikultura<br />\
    <img src="styles/legend/SISIUTARA_7_3.png" /> Kawasan Hutan Lindung<br />\
    <img src="styles/legend/SISIUTARA_7_4.png" /> Kawasan Hutan Produksi Terbatas<br />\
    <img src="styles/legend/SISIUTARA_7_5.png" /> Kawasan Hutan Produksi Tetap<br />\
    <img src="styles/legend/SISIUTARA_7_6.png" /> Kawasan Pariwisata<br />\
    <img src="styles/legend/SISIUTARA_7_7.png" /> Kawasan Pembangkitan Tenaga Listrik<br />\
    <img src="styles/legend/SISIUTARA_7_8.png" /> Kawasan Perikanan Budi Daya<br />\
    <img src="styles/legend/SISIUTARA_7_9.png" /> Kawasan Perikanan Tangkap<br />\
    <img src="styles/legend/SISIUTARA_7_10.png" /> Kawasan Perkebunan<br />\
    <img src="styles/legend/SISIUTARA_7_11.png" /> Kawasan Perkebunan Rakyat<br />\
    <img src="styles/legend/SISIUTARA_7_12.png" /> Kawasan Perlindungan Setempat<br />\
    <img src="styles/legend/SISIUTARA_7_13.png" /> Kawasan Permukiman Perdesaan<br />\
    <img src="styles/legend/SISIUTARA_7_14.png" /> Kawasan Permukiman Perkotaan<br />\
    <img src="styles/legend/SISIUTARA_7_15.png" /> Kawasan Pertahanan dan Keamanan<br />\
    <img src="styles/legend/SISIUTARA_7_16.png" /> Kawasan Peruntukan Industri<br />\
    <img src="styles/legend/SISIUTARA_7_17.png" /> Kawasan Tanaman Pangan<br />\
    <img src="styles/legend/SISIUTARA_7_18.png" /> Kawasan Transportasi<br />'
        });
var format_RTRWKOTAPALOPO2022_8 = new ol.format.GeoJSON();
var features_RTRWKOTAPALOPO2022_8 = format_RTRWKOTAPALOPO2022_8.readFeatures(json_RTRWKOTAPALOPO2022_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTRWKOTAPALOPO2022_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTRWKOTAPALOPO2022_8.addFeatures(features_RTRWKOTAPALOPO2022_8);
var lyr_RTRWKOTAPALOPO2022_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTRWKOTAPALOPO2022_8, 
                style: style_RTRWKOTAPALOPO2022_8,
                popuplayertitle: "RTRW KOTA PALOPO 2022",
                interactive: true,
    title: 'RTRW KOTA PALOPO 2022<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_0.png" /> Badan Air<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_1.png" /> Badan Jalan<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_2.png" /> Kawasan Cagar Budaya<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_3.png" /> Kawasan Campuran<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_4.png" /> Kawasan Ekosistem Mangrove<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_5.png" /> Kawasan Fasilitas Umum dan Fasilitas Sosial<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_6.png" /> Kawasan Hortikultura<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_7.png" /> Kawasan Hutan Lindung<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_8.png" /> Kawasan Hutan Produksi Terbatas<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_9.png" /> Kawasan Infrastruktur Perkotaan<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_10.png" /> Kawasan Pariwisata<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_11.png" /> Kawasan Pembangkitan Tenaga Listrik<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_12.png" /> Kawasan Perdagangan dan Jasa<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_13.png" /> Kawasan Perikanan Budi Daya<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_14.png" /> Kawasan Perikanan Tangkap<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_15.png" /> Kawasan Perkantoran<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_16.png" /> Kawasan Perkebunan<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_17.png" /> Kawasan Perlindungan Setempat<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_18.png" /> Kawasan Pertahanan dan Keamanan<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_19.png" /> Kawasan Perumahan<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_20.png" /> Kawasan Peruntukan Industri<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_21.png" /> Kawasan Peruntukan Pertambangan Batuan<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_22.png" /> Kawasan Peternakan<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_23.png" /> Kawasan Ruang Terbuka Non Hijau<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_24.png" /> Kawasan Tanaman Pangan<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_25.png" /> Kawasan Transportasi<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_26.png" /> Pemakaman<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_27.png" /> Rimba Kota<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_28.png" /> Taman Kota<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_29.png" /> Taman Pulau Kecil<br />\
    <img src="styles/legend/RTRWKOTAPALOPO2022_8_30.png" /> Taman Wisata Alam<br />'
        });
var format_JalanKeretaApi_9 = new ol.format.GeoJSON();
var features_JalanKeretaApi_9 = format_JalanKeretaApi_9.readFeatures(json_JalanKeretaApi_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKeretaApi_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKeretaApi_9.addFeatures(features_JalanKeretaApi_9);
var lyr_JalanKeretaApi_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKeretaApi_9, 
                style: style_JalanKeretaApi_9,
                popuplayertitle: "Jalan Kereta Api",
                interactive: true,
    title: 'Jalan Kereta Api<br />\
    <img src="styles/legend/JalanKeretaApi_9_0.png" /> Jaringan Jalur Kereta Api<br />\
    <img src="styles/legend/JalanKeretaApi_9_1.png" /> Jaringan Jalur Kereta Api Antarkota<br />\
    <img src="styles/legend/JalanKeretaApi_9_2.png" /> Jaringan Jalur Kereta Api Perkotaan<br />'
        });
var format_JalanTol_10 = new ol.format.GeoJSON();
var features_JalanTol_10 = format_JalanTol_10.readFeatures(json_JalanTol_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanTol_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanTol_10.addFeatures(features_JalanTol_10);
var lyr_JalanTol_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanTol_10, 
                style: style_JalanTol_10,
                popuplayertitle: "Jalan Tol",
                interactive: true,
    title: 'Jalan Tol<br />\
    <img src="styles/legend/JalanTol_10_0.png" /> Jalan Tol<br />'
        });
var format_JalanLingkungan_11 = new ol.format.GeoJSON();
var features_JalanLingkungan_11 = format_JalanLingkungan_11.readFeatures(json_JalanLingkungan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLingkungan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanLingkungan_11.addFeatures(features_JalanLingkungan_11);
var lyr_JalanLingkungan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanLingkungan_11, 
                style: style_JalanLingkungan_11,
                popuplayertitle: "Jalan Lingkungan",
                interactive: true,
    title: 'Jalan Lingkungan<br />\
    <img src="styles/legend/JalanLingkungan_11_0.png" /> Jalan Lingkungan Primer<br />\
    <img src="styles/legend/JalanLingkungan_11_1.png" /> Jalan Lingkungan Sekunder<br />'
        });
var format_Jalanlokal_12 = new ol.format.GeoJSON();
var features_Jalanlokal_12 = format_Jalanlokal_12.readFeatures(json_Jalanlokal_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalanlokal_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalanlokal_12.addFeatures(features_Jalanlokal_12);
var lyr_Jalanlokal_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalanlokal_12, 
                style: style_Jalanlokal_12,
                popuplayertitle: "Jalan lokal",
                interactive: true,
    title: 'Jalan lokal<br />\
    <img src="styles/legend/Jalanlokal_12_0.png" /> Jalan Lokal Primer<br />\
    <img src="styles/legend/Jalanlokal_12_1.png" /> Jalan Lokal Sekunder<br />'
        });
var format_JalanKolektor_13 = new ol.format.GeoJSON();
var features_JalanKolektor_13 = format_JalanKolektor_13.readFeatures(json_JalanKolektor_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKolektor_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKolektor_13.addFeatures(features_JalanKolektor_13);
var lyr_JalanKolektor_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKolektor_13, 
                style: style_JalanKolektor_13,
                popuplayertitle: "Jalan Kolektor",
                interactive: true,
    title: 'Jalan Kolektor<br />\
    <img src="styles/legend/JalanKolektor_13_0.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JalanKolektor_13_1.png" /> Jalan Kolektor Primer<br />\
    <img src="styles/legend/JalanKolektor_13_2.png" /> Jalan Kolektor Sekunder<br />'
        });
var format_JalanArteri_14 = new ol.format.GeoJSON();
var features_JalanArteri_14 = format_JalanArteri_14.readFeatures(json_JalanArteri_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanArteri_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanArteri_14.addFeatures(features_JalanArteri_14);
var lyr_JalanArteri_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanArteri_14, 
                style: style_JalanArteri_14,
                popuplayertitle: "Jalan Arteri",
                interactive: true,
    title: 'Jalan Arteri<br />\
    <img src="styles/legend/JalanArteri_14_0.png" /> Jalan Arteri Primer<br />\
    <img src="styles/legend/JalanArteri_14_1.png" /> Jalan Arteri Sekunder<br />'
        });
var format_PUSATPERMUKIMANRTRWLUWU2026DRAFTREV_15 = new ol.format.GeoJSON();
var features_PUSATPERMUKIMANRTRWLUWU2026DRAFTREV_15 = format_PUSATPERMUKIMANRTRWLUWU2026DRAFTREV_15.readFeatures(json_PUSATPERMUKIMANRTRWLUWU2026DRAFTREV_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUSATPERMUKIMANRTRWLUWU2026DRAFTREV_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUSATPERMUKIMANRTRWLUWU2026DRAFTREV_15.addFeatures(features_PUSATPERMUKIMANRTRWLUWU2026DRAFTREV_15);
var lyr_PUSATPERMUKIMANRTRWLUWU2026DRAFTREV_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUSATPERMUKIMANRTRWLUWU2026DRAFTREV_15, 
                style: style_PUSATPERMUKIMANRTRWLUWU2026DRAFTREV_15,
                popuplayertitle: "PUSAT PERMUKIMAN RTRW LUWU 2026 (DRAFT REV)",
                interactive: true,
    title: 'PUSAT PERMUKIMAN RTRW LUWU 2026 (DRAFT REV)<br />\
    <img src="styles/legend/PUSATPERMUKIMANRTRWLUWU2026DRAFTREV_15_0.png" /> Pusat Kegiatan Lokal (PKL)<br />\
    <img src="styles/legend/PUSATPERMUKIMANRTRWLUWU2026DRAFTREV_15_1.png" /> Pusat Kegiatan Lokal (PKL1 )<br />\
    <img src="styles/legend/PUSATPERMUKIMANRTRWLUWU2026DRAFTREV_15_2.png" /> Pusat Pelayanan Kawasan<br />\
    <img src="styles/legend/PUSATPERMUKIMANRTRWLUWU2026DRAFTREV_15_3.png" /> Pusat Pelayanan Lingkungan<br />'
        });
var format_PUSATPERMUKIMANRTRWKOTAPALOPO2022_16 = new ol.format.GeoJSON();
var features_PUSATPERMUKIMANRTRWKOTAPALOPO2022_16 = format_PUSATPERMUKIMANRTRWKOTAPALOPO2022_16.readFeatures(json_PUSATPERMUKIMANRTRWKOTAPALOPO2022_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUSATPERMUKIMANRTRWKOTAPALOPO2022_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUSATPERMUKIMANRTRWKOTAPALOPO2022_16.addFeatures(features_PUSATPERMUKIMANRTRWKOTAPALOPO2022_16);
var lyr_PUSATPERMUKIMANRTRWKOTAPALOPO2022_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUSATPERMUKIMANRTRWKOTAPALOPO2022_16, 
                style: style_PUSATPERMUKIMANRTRWKOTAPALOPO2022_16,
                popuplayertitle: "PUSAT PERMUKIMAN RTRW KOTA PALOPO 2022",
                interactive: true,
    title: 'PUSAT PERMUKIMAN RTRW KOTA PALOPO 2022<br />\
    <img src="styles/legend/PUSATPERMUKIMANRTRWKOTAPALOPO2022_16_0.png" /> Pusat Pelayanan Kota<br />\
    <img src="styles/legend/PUSATPERMUKIMANRTRWKOTAPALOPO2022_16_1.png" /> Pusat Pelayanan Lingkungan<br />\
    <img src="styles/legend/PUSATPERMUKIMANRTRWKOTAPALOPO2022_16_2.png" /> Sub Pusat Pelayanan Kota<br />'
        });
var format_BatasDesaBIGedisiJuni2026_17 = new ol.format.GeoJSON();
var features_BatasDesaBIGedisiJuni2026_17 = format_BatasDesaBIGedisiJuni2026_17.readFeatures(json_BatasDesaBIGedisiJuni2026_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesaBIGedisiJuni2026_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesaBIGedisiJuni2026_17.addFeatures(features_BatasDesaBIGedisiJuni2026_17);
var lyr_BatasDesaBIGedisiJuni2026_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesaBIGedisiJuni2026_17, 
                style: style_BatasDesaBIGedisiJuni2026_17,
                popuplayertitle: "Batas Desa (BIG edisi Juni 2026)",
                interactive: true,
                title: '<img src="styles/legend/BatasDesaBIGedisiJuni2026_17.png" /> Batas Desa (BIG edisi Juni 2026)'
            });
var format_BatasKecamatanBIGedisiJuni2026_18 = new ol.format.GeoJSON();
var features_BatasKecamatanBIGedisiJuni2026_18 = format_BatasKecamatanBIGedisiJuni2026_18.readFeatures(json_BatasKecamatanBIGedisiJuni2026_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatanBIGedisiJuni2026_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatanBIGedisiJuni2026_18.addFeatures(features_BatasKecamatanBIGedisiJuni2026_18);
var lyr_BatasKecamatanBIGedisiJuni2026_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatanBIGedisiJuni2026_18, 
                style: style_BatasKecamatanBIGedisiJuni2026_18,
                popuplayertitle: "Batas Kecamatan (BIG edisi Juni 2026)",
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatanBIGedisiJuni2026_18.png" /> Batas Kecamatan (BIG edisi Juni 2026)'
            });
var format_BatasKabupatenBIGedisiJuni2026_19 = new ol.format.GeoJSON();
var features_BatasKabupatenBIGedisiJuni2026_19 = format_BatasKabupatenBIGedisiJuni2026_19.readFeatures(json_BatasKabupatenBIGedisiJuni2026_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupatenBIGedisiJuni2026_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupatenBIGedisiJuni2026_19.addFeatures(features_BatasKabupatenBIGedisiJuni2026_19);
var lyr_BatasKabupatenBIGedisiJuni2026_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKabupatenBIGedisiJuni2026_19, 
                style: style_BatasKabupatenBIGedisiJuni2026_19,
                popuplayertitle: "Batas Kabupaten (BIG edisi Juni 2026)",
                interactive: true,
                title: '<img src="styles/legend/BatasKabupatenBIGedisiJuni2026_19.png" /> Batas Kabupaten (BIG edisi Juni 2026)'
            });
var format_GarisBatasAdministrasiDesaBIGEdisiJuni2026_20 = new ol.format.GeoJSON();
var features_GarisBatasAdministrasiDesaBIGEdisiJuni2026_20 = format_GarisBatasAdministrasiDesaBIGEdisiJuni2026_20.readFeatures(json_GarisBatasAdministrasiDesaBIGEdisiJuni2026_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GarisBatasAdministrasiDesaBIGEdisiJuni2026_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GarisBatasAdministrasiDesaBIGEdisiJuni2026_20.addFeatures(features_GarisBatasAdministrasiDesaBIGEdisiJuni2026_20);
var lyr_GarisBatasAdministrasiDesaBIGEdisiJuni2026_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GarisBatasAdministrasiDesaBIGEdisiJuni2026_20, 
                style: style_GarisBatasAdministrasiDesaBIGEdisiJuni2026_20,
                popuplayertitle: "Garis Batas Administrasi Desa (BIG Edisi Juni 2026)",
                interactive: true,
    title: 'Garis Batas Administrasi Desa (BIG Edisi Juni 2026)<br />\
    <img src="styles/legend/GarisBatasAdministrasiDesaBIGEdisiJuni2026_20_0.png" /> Batas Indikatif Penegasan Batas Daerah 2023<br />\
    <img src="styles/legend/GarisBatasAdministrasiDesaBIGEdisiJuni2026_20_1.png" /> Batas Indikatif/Verifikasi Teknis 2021<br />\
    <img src="styles/legend/GarisBatasAdministrasiDesaBIGEdisiJuni2026_20_2.png" /> Hasil Kesepakatan/Verifikasi Teknis 2021<br />\
    <img src="styles/legend/GarisBatasAdministrasiDesaBIGEdisiJuni2026_20_3.png" /> No Data<br />'
        });
var format_BatasKabupatendanKecamatanRTRWKotaPalopo2022_21 = new ol.format.GeoJSON();
var features_BatasKabupatendanKecamatanRTRWKotaPalopo2022_21 = format_BatasKabupatendanKecamatanRTRWKotaPalopo2022_21.readFeatures(json_BatasKabupatendanKecamatanRTRWKotaPalopo2022_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupatendanKecamatanRTRWKotaPalopo2022_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupatendanKecamatanRTRWKotaPalopo2022_21.addFeatures(features_BatasKabupatendanKecamatanRTRWKotaPalopo2022_21);
var lyr_BatasKabupatendanKecamatanRTRWKotaPalopo2022_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKabupatendanKecamatanRTRWKotaPalopo2022_21, 
                style: style_BatasKabupatendanKecamatanRTRWKotaPalopo2022_21,
                popuplayertitle: "Batas Kabupaten dan Kecamatan (RTRW Kota Palopo 2022)",
                interactive: true,
                title: '<img src="styles/legend/BatasKabupatendanKecamatanRTRWKotaPalopo2022_21.png" /> Batas Kabupaten dan Kecamatan (RTRW Kota Palopo 2022)'
            });
var format_WPBuaindikatif_22 = new ol.format.GeoJSON();
var features_WPBuaindikatif_22 = format_WPBuaindikatif_22.readFeatures(json_WPBuaindikatif_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WPBuaindikatif_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WPBuaindikatif_22.addFeatures(features_WPBuaindikatif_22);
var lyr_WPBuaindikatif_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WPBuaindikatif_22, 
                style: style_WPBuaindikatif_22,
                popuplayertitle: "WP Bua indikatif",
                interactive: true,
                title: '<img src="styles/legend/WPBuaindikatif_22.png" /> WP Bua indikatif'
            });
var group_BatasWPKecamatanBuaKabupatenLuwu = new ol.layer.Group({
                                layers: [lyr_WPBuaindikatif_22,],
                                fold: "close",
                                title: "Batas WP Kecamatan Bua Kabupaten Luwu"});
var group_IsuWPTelluwanuabatasBIGvsBatasRTRW = new ol.layer.Group({
                                layers: [lyr_GarisBatasAdministrasiDesaBIGEdisiJuni2026_20,lyr_BatasKabupatendanKecamatanRTRWKotaPalopo2022_21,],
                                fold: "open",
                                title: "Isu WP Telluwanua (batas BIG vs Batas RTRW)"});
var group_BatasAdmin = new ol.layer.Group({
                                layers: [lyr_BatasDesaBIGedisiJuni2026_17,lyr_BatasKecamatanBIGedisiJuni2026_18,lyr_BatasKabupatenBIGedisiJuni2026_19,],
                                fold: "close",
                                title: "Batas Admin"});
var group_SISTEMPUSATPERMUKIMAN = new ol.layer.Group({
                                layers: [lyr_PUSATPERMUKIMANRTRWLUWU2026DRAFTREV_15,lyr_PUSATPERMUKIMANRTRWKOTAPALOPO2022_16,],
                                fold: "close",
                                title: "SISTEM PUSAT PERMUKIMAN"});
var group_SISTEMJARINGANJALANRTRW2KAB = new ol.layer.Group({
                                layers: [lyr_JalanKeretaApi_9,lyr_JalanTol_10,lyr_JalanLingkungan_11,lyr_Jalanlokal_12,lyr_JalanKolektor_13,lyr_JalanArteri_14,],
                                fold: "close",
                                title: "SISTEM JARINGAN JALAN (RTRW 2 KAB)"});
var group_POLARUANGRTRWKOTAPALOPO2022 = new ol.layer.Group({
                                layers: [lyr_RTRWKOTAPALOPO2022_8,],
                                fold: "close",
                                title: "POLA RUANG RTRW KOTA PALOPO 2022"});
var group_POLARUANGRTRWRTRW_LUWU_2026DRAFTREV = new ol.layer.Group({
                                layers: [lyr_SISISELATAN_6,lyr_SISIUTARA_7,],
                                fold: "close",
                                title: "POLA RUANG RTRW RTRW_LUWU_2026 (DRAFT REV)"});
var group_TEMATIK = new ol.layer.Group({
                                layers: [lyr_LBS2024_1,lyr_LSD_2,lyr_LP2B_KOTAPALOPO_3,lyr_FungsiKawasanHutan_4,],
                                fold: "close",
                                title: "TEMATIK"});

lyr_googleimagery_0.setVisible(true);lyr_LBS2024_1.setVisible(false);lyr_LSD_2.setVisible(false);lyr_LP2B_KOTAPALOPO_3.setVisible(false);lyr_FungsiKawasanHutan_4.setVisible(false);lyr_RDTRKECWARUUTARADANBARA_5.setVisible(false);lyr_SISISELATAN_6.setVisible(false);lyr_SISIUTARA_7.setVisible(false);lyr_RTRWKOTAPALOPO2022_8.setVisible(false);lyr_JalanKeretaApi_9.setVisible(false);lyr_JalanTol_10.setVisible(false);lyr_JalanLingkungan_11.setVisible(false);lyr_Jalanlokal_12.setVisible(false);lyr_JalanKolektor_13.setVisible(false);lyr_JalanArteri_14.setVisible(false);lyr_PUSATPERMUKIMANRTRWLUWU2026DRAFTREV_15.setVisible(false);lyr_PUSATPERMUKIMANRTRWKOTAPALOPO2022_16.setVisible(false);lyr_BatasDesaBIGedisiJuni2026_17.setVisible(false);lyr_BatasKecamatanBIGedisiJuni2026_18.setVisible(false);lyr_BatasKabupatenBIGedisiJuni2026_19.setVisible(false);lyr_GarisBatasAdministrasiDesaBIGEdisiJuni2026_20.setVisible(true);lyr_BatasKabupatendanKecamatanRTRWKotaPalopo2022_21.setVisible(true);lyr_WPBuaindikatif_22.setVisible(false);
var layersList = [lyr_googleimagery_0,group_TEMATIK,lyr_RDTRKECWARUUTARADANBARA_5,group_POLARUANGRTRWRTRW_LUWU_2026DRAFTREV,group_POLARUANGRTRWKOTAPALOPO2022,group_SISTEMJARINGANJALANRTRW2KAB,group_SISTEMPUSATPERMUKIMAN,group_BatasAdmin,group_IsuWPTelluwanuabatasBIGvsBatasRTRW,group_BatasWPKecamatanBuaKabupatenLuwu];
lyr_LBS2024_1.set('fieldAliases', {'WADMPR': 'WADMPR', 'KDPPUM': 'KDPPUM', 'WADMKK': 'WADMKK', 'KDPKAB': 'KDPKAB', 'QNAME23': 'QNAME23', 'JSWH': 'JSWH', 'CTKSWH': 'CTKSWH', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'LBS': 'LBS', });
lyr_LSD_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OBJECTID_1': 'OBJECTID_1', 'NAMOBJ': 'NAMOBJ', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'LSD': 'LSD', 'FGSFRF': 'FGSFRF', 'FUNGSIKWS': 'FUNGSIKWS', 'LUASHA': 'LUASHA', 'CTKSWH': 'CTKSWH', 'METADATA': 'METADATA', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_LP2B_KOTAPALOPO_3.set('fieldAliases', {'USULANKA_2': 'USULANKA_2', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'QNAME23': 'QNAME23', 'JSWH': 'JSWH', 'CTKSWH': 'CTKSWH', 'FP_PPTR': 'FP_PPTR', 'FP_KKPR': 'FP_KKPR', 'FP_SPPR': 'FP_SPPR', 'STATUS': 'STATUS', 'LP2B': 'LP2B', 'FP_PEMDA': 'FP_PEMDA', 'JNS_KKPR': 'JNS_KKPR', 'JNS_KKPR_1': 'JNS_KKPR_1', 'USULANFIX': 'USULANFIX', 'LUASCEA': 'LUASCEA', });
lyr_FungsiKawasanHutan_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'F_KW_HUTAN': 'F_KW_HUTAN', });
lyr_SISISELATAN_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'KODKWS': 'Kode Kawasan', 'JNSRPR': 'Jenis Rencana Pola Ruang', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'WADMKC': 'Wilayah Administrasi Kecamatan', 'KKOP_1': 'Kawasan Keselamatan Operasi Penerbangan', 'KP2B_2': 'Kawasan Pertanian Pangan Berkelanjutan', 'KRB_03': 'Kawasan Rawan Bencana', 'CAGBUD': 'Kawasan Cagar Budaya', 'RESAIR': 'Kawasan Resapan Air', 'KSMPDN': 'Kawasan Sempadan', 'HANKAM': 'Kawasan Pertahanan dan Keamanan', 'KKARST': 'Kawasan Karst', 'PTBGMB': 'Kawasan Pertambangan Mineral dan Batubara', 'MGRSAT': 'Kawasan Migrasi Satwa', 'RDBUMI': 'Ruang Dalam Bumi', 'REMARK': 'Catatan', 'LUASHA': 'Luas Area', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SISIUTARA_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'KODKWS': 'Kode Kawasan', 'JNSRPR': 'Jenis Rencana Pola Ruang', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'WADMKC': 'Wilayah Administrasi Kecamatan', 'KKOP_1': 'Kawasan Keselamatan Operasi Penerbangan', 'KP2B_2': 'Kawasan Pertanian Pangan Berkelanjutan', 'KRB_03': 'Kawasan Rawan Bencana', 'CAGBUD': 'Kawasan Cagar Budaya', 'RESAIR': 'Kawasan Resapan Air', 'KSMPDN': 'Kawasan Sempadan', 'HANKAM': 'Kawasan Pertahanan dan Keamanan', 'KKARST': 'Kawasan Karst', 'PTBGMB': 'Kawasan Pertambangan Mineral dan Batubara', 'MGRSAT': 'Kawasan Migrasi Satwa', 'RDBUMI': 'Ruang Dalam Bumi', 'REMARK': 'Catatan', 'LUASHA': 'Luas Area', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RTRWKOTAPALOPO2022_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'JNSRPR': 'Jenis Rencana Pola Ruang', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'WADMKC': 'Wilayah Administrasi Kecamatan', 'KKOP_1': 'Kawasan Keselamatan Operasi Penerbangan', 'KP2B_2': 'Kawasan Pertanian Pangan Berkelanjutan', 'KRB_03': 'Kawasan Rawan Bencana', 'CAGBUD': 'Kawasan Cagar Budaya', 'RESAIR': 'Kawasan Resapan Air', 'KSMPDN': 'Kawasan Sempadan', 'HANKAM': 'Kawasan Pertahanan dan Keamanan', 'KKARST': 'Kawasan Karst', 'PTBGMB': 'Kawasan Pertambangan Mineral dan Batubara', 'MGRSAT': 'Kawasan Migrasi Satwa', 'RDBUMI': 'Ruang Dalam Bumi', 'ARECAT': 'Cekungan Air Tanah', 'KTSLAN': 'Ketentuan Khusus Lainnya', 'PP': 'Dokumen Peta Peraturan', 'BA': 'Dokumen Berita Acara', 'CT': 'Dokumen Verifikasi', 'BT': 'Dokumen Batang Tubuh', 'NOTHPR': 'Nomor dan Tahun Peraturan', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'RTRW': 'RTRW', });
lyr_JalanKeretaApi_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'NOTHPR': 'NOTHPR', });
lyr_JalanTol_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'NOTHPR': 'NOTHPR', });
lyr_JalanLingkungan_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'NOTHPR': 'NOTHPR', });
lyr_Jalanlokal_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'NOTHPR': 'NOTHPR', });
lyr_JalanKolektor_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'NOTHPR': 'NOTHPR', });
lyr_JalanArteri_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'NOTHPR': 'NOTHPR', });
lyr_PUSATPERMUKIMANRTRWLUWU2026DRAFTREV_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_PUSATPERMUKIMANRTRWKOTAPALOPO2022_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'PP': 'Dokumen Peta Peraturan', 'BA': 'Dokumen Berita Acara', 'CT': 'Dokumen Verifikasi', 'BT': 'Dokumen Batang Tubuh', 'NOTHPR': 'Nomor dan Tahun Peraturan', });
lyr_BatasDesaBIGedisiJuni2026_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'Status': 'Status', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BatasKecamatanBIGedisiJuni2026_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BatasKabupatenBIGedisiJuni2026_19.set('fieldAliases', {'WADMKK': 'WADMKK', });
lyr_GarisBatasAdministrasiDesaBIGEdisiJuni2026_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'KARKTR': 'KARKTR', 'KLBADM': 'KLBADM', 'PJGBTS': 'PJGBTS', 'STSBTS': 'STSBTS', 'TIPLOK': 'TIPLOK', 'TIPTBT': 'TIPTBT', 'UUPP': 'UUPP', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'SHAPE_Leng': 'SHAPE_Leng', 'STATUS': 'STATUS', });
lyr_BatasKabupatendanKecamatanRTRWKotaPalopo2022_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_WPBuaindikatif_22.set('fieldAliases', {'Id': 'Id', 'Luas': 'Luas', 'RDTR': 'RDTR', 'Luas_CEA': 'Luas_CEA', });
lyr_LBS2024_1.set('fieldImages', {'WADMPR': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMKK': 'TextEdit', 'KDPKAB': 'TextEdit', 'QNAME23': 'TextEdit', 'JSWH': 'TextEdit', 'CTKSWH': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'LBS': '', });
lyr_LSD_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'NAMOBJ': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'LSD': 'TextEdit', 'FGSFRF': 'TextEdit', 'FUNGSIKWS': 'TextEdit', 'LUASHA': 'TextEdit', 'CTKSWH': 'TextEdit', 'METADATA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LP2B_KOTAPALOPO_3.set('fieldImages', {'USULANKA_2': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'QNAME23': 'TextEdit', 'JSWH': 'TextEdit', 'CTKSWH': 'TextEdit', 'FP_PPTR': 'TextEdit', 'FP_KKPR': 'TextEdit', 'FP_SPPR': 'TextEdit', 'STATUS': 'TextEdit', 'LP2B': 'TextEdit', 'FP_PEMDA': 'TextEdit', 'JNS_KKPR': 'TextEdit', 'JNS_KKPR_1': 'TextEdit', 'USULANFIX': 'TextEdit', 'LUASCEA': 'TextEdit', });
lyr_FungsiKawasanHutan_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'F_KW_HUTAN': 'TextEdit', });
lyr_SISISELATAN_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'ORDE03': 'ValueMap', 'ORDE04': 'ValueMap', 'KODKWS': 'ValueMap', 'JNSRPR': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'KKOP_1': 'ValueMap', 'KP2B_2': 'ValueMap', 'KRB_03': 'ValueMap', 'CAGBUD': 'ValueMap', 'RESAIR': 'ValueMap', 'KSMPDN': 'ValueMap', 'HANKAM': 'ValueMap', 'KKARST': 'ValueMap', 'PTBGMB': 'ValueMap', 'MGRSAT': 'ValueMap', 'RDBUMI': 'ValueMap', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SISIUTARA_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'ORDE03': 'ValueMap', 'ORDE04': 'ValueMap', 'KODKWS': 'ValueMap', 'JNSRPR': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'KKOP_1': 'ValueMap', 'KP2B_2': 'ValueMap', 'KRB_03': 'ValueMap', 'CAGBUD': 'ValueMap', 'RESAIR': 'ValueMap', 'KSMPDN': 'ValueMap', 'HANKAM': 'ValueMap', 'KKARST': 'ValueMap', 'PTBGMB': 'ValueMap', 'MGRSAT': 'ValueMap', 'RDBUMI': 'ValueMap', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_RTRWKOTAPALOPO2022_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'JNSRPR': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'KKOP_1': 'ValueMap', 'KP2B_2': 'ValueMap', 'KRB_03': 'ValueMap', 'CAGBUD': 'ValueMap', 'RESAIR': 'ValueMap', 'KSMPDN': 'ValueMap', 'HANKAM': 'ValueMap', 'KKARST': 'ValueMap', 'PTBGMB': 'ValueMap', 'MGRSAT': 'ValueMap', 'RDBUMI': 'ValueMap', 'ARECAT': 'TextEdit', 'KTSLAN': 'TextEdit', 'PP': 'TextEdit', 'BA': 'TextEdit', 'CT': 'TextEdit', 'BT': 'TextEdit', 'NOTHPR': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'RTRW': '', });
lyr_JalanKeretaApi_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'NOTHPR': 'TextEdit', });
lyr_JalanTol_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'NOTHPR': 'TextEdit', });
lyr_JalanLingkungan_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'NOTHPR': 'TextEdit', });
lyr_Jalanlokal_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'NOTHPR': 'TextEdit', });
lyr_JalanKolektor_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'NOTHPR': 'TextEdit', });
lyr_JalanArteri_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'NOTHPR': 'TextEdit', });
lyr_PUSATPERMUKIMANRTRWLUWU2026DRAFTREV_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'ORDE03': 'ValueMap', 'ORDE04': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_PUSATPERMUKIMANRTRWKOTAPALOPO2022_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'PP': 'TextEdit', 'BA': 'TextEdit', 'CT': 'TextEdit', 'BT': 'TextEdit', 'NOTHPR': 'TextEdit', });
lyr_BatasDesaBIGedisiJuni2026_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'Status': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_BatasKecamatanBIGedisiJuni2026_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': 'TextEdit', 'WADMKD': '', 'WADMKK': 'TextEdit', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_BatasKabupatenBIGedisiJuni2026_19.set('fieldImages', {'WADMKK': 'TextEdit', });
lyr_GarisBatasAdministrasiDesaBIGEdisiJuni2026_20.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ADMIN1': 'TextEdit', 'ADMIN2': 'TextEdit', 'KARKTR': 'TextEdit', 'KLBADM': 'TextEdit', 'PJGBTS': 'TextEdit', 'STSBTS': 'TextEdit', 'TIPLOK': 'TextEdit', 'TIPTBT': 'TextEdit', 'UUPP': 'TextEdit', 'WADKC1': 'TextEdit', 'WADKC2': 'TextEdit', 'WAKBK1': 'TextEdit', 'WAKBK2': 'TextEdit', 'WAKLD1': 'TextEdit', 'WAKLD2': 'TextEdit', 'WAPRO1': 'TextEdit', 'WAPRO2': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_BatasKabupatendanKecamatanRTRWKotaPalopo2022_21.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_WPBuaindikatif_22.set('fieldImages', {'Id': 'Range', 'Luas': 'TextEdit', 'RDTR': 'TextEdit', 'Luas_CEA': 'TextEdit', });
lyr_LBS2024_1.set('fieldLabels', {'WADMPR': 'inline label - always visible', 'KDPPUM': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'KDPKAB': 'inline label - always visible', 'QNAME23': 'inline label - always visible', 'JSWH': 'inline label - always visible', 'CTKSWH': 'inline label - visible with data', 'LUASHA': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'LBS': 'no label', });
lyr_LSD_2.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'OBJECTID_1': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'LSD': 'inline label - always visible', 'FGSFRF': 'inline label - always visible', 'FUNGSIKWS': 'inline label - always visible', 'LUASHA': 'inline label - always visible', 'CTKSWH': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_LP2B_KOTAPALOPO_3.set('fieldLabels', {'USULANKA_2': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'QNAME23': 'inline label - always visible', 'JSWH': 'inline label - always visible', 'CTKSWH': 'inline label - always visible', 'FP_PPTR': 'inline label - always visible', 'FP_KKPR': 'inline label - always visible', 'FP_SPPR': 'inline label - always visible', 'STATUS': 'inline label - always visible', 'LP2B': 'inline label - always visible', 'FP_PEMDA': 'inline label - always visible', 'JNS_KKPR': 'inline label - always visible', 'JNS_KKPR_1': 'inline label - always visible', 'USULANFIX': 'inline label - always visible', 'LUASCEA': 'inline label - always visible', });
lyr_FungsiKawasanHutan_4.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'F_KW_HUTAN': 'inline label - always visible', });
lyr_SISISELATAN_6.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'ORDE03': 'inline label - always visible', 'ORDE04': 'inline label - always visible', 'KODKWS': 'inline label - always visible', 'JNSRPR': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'KKOP_1': 'inline label - always visible', 'KP2B_2': 'inline label - always visible', 'KRB_03': 'inline label - always visible', 'CAGBUD': 'inline label - always visible', 'RESAIR': 'inline label - always visible', 'KSMPDN': 'inline label - always visible', 'HANKAM': 'inline label - always visible', 'KKARST': 'inline label - always visible', 'PTBGMB': 'inline label - always visible', 'MGRSAT': 'inline label - always visible', 'RDBUMI': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'LUASHA': 'inline label - always visible', 'SHAPE_Length': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_SISIUTARA_7.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'ORDE03': 'inline label - always visible', 'ORDE04': 'inline label - always visible', 'KODKWS': 'inline label - always visible', 'JNSRPR': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'KKOP_1': 'inline label - always visible', 'KP2B_2': 'inline label - always visible', 'KRB_03': 'inline label - always visible', 'CAGBUD': 'inline label - always visible', 'RESAIR': 'inline label - always visible', 'KSMPDN': 'inline label - always visible', 'HANKAM': 'inline label - always visible', 'KKARST': 'inline label - always visible', 'PTBGMB': 'inline label - always visible', 'MGRSAT': 'inline label - always visible', 'RDBUMI': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'LUASHA': 'inline label - always visible', 'SHAPE_Length': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_RTRWKOTAPALOPO2022_8.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'JNSRPR': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'KKOP_1': 'inline label - always visible', 'KP2B_2': 'inline label - always visible', 'KRB_03': 'inline label - always visible', 'CAGBUD': 'inline label - always visible', 'RESAIR': 'inline label - always visible', 'KSMPDN': 'inline label - always visible', 'HANKAM': 'inline label - always visible', 'KKARST': 'inline label - always visible', 'PTBGMB': 'inline label - always visible', 'MGRSAT': 'inline label - always visible', 'RDBUMI': 'inline label - always visible', 'ARECAT': 'inline label - always visible', 'KTSLAN': 'inline label - always visible', 'PP': 'inline label - always visible', 'BA': 'inline label - always visible', 'CT': 'inline label - always visible', 'BT': 'inline label - always visible', 'NOTHPR': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'RTRW': 'no label', });
lyr_JalanKeretaApi_9.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'NOTHPR': 'inline label - always visible', });
lyr_JalanTol_10.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'NOTHPR': 'inline label - always visible', });
lyr_JalanLingkungan_11.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'NOTHPR': 'inline label - always visible', });
lyr_Jalanlokal_12.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'NOTHPR': 'inline label - always visible', });
lyr_JalanKolektor_13.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'NOTHPR': 'inline label - visible with data', });
lyr_JalanArteri_14.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'JNSRSR': 'header label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'NOTHPR': 'inline label - always visible', });
lyr_PUSATPERMUKIMANRTRWLUWU2026DRAFTREV_15.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'ORDE03': 'inline label - always visible', 'ORDE04': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_PUSATPERMUKIMANRTRWKOTAPALOPO2022_16.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'PP': 'inline label - always visible', 'BA': 'inline label - always visible', 'CT': 'inline label - always visible', 'BT': 'inline label - always visible', 'NOTHPR': 'inline label - always visible', });
lyr_BatasDesaBIGedisiJuni2026_17.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'KDBBPS': 'inline label - always visible', 'KDCBPS': 'inline label - always visible', 'KDCPUM': 'inline label - always visible', 'KDEBPS': 'inline label - always visible', 'KDEPUM': 'inline label - always visible', 'KDPBPS': 'inline label - always visible', 'KDPKAB': 'inline label - always visible', 'KDPPUM': 'inline label - always visible', 'LUASWH': 'inline label - always visible', 'TIPADM': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WIADKC': 'inline label - always visible', 'WIADKK': 'inline label - always visible', 'WIADPR': 'inline label - always visible', 'WIADKD': 'inline label - always visible', 'UUPP': 'inline label - always visible', 'Status': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_BatasKecamatanBIGedisiJuni2026_18.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'KDBBPS': 'inline label - always visible', 'KDCBPS': 'inline label - always visible', 'KDCPUM': 'inline label - always visible', 'KDEBPS': 'inline label - always visible', 'KDEPUM': 'inline label - always visible', 'KDPBPS': 'inline label - always visible', 'KDPKAB': 'inline label - always visible', 'KDPPUM': 'inline label - always visible', 'LUASWH': 'inline label - always visible', 'TIPADM': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WIADKC': 'inline label - always visible', 'WIADKK': 'inline label - always visible', 'WIADPR': 'inline label - always visible', 'WIADKD': 'inline label - always visible', 'UUPP': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_BatasKabupatenBIGedisiJuni2026_19.set('fieldLabels', {'WADMKK': 'inline label - always visible', });
lyr_GarisBatasAdministrasiDesaBIGEdisiJuni2026_20.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'ADMIN1': 'inline label - always visible', 'ADMIN2': 'inline label - always visible', 'KARKTR': 'inline label - always visible', 'KLBADM': 'inline label - always visible', 'PJGBTS': 'inline label - always visible', 'STSBTS': 'inline label - always visible', 'TIPLOK': 'inline label - always visible', 'TIPTBT': 'inline label - always visible', 'UUPP': 'inline label - always visible', 'WADKC1': 'inline label - always visible', 'WADKC2': 'inline label - always visible', 'WAKBK1': 'inline label - always visible', 'WAKBK2': 'inline label - always visible', 'WAKLD1': 'inline label - always visible', 'WAKLD2': 'inline label - always visible', 'WAPRO1': 'inline label - always visible', 'WAPRO2': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'STATUS': 'inline label - always visible', });
lyr_BatasKabupatendanKecamatanRTRWKotaPalopo2022_21.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_WPBuaindikatif_22.set('fieldLabels', {'Id': 'inline label - always visible', 'Luas': 'inline label - always visible', 'RDTR': 'inline label - always visible', 'Luas_CEA': 'inline label - always visible', });
lyr_WPBuaindikatif_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});