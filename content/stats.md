---
title: "Stats"
layout: "single"
description: "Download stats for Modus projects"
url: "/stats/"
start: true
hideDate: true
hideToc: true
sitemap:
  disable: true
tags:
  - search_exclude
---

<style>
  main a:after {
   content: none !important;
  }
  .menu-right {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
  }
  main .btn-outline-dark {
    display: none !important;
  }
</style>

<div class="row">

{{< card-stats npmjs="@trimbleinc/modus-bootstrap" date="2020-11-11" >}}
Modus Bootstrap v1
{{</ card-stats >}}

{{< card-stats npmjs="@trimble-oss/modus-bootstrap" github="trimble-oss/modus-icons" date="2023-11-11" >}}
Modus Bootstrap v2
{{</ card-stats >}}

{{< card-stats npmjs="@trimble-oss/modus-icons" github="trimble-oss/modus-icons" date="2023-02-02" >}}
Modus Icons
{{</ card-stats >}}

{{< card-stats npmjs="@trimbleinc/modus-react-bootstrap" github="trimble-oss/modus-react-bootstrap" date="2021-10-10" >}}
Modus React Bootstrap
{{</ card-stats >}}

{{< card-stats npmjs="@trimble-oss/modus-web-components" github="trimble-oss/modus-web-components" date="2022-02-02" >}}
Modus Web Components
{{</ card-stats >}}

{{< card-stats npmjs="@trimble-oss/modus-angular-components" github="trimble-oss/modus-web-components" date="2022-03-03" hideCDN="true" >}}
Modus Angular Components
{{</ card-stats >}}

{{< card-stats npmjs="@trimble-oss/modus-react-components" github="trimble-oss/modus-web-components" date="2022-06-06" hideCDN="true" >}}
Modus React Components
{{</ card-stats >}}

</div>

<style data-pagefind-ignore>
a[href^="https://github.com"]::after {
  display: none !important;
  width: 0 !important;
}
</style>
