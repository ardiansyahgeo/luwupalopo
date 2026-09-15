var size = 0;
var placement = 'point';
function categories_JalanKolektor_13(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Jalan Kolektor':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,140,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.56}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Jalan Kolektor Primer':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,140,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Jalan Kolektor Sekunder':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,200,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.128}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_JalanKolektor_13 = function(feature, resolution){
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
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_JalanKolektor_13(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
