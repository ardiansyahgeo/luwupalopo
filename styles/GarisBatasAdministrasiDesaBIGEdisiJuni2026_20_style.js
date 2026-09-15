var size = 0;
var placement = 'point';
function categories_GarisBatasAdministrasiDesaBIGEdisiJuni2026_20(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Batas Indikatif Penegasan Batas Daerah 2023':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(230,62,82,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Batas Indikatif/Verifikasi Teknis 2021':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(91,217,127,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hasil Kesepakatan/Verifikasi Teknis 2021':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(200,132,231,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'No Data':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(28,131,227,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.6599999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_GarisBatasAdministrasiDesaBIGEdisiJuni2026_20 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("STATUS");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_GarisBatasAdministrasiDesaBIGEdisiJuni2026_20(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
