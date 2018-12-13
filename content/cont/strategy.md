---
title: Strategy
weight: 5
---

In ALKMaps, strategies deal with when to make requests for data and determine how to prepare features before they add into a layer.

### BBOX

BBox is a simple strategy that requests new features whenever the map bounds are outside the bounds of the previously requested set of features. By using this strategy, ALKMaps will only fetch data for the desired area.

### Fixed

A simple strategy that requests features once and never requests new data.

### Cluster

Before renderning new features to the Vector layer, the cluster strategy can group the features together in clusters based on proximity to other features. Please visit the [Strategy](#) section in Vector layer guide page to see how it works.

### Marker Cluster

Similar to Cluster strategy in Vector Layer, the Marker Cluster strategy is used in [Marker](#) Layer to group markers together before adding to layer.
