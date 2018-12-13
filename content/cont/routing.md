---
title: Routing
weight: 7
---

Routing is done using ALK Maps Data. This data includes bridge heights and clearances, load limits, weight limits and allowances, one-way road designations, left-hand and dangerous turn restrictions, urban road classifications, as well as hazmat, truck-restricted, truck-designated and truck-prohibited roads.

### Routing Layer

The first step in generating routes is to add a routing layer to your map. The routing layer will be responsible for both retrieving and drawing the routes based on the stops and properties you define.

```
var routingLayer = new ALKMaps.Layer.Routing( "Route Layer" );
myMap.addLayer(routingLayer);
```

### Add Route

Once you have a routing layer added to your map, the next step is to add routes. To generate a route you will need at least two stops (an origin and a destination).

The addRoute method of the routing layer takes up to four parameters for creating a route: `stops`, `functionOptions`, `routeOptions`, and `reportOptions`.

Please note that as of version 1.2 the addRoute callback will return stops as an array of `ALKMaps.Geometry.Point` objects, and the coordinates will be in meters if your map is in Spherical Mercator. Previously the format of stops array in the return object was `[[lon,lat],[lon,lat],...]`, and the coordinates were always in degrees regardless of map projection.

Available in 1.2, is the ability to transform entire arrays of `ALKMaps.LonLat` or ALKMaps.Geometry.Point objects to another projection. This can be done by passing an array followed by the source and destination projections to either the `ALKMaps.LonLat.transformArray` or `ALKMaps.Geometry.Point.transformArray` functions.
