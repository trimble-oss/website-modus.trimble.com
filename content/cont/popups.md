---
title: Popups
weight: 14
---

Popups are small containers that can be opened and closed on the map. There are three main types of popups available. The base `Popup`, as well as `Anchored`, and `FramedCloud`.

### Popup

The base Popup places a rectangular container at the specified coordinates on the map.

<iframe class="mapFrame" src="Blank"></iframe>

The Popup constructor take up to 6 parameters to create a new popup.

| Parameter          | Type/Values    | Description                                                                                         |
| ------------------ | -------------- | --------------------------------------------------------------------------------------------------- |
| `id`               | string         | A unique identifier for the popup                                                                   |
| `lonlat`           | ALKMaps.LonLat | The location on the map where the popup will be shown.                                              |
| `contentSize`      | ALKMaps.Size   | The size of the popup in pixels.                                                                    |
| `contentHTML`      | string         | An HTML string representing the content of the popup.                                               |
| `closeBox`         | boolean        | Indicates whether the popup should be dismissable via a close icon.                                 |
| `closeBoxCallback` | function       | (Optional) Callback function that is called when the user dismisses the popup using the close icon. |

### Anchored

The Anchored Popup places a rectangular container at the specified coordinates on the map.

<iframe class="mapFrame" src="Blank"></iframe>

The Anchored popup constructor takes the same parameters as Popup with the addition of an anchor parameter.

The `anchor` parameter takes an object which exposes a `size` and `offset` properly. This object will generally be an `ALKMaps.Icon`. If you are not using an icon to mark your location, the `anchor` parameter can be set to null.

### FramedCloud

The FramedCloud Popup places a rectangular container at the specified coordinates on the map.

<iframe class="mapFrame" src="Blank"></iframe>

The FramedCloud popup constructor takes the same parameters as Popup with the addition of an anchor parameter.

The `anchor` parameter takes an object which exposes a `size` and `offset` properly. This object will generally be an `ALKMaps.Icon`. If you are not using an icon to mark your location, the `anchor` parameter can be set to null.

### SimplePopup

The arrow of a SimplePopup is always pointing down. The close box does not have a circle. The SimplePopup constructor takes id, lonlat, contentSize, contentHTML, offset, closeBox and closeBoxCallback as parameters.

<iframe class="mapFrame" src="Blank"></iframe>
