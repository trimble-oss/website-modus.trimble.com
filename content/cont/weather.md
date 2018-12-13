---
title: Weather
weight: 10
---

### WeatherRadar Layer

The WeatherRadar layer allows you to display weather data overlayed on the current map. Using the `display` parameter, you can choose to display either "radar" or "satellite" weather data.

### Radar

Setting the display parameter to "radar" will allow you to display radar weather data on your map.

<div class="codeSampleBlock">
                <div>
                    <div class="scrollBlocker"></div>
                    <iframe class="mapFrame" src="Blank"></iframe>
                </div>
                <button class="codeUpdateButton btn">Update Map</button>
                <button class="codeResetButton btn btn-link">Reset</button>
                    <textarea class="codeTextArea">
var map = new ALKMaps.Map("map");
var layer = new ALKMaps.Layer.BaseMap( "ALK Maps", {style:ALKMaps.STYLE.LIGHTNESS}, {displayInLayerSwitcher: false});
map.addLayer(layer);

var radarLayer = new ALKMaps.Layer.WeatherRadar(
"Radar",
{
display: "radar"
},
{
opacity: 1
}
);

map.addLayer(radarLayer);

var center = new ALKMaps.LonLat(-96, 38).transform(new ALKMaps.Projection("EPSG:4326"), map.getProjectionObject());
map.setCenter(center, 4);
</textarea>

</div>

### Satellite

Setting the display parameter to "satellite" will allow you to display satellite weather data on your map.

  <div class="codeSampleBlock">
                <div>
                    <div class="scrollBlocker"></div>
                    <iframe class="mapFrame" src="Blank"></iframe>
                </div>
                <button class="codeUpdateButton btn">Update Map</button>
                <button class="codeResetButton btn btn-link">Reset</button>
                <textarea class="codeTextArea">
var map = new ALKMaps.Map("map");
var layer = new ALKMaps.Layer.BaseMap( "ALK Maps", {style:ALKMaps.STYLE.LIGHTNESS}, {displayInLayerSwitcher: false});
map.addLayer(layer);

var cloudLayer = new ALKMaps.Layer.WeatherRadar(
"Satellite",
{
display: "satellite"
},
{
opacity: 0.5
}
);

map.addLayer(cloudLayer);

var center = new ALKMaps.LonLat(-96, 38).transform(new ALKMaps.Projection("EPSG:4326"), map.getProjectionObject());
map.setCenter(center, 4);
</textarea>
</div>
