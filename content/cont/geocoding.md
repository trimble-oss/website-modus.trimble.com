---
title: Geocoding
weight: 8
---

The Geocoding service provides three methods related to converting street addresses to/from longitude and latitude coordinates. `ALKMaps.Map` class also provides three wrapper methods. By calling the wrapper methods, region will be inherited from baseLayer region parameter if user does not supply region value. The wrapper functions also take in and return any coordinates in the same projection as the map.

### Geocoding

Geocoding allows you to retrieve longitude and latitude coordinates for a given address. Geocoding is done by making a call to the ALKMaps.Geocoder.geocode method. The geocode method takes two primary parameters. First is an address object. The second and third parameters, success and failure, are callback functions for the asynchronous response. If the geocoding service finds multiple results that match the address object, by default, the best match is returned. To receive multiple results set the optional listSize property to the desired amount.

The response from the geocode method is an array JavaScript objects that contains the longitude and latitude coordinates for the address if the address could be resolved. In addition, the object contains a normalized address object as well as an array of error/warning messages.

```
ALKMaps.Geocoder.geocode({
  address:{
    addr: "1000 Herrontown Road",
    city: "Princeton",
    state: "NJ",
    zip: "08540",
    region: "NA" //Valid values are NA, EU, OC, SA, AS, AF, and ME. Default is NA.
  },
  listSize: 1, //Optional. The number of results returned if the geocoding service finds multiple matches.
  success: function(response){
    console.log(response);
  },
  failure: function(response){
    alert(response.status + "\n" +response.statusText + "\n" + response.responseText);
  }
});
```

```
//map wrapper function call: (region inherited from baseLayer)
map.geocode({
  address:{
    addr: "1000 Herrontown Road",
    city: "Princeton",
    state: "NJ",
    zip: "08540"
  },
  listSize: 1,
  success: function(response){
    console.log(response);
  },
  failure: function(response){
    alert(response.status + "\n" +response.statusText + "\n" + response.responseText);
  }
});
```

By default, geocoding calls are done asynchronously and the results are returned through callback functions. This means you will need to wait for the results to return before attempting the use the geocoded locations. See [Dealing With Multiple Asynchronous Geocoding Requests](#) for more information.

If you are a global highway customer that would like to use geocoding in other regions, you can set dataset to "Current" inside of the address parameter to use global highway data.

### Coords

### Address

### ConfidenceLevel
