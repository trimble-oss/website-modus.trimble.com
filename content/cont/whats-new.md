---
title: What's New in Version 1.2
weight: 1
---

### Spherical Mercator Default

By default your map and all layers will now appear in Spherical Mercator. This means you no longer need to set the sphericalMercator option to true when creating your BaseMap layer.

    var layer = new ALKMaps.Layer.BaseMap("Base Map", {}, { displayInLayerSwitcher: false });


### MapBox Satellite Imagery

The ALK Maps JS API provides the ability to view satellite image tiles at a wide range of zoom levels. The satellite view has a road overlay over the aerial map tiles.

Please note, the satellite map style is only available using the spherical mercator projection.

### Custom Places

You can now create, manage, and retrieve your very own custom places using the new set of functions added to the API. You can also create and manage custom sets and categories, allowing for better organization and easier retrieval of your custom places. For more information please visit the CustomPlaces page under the Services section of the guide.

For more information regarding the custom places services, please visit the Custom Places page.

### Vector Markers Layer

ALKMaps.Layer.VectorMarkers is a new layer that has been added in 1.2, in an attempt to combine the versatility of the Vector layer with the simplicity of the Markers layer while eliminating certain disadvantages that the Markers layer presents. The major upside of this layer is its ability to allow for the interaction between multiple layers, while retaining the overall ease of use of the Markers layer.

For more information regarding this layer and how to use it, please visit the VectorMarkers page.

### Clustering by Attribute and/or Rule

There is a new feature for clustering that gives the option to specify an attribute and/or rule in a cluster strategy. If an attribute is specified, the value of a feature's attribute must match that of the features already in the cluster before a feature can be added to the cluster. If a rule is specified, a feature must first satisfy the condition of the rule before it can even become eligable for clustering.

For more information regarding clustering by attribute/rule, please visit the Cluster by Attribute/Rule section of the Vectors page.
