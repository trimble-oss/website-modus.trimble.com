---
title: "Modals"
layout: "single"
description: "Modal dialogs interrupt workflows and require user interaction."
components: true
component: modals
images:
  - "/img/xr/headers/modals.png"
keywords: modals, modal, dialogs, dialog
tags: [xr, styles]
---

### Behaviors

- Dialogs are usually activated by user actions (such as activating a button) but may also be the result of a timed event (such as a session timeout warning) or other events.
- Dialogs can only be closed by choosing an action represented by a button (e.g., Save or Cancel). They cannot be dismissed by tapping or triggering outside of the modal.
- Avoid extensive copy or many elements within the dialog that require scrolling actions.
- Dialogs are centered horizontally and vertically in the field of view by default and appear at 50cm from users.
  -  For spatial UIs (i.e. model viewing), implement a Radial Solver by default.
  - For dialogs in the context of a non-diegetic UI (e.g. Browser), dialogs inherit the parent's UI-behavior.
- Consider "displacing" the non-diegetic UI away from the user and/or covering it with a dark surface to reduce its brightness. You can also eliminate it altogether.
- Retain focus until dismissed or an action has been taken. Dialogs shouldn’t be obscured by other elements or other dialogs within or without the context of the function or environment.

***Touch = UIs placed at 50cm (~20 Inch) from users***
<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Example</th>
      <th>Size (px or mm)</th>
      <th>Elements</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="/img/xr/Dialog_Small_Anatomy.svg" alt="Small Dialog" width="192"height="96">
      </td>
      <td>Small = 192 x 96</td>
      <td><br>- Header, brief Title.</br>
          <br>- Content area, which provides instructions.</br>
          <br>- Action.</br>
      </td>
    </tr>
    <tr>
      <td><img src="/img/xr/Dialog_Small_Anatomy_2.svg" alt="Small Dialog Double" width="192"height="96">
      </td>
      <td>Small = 192 x 96</td>
      <td><br>- Header, brief Title.</br>
          <br>- Content area, which provides instructions.</br>
          <br>- Actions.</br>
      </td>
    </tr>
    <tr>
      <td><img src="/img/xr/Dialog_Small_Anatomy_2.5.svg" alt="Small Dialog Double and half" width="192"height="120">
      </td>
      <td>Small = 192 x 120</td>
      <td><br>- Header, brief Title.</br>
          <br>- Content area, which provides instructions.</br>
          <br>- Option.</br>
          <br>- Actions.</br>
      </td>
    </tr>
        <tr>
      <td><img src="/img/xr/Dialog_Medium_Anatomy.svg" alt="Medium Dialog" width="224"height="160">
      </td>
      <td>Medium = 192 x 128</td>
      <td><br>- Header, brief Title.</br>
          <br>- Content area, which provides instructions.</br>
          <br>- Action.</br>
      </td>
    </tr>
    <tr>
      <td><img src="/img/xr/Dialog_Medium_Anatomy_2.svg" alt="Medium Dialog Double" width="224"height="160">
      </td>
      <td>Medium = 192 x 128</td>
      <td><br>- Header, brief Title.</br>
          <br>- Content area, which provides instructions.</br>
          <br>- Actions.</br>
      </td>
    </tr>
    <tr>
      <td><img src="/img/xr/Dialog_Medium_Anatomy_2.5.svg" alt="Medium Dialog Double and half" width="192"height="184">
      </td>
      <td>Medium = 192 x 152</td>
      <td><br>- Header, brief Title.</br>
          <br>- Content area, which provides instructions.</br>
          <br>- Option.</br>
          <br>- Actions.</br>
      </td>
    <tr>
      <td><img src="/img/xr/Dialog_Large_Anatomy.svg" alt="Large Dialog" width="224"height="160">
      </td>
      <td>Large = 192 x 192</td>
      <td><br>- Banner text</br>
          <br>- Header, brief Title.</br>
          <br>- Content area, which provides instructions.</br>
          <br>- Action. Single or double.</br>
      </td>
    </tr>
    <tr>
      <td><img src="/img/xr/Dialog_Large_Image_Anatomy.svg" alt="Large Image Dialog" width="224"height="160">
      </td>
      <td>Large = 192 x 192</td>
      <td><br>- Image</br>
          <br>- Header, brief Title.</br>
          <br>- Content area, which provides instructions.</br>
          <br>- Actions. Single or double.</br>
      </td>
    </tr>
    <tr>
      <td><img src="/img/xr/Dialog_XLarge_Anatomy.svg" alt="XLarge Dialog" width="224"height="264">
      </td>
      <td>X-Large = 192 x 232</td>
      <td><br>- Banner Text</br>
          <br>- Header, brief Title.</br>
          <br>- Content area, which provides instructions.</br>
          <br>- Actions. Single or double.</br>
      </td>
    </tr>
    <tr>
      <td><img src="/img/xr/Dialog_XLarge_Image_Anatomy.svg" alt="XLarge Dialog" width="224"height="264">
      </td>
      <td>X-Large = 192 x 232</td>
      <td><br>- Image</br>
          <br>- Header, brief Title.</br>
          <br>- Content area, which provides instructions.</br>
          <br>- Actions. Single or double.</br>
      </td>
    </tr>
  </tbody>
</table>


