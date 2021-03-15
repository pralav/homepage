---
id: portfolio
layout: page
title: Projects
permalink: /projects/
description: List of projects with tags.
nav: true
---

<div class="container-portfolio">

<ul id="filters" class="clearfix">
    <li><span class="filter active" data-filter="all">All</span></li>
    <li><span class="filter" data-filter=".personas">Personas</span></li>
    <li><span class="filter" data-filter=".aisafety">AI Safety</span></li>
    <li><span class="filter" data-filter=".mental">Mental States</span></li>
    <li><span class="filter" data-filter=".narratives">Narratives</span></li>
    <li><span class="filter" data-filter=".commonsense">Social Commonsense</span></li>
    <li><span class="filter" data-filter=".lifelong">Lifelong Learning</span></li>
    <li><span class="filter" data-filter=".embeddings">Representations/Embeddings</span></li>
    <li><span class="filter" data-filter=".multimodal">Multi-Modal</span></li>
    <li><span class="filter" data-filter=".vr">AI for Virtual Reality</span></li>
    <li><span class="filter" data-filter=".behavior">Human Behavior</span></li>
    <li><span class="filter" data-filter=".elections">Elections</span></li>
    <li><span class="filter" data-filter=".classify">Classification</span></li>
    


</ul>

<div id="portfoliolist">
    
{% assign sorted_projects = site.projects | sort: "importance" %}
{% for project in sorted_projects %}
    <div class="mix view view-first portfolio {{ project.category }}" data-cat="{{ project.category }}">
        <img src="{{ project.img | relative_url }}" />
        <div class="mask">
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
            {% if project.search_img %}
              <a href="{{ project.search_img }}" rel="portfolio" class="info open-imag">
                <i class="fa fa-search"></i>
              </a>
            {% endif %}
            {% if project.link_ext %}
              <a href="{{ project.link_ext }}" target="_blank" class="info external">
              <i class="fa fa-link"></i>
              </a> 
            {% endif %}
            {% if project.link_iframe %}
              <a href="{{ project.link_iframe }}?width=800&height=500&iframe=true" rel="portfolio"  class="info external"><i class="fa fa-link"></i></a>
            {% endif %}
            {% if project.play_ext %}
              <a href="{{ project.play_ext }}" rel="portfolio" class="info external"><i class="fa fa-play"></i></a>
            {% endif %}
        </div>
    </div>
{% endfor %}
    <div class="clear"></div>

</div>

</div>                                          

