---
title: Styling
weight: 6
---

The Style and StyleMap objects are used to control the styling of features in Vector Layer, such as Points, Lines, Vector Arrows, Linear Rings, Polygons and Clusters.

Basically, there are 3 different ways to define styles in ALK Maps.

### Vector Style

You can define the style for a specific vector during declaration as the code sample below:

 <div class="codeSampleBlock">
                <div>
                    <div class="scrollBlocker"></div>
                    <iframe class="mapFrame" src="Blank"></iframe>
                </div>
                <button class="codeUpdateButton btn">Update Map</button>
                <button class="codeResetButton btn btn-link">Reset</button>
                <textarea class="codeTextArea code">
//ALKMaps.APIKey = "YOUR_KEY_HERE";

var map = new ALKMaps.Map("map");
var layer = new ALKMaps.Layer.BaseMap( "ALK Maps", {}, {displayInLayerSwitcher: false});
var vectorLayer = new ALKMaps.Layer.Vector("Vector Layer");
map.addLayers([layer,vectorLayer]);

map.setCenter(new ALKMaps.LonLat(-74.655522, 40.367494).transform(new ALKMaps.Projection("EPSG:4326"), map.getProjectionObject()), 8);

var pointFeature = new ALKMaps.Feature.Vector(
new ALKMaps.Geometry.Point(-74.655522, 40.367494).transform(new ALKMaps.Projection("EPSG:4326"), map.getProjectionObject()),
null,
{
pointRadius: 10,
fillColor: "#4444FF",
label: "Store #463",
labelYOffset: 20,
fontWeight: "bold",
fontColor: "#0000AA"
}
);

var lineFeature = new ALKMaps.Feature.Vector(
new ALKMaps.Geometry.LineString([
new ALKMaps.Geometry.Point(-75.675522, 40.317494).transform(new ALKMaps.Projection("EPSG:4326"), map.getProjectionObject()),
new ALKMaps.Geometry.Point(-76.177727, 39.924195).transform(new ALKMaps.Projection("EPSG:4326"), map.getProjectionObject())
]),
null,
{
strokeColor: "#EE33EE",
strokeWidth: 10
}
);
vectorLayer.addFeatures([pointFeature, lineFeature]);
</textarea>

### Layer Style

### StyleMap

### Style Classes Properties
