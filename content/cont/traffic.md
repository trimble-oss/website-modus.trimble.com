---
title: Traffic
weight: 9
---

The display of traffic information is handled through the Traffic Layer. Once this layer is added to your map, it will display a traffic data overlay that is color coded to indicate the flow of traffic on the roads currently visible in the map.

In addition to real-time traffic data, the layer can be configured to show historical information base on a particular day of the week and time of day. This historical information can aid in planning and scheduling based on things like rush hour traffic patterns.

### Traffic Layer

The first step in creating a traffic overlay is to create a new Traffic layer object and add it to your map.

```
var trafficLayer = new ALKMaps.Layer.Traffic( "ALK LiveTraffic™", {}, {});
```

### Regions

By default the traffic layer will default to the North America("NA"), you change this by specifying the region property of the parameters object.

### Real-time Traffic

By default, the new traffic layer will display real-time traffic information based on the current traffic conditions for the area visible in the map.

### Historical Traffic

To pull historical traffic data for a specific day and time, you'll need to set the appropriate parameters (histDay, histTimeBin, and histTimeZone) on the layer. This can be done by either passing in the parameters during the creation of the layer or by setting the parameters on an existing traffic layer and redrawing the layer.

To display the historical traffic data for a Tuesday at 7pm EDT, you would use the following code

```
var trafficLayer = new ALKMaps.Layer.Traffic(
  "ALK LiveTraffic™",
  {
    histDay: "Tuesday",
    histTimeBin: 76,
    histTimeZone: "-04:00"
  },
  {}
);
```

### histDay

The histDay parameter is set to a string containing name of the day of the week. Valid values are:

- Monday
- Tuesday
- Wednesday
- Thursday
- Friday
- Saturday
- Sunday

### histTimeBin

The histTimeBin parameter is set to an integer representing a 15 minute block of time during the day. There are a 96 total 15 minute time bins for the day beginning with midnight as 0. Valid values are integers from 0 to 95. Some common time bin values are:

- 0 - 12am
- 32 - 8am
- 48 - 12pm
- 68 - 5pm

### histTimeZone

The histTimeZone parameter is the offset from UTC for the time zone. If omitted, UTC is assumed. The colon between the hours and minutes is required. See ISO 8601 for more details. Some common time zone offsets are:

- `-04:00` - Eastern Daylight Time
- `-07:00` - Pacific Daylight Time
- `-08:00` - Pacific Standard Time

You can modify an existing traffic layer's historical traffic settings by manually setting the individual properties of the params object.
