---
title: Accordion
---
## Source

* <https://ui.shadcn.com/docs/components/accordion>

## Code

*

## Examples

### Single

{% tabs %}

{% tab label="Preview" %}
{% accordion %}

  {% accordionitem title="Is it accessible?" %}
  Yes. It adheres to the WAI-ARIA design pattern.
  {% /accordionitem %}

  {% accordionitem title="Is it styled?" %}
  Yes. It comes with default styles that matches the other components' aesthetic.
  {% /accordionitem %}

  {% accordionitem title="Is it animated?" %}
  Yes. It's animated by default, but you can disable it if you prefer.
  {% /accordionitem %}


{% /accordion %}
{% /tab %}

{% tab label="Code" %}
```md
  {% accordion %}

    {% accordionitem title="Is it accessible?" %}
    Yes. It adheres to the WAI-ARIA design pattern.
    {% /accordionitem %}

    {% accordionitem title="Is it styled?" %}
    Yes. It comes with default styles that matches the other components' aesthetic.
    {% /accordionitem %}

    {% accordionitem title="Is it animated?" %}
    Yes. It's animated by default, but you can disable it if you prefer.
    {% /accordionitem %}


  {% /accordion %}
```
{% /tab %}

{% /tabs %}

### Multiple
{% tabs %}

{% tab label="Preview" %}
{% accordion type="multiple" %}

  {% accordionitem title="Is it accessible?" %}
  Yes. It adheres to the WAI-ARIA design pattern.
  {% /accordionitem %}

  {% accordionitem title="Is it styled?" %}
  Yes. It comes with default styles that matches the other components' aesthetic.
  {% /accordionitem %}

  {% accordionitem title="Is it animated?" %}
  Yes. It's animated by default, but you can disable it if you prefer.
  {% /accordionitem %}


{% /accordion %}
{% /tab %}

{% tab label="Code" %}
```md

  {% accordion type="multiple" %}

    {% accordionitem title="Is it accessible?" %}
    Yes. It adheres to the WAI-ARIA design pattern.
    {% /accordionitem %}

    {% accordionitem title="Is it styled?" %}
    Yes. It comes with default styles that matches the other components' aesthetic.
    {% /accordionitem %}

    {% accordionitem title="Is it animated?" %}
    Yes. It's animated by default, but you can disable it if you prefer.
    {% /accordionitem %}


  {% /accordion %}

```
{% /tab %}

{% /tabs %}
