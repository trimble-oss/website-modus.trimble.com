---
title: Rail Routing
weight: 13
---

Routing is done using ALK Maps Data. The display of rail routes is handled through the Rail Routing Layer.

### Routing Layer

The first step in generating routes is to add a routing layer to your map. The routing layer will be responsible for both retrieving and drawing the routes based on the stops and properties you define.

```
var routingLayer = new ALKMaps.Layer.RailRouting( "Rail Route Layer" );
myMap.addLayer(routingLayer);
```

### Add Route

Once you have a routing layer added to your map, the next step is to add routes. To generate a route you will need at least two stops (an origin and a destination).

The addRoute method of the routing layer takes up to four parameters for creating a route: stops, functionOptions, and routeOptions.
