---
title: Cards
weight: 12
---

Cards provide a flexible and extensible content container with multiple variants and options.

| Event             | Description                                                                                                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| loadstart         | Triggered when layer loading starts.                                                                                                                                    |
| loadend           | Triggered when layer loading ends.                                                                                                                                      |
| visibilitychanged | Triggered when layer visibility is changed.                                                                                                                             |
| move              | Triggered when layer moves (triggered with every mousemove during a drag).                                                                                              |
| moveend           | Triggered when layer is done moving, object passed as argument has a zoomChanged boolean property which tells that the zoom has changed.                                |
| added             | Triggered after the layer is added to a map. Listeners will receive an object with a map property referencing the map and a layer property referencing the layer.       |
| removed           | Triggered after the layer is removed from the map. Listeners will receive an object with a map property referencing the map and a layer property referencing the layer. |
