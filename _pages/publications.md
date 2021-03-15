---
id: publications
layout: page
permalink: /publications/
title: Publications
description: Conference and Workshop papers (already published and upcoming)
years: [2021, 2020, 2019, 2018,2017,2016,2014]
nav: true
---
<small><em>* - The first two authors contributed equally</em></small>
<div class="publications">
{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
