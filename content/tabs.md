---
title: Tabs
toc: false
---

## Source

* https://ui.shadcn.com/docs/components/tabs
* https://markdoc.dev/docs/examples#tabs

## Code

*

## Examples

### No default - use first tab

{% tabs %}

  {% tab label="Preview" %}
    preview content
  {% /tab %}

  {% tab label="Code" %}
    code content
  {% /tab %}

{% /tabs %}

### with default tab

{% tabs %}

  {% tab label="Preview" %}
    preview content
  {% /tab %}

  {% tab label="Code" default=true %}
    code content
  {% /tab %}

{% /tabs %}
