---
title: Services
weight: 11
---

ALKMaps provides many useful services to enhance your mapping experience.

### Geocoding

There are three different gecoding service functions, `reverseGeocode`, `geocode`, and `simpleGeocode`. The geocode and simple geocoding services allows you to find the approximate coordinates for a given street address. The reverse gecoding service instead takes in a pair of coordinates and returns the approximate address on which that point is located.

### Route Services

The routing services provide a way to obtain the specific route coordinates generated from a list of provided stops/pings. There are two different ALKMaps.Map class functions, `getRoutePath` and `getDerivedRoutePath`.

### Reports

The reporting service is capable of creating various different reports for a given route. The current report types to choose from are Milage, Directions, Detail, State, CalcMiles, LeastCost, Geotunnel, and WeatherAlerts. There are also two different ways of obtaining these reports, one is to consume the service directly using the `getReports` function of the `ALKMaps.Map` class, and the other is to use the `reportOptions` parameter of the `addRoute` function on the routing layer.

### CustomPlaces

The CustomPlace services allow you to create, store, and manage your own CustomPlaces, sets, and categories. Each CustomPlace you create can store various useful information including its coordinates, address, name, a phone number, data region and even a set and category to help organize them. For more information visit the CustomPlaces page.

### Other Services

#### Weather Alerts

In addition to getting weather alerts within a given viewport for the weather alerts layer, you can now get weathers intersecting with a given point or route path.
