---
title: Getting Started
weight: 2
---

The ALK Maps JavaScript API enables you to embed ALK's commercial maps and routing in your own web applications. This guide is intended to get you started, and give you an overview of the main functionality. It is designed for people familiar with JavaScript programming and object-oriented programming concepts. For more detailed reference of all the functions, see the [ALK Maps API Documentation](#)

### A Basic Map

The easiest way to learn about ALK Maps is to see a basic example. This code will produce a map centered on the lower 48 states of the U.S.

```
<!doctype html>
<html>
  <head>
  <style>
    html, body, #map {
    margin: 0;
    padding: 0;
    height: 100%;
    }
  </style>
  <script src="https://maps.alk.com/api/1.2/alkmaps.js"></script>
  <script>
    var map;
    var lon = -96, lat = 35, zoom = 3;
    function init() {
    ALKMaps.APIKey = "YOUR_KEY_HERE";
    map = new ALKMaps.Map('map');
    var lonLat = new ALKMaps.LonLat(lon, lat).transform(new ALKMaps.Projection("EPSG:4326"), map.getProjectionObject());
    map.setCenter(lonLat, zoom);
    }
  </script>
  </head>
  <body onLoad="init()">
  <div id="map" style="width:100%; height:100%">
  </div>
  </body>
</html>
```

### Default Controls

By default, the map comes with several controls enabled by default. These controls allow the user to pan and zoom via the mouse and keyboard. A scale control is also drawn in the lower right-hand corner of the map to provide a visual indication of the current scale of the map.

Please note that by default, all map controls will inherit their projection from the map. For example, a mouse position control on a map in spherical mercator will display its coordinates in meters rather than degrees. You change this by setting the displayProjection parameter of the map to the desired projection.

```
var map = new ALKMaps.Map("map",{ displayProjection: new ALKMaps.Projection("EPSG:4326") });
```

For more information on what controls are and the different types available, see the Controls section of this guide.

### Interactive Samples

Throughout the ALKMaps Developer guide, there will be interactive areas to test out the concepts introduced from within the browser. Below is the interactive version of the code above. You can easily change the zoom level or longitude and latitude. Press the Update button to refresh the map and use the Reset button to return the code to the original state.
