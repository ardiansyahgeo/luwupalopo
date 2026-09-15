var size = 0;
var placement = 'point';
function categories_SISISELATAN_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Badan Air':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(151,219,242,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Ekosistem Mangrove':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(45,150,110,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Hortikultura':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,255,75,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Hutan Lindung':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(50,95,40,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Hutan Produksi Terbatas':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(75,155,55,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Hutan Produksi Tetap':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(105,180,55,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Pariwisata':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,165,255,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Pembangkitan Tenaga Listrik':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,255,205,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Perikanan Budi Daya':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(130,185,210,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Perikanan Tangkap':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(100,155,210,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Perkebunan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(175,175,55,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Perkebunan Rakyat':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(155,220,155,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Perlindungan Setempat':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(5,215,215,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Permukiman Perdesaan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(235,155,60,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Permukiman Perkotaan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(245,155,30,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Pertahanan dan Keamanan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(155,0,255,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Peruntukan Industri':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(105,0,0,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Tanaman Pangan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(200,245,70,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kawasan Transportasi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,55,0,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_SISISELATAN_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NAMOBJ");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_SISISELATAN_6(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
