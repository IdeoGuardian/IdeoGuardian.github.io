---
layout: home
title: Welcome to My Blog
---

# Welcome to My Blog

This is my personal blog where I share my thoughts and experiences.

## Latest Posts
```
{%- for post in site.posts limit:5 -%}
  <article>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%B %d, %Y" }}</time>
    {{ post.excerpt }}
  </article>
{%- endfor -%}
```
