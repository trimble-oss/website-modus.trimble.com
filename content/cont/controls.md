---
title: Controls
weight: 4
---

The map comes with a default set of controls for basic manipulation (panning and zooming) of the map's viewport. The default controls of the map will also adjust based upon touch environments and screen sizes. However, you may find the need to provide more options and functionality to the users of your maps. This can be accomplished with controls. Below are some controls that provide functionality above and beyond the basic pan and zoom ability provided by the map.

### Control Projection

There are several map controls that display map data that are in turn affected by the projection of the map. For example the `ALKMaps.Control.MousePosition` control displays the current coordinates of the mouse cursor when it is placed over a point on the map. By default any controls that require a projection to be specified, will use the current map projection. However this functionality can be overriden by simply setting the `displayProjection` parameter of the map to the desired projection code.

```js
//Set display projection to display in meters
var map = new ALKMaps.Map("map", {
  displayProjection: new ALKMaps.Projection("EPSG:900913")
});

//Turn spherical mercator off on base layer, allowing code to use degrees.
var layer = new ALKMaps.Layer.BaseMap(
  "ALK Maps",
  {},
  { sphericalMercator: false, displayInLayerSwitcher: false }
);
```

#### PanZoomBar

PanZoomBar is one of the few controls that is added to your map by default. It is made up of two sub controls, PanPanel which is the directional pad in the top left corner and right beneath it is PanZoom which is the slide bar with plus and minus buttons at the top and bottom.

#### ScaleLine

Another control that is added by default is the ScaleLine control, it displays a small line indicator representing the current map scale on the map. By default it is drawn in the lower right corner of the map.

### LayerSwitcher Control

As we learned in the Layers sections, there are many different layers available to be used with the map. There are times when a user may not want to be distracted by the information on a given layer. One example of this is the traffic layer. A user may want to get a quick look at traffic conditions, but then hide the layer to complete other parts of their task. The LayerSwitcher control allows the user to toggle the visibility of the layers of the map.
