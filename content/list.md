---
title: List
---

## Source

* <https://ui.shadcn.com/docs/components/typography>
* <https://github.com/markdoc/markdoc/discussions/240>

## Code

*

## Examples

### Ordered

{% tabs %}
{% tab label="Peview" %}
1. 1st level of puns: 5 gold coins
2. 2nd level of jokes: 10 gold coins
3. 3rd level of one-liners : 20 gold coins
{% /tab %}
{% tab label="Code" %}
```md
1. 1st level of puns: 5 gold coins
2. 2nd level of jokes: 10 gold coins
3. 3rd level of one-liners : 20 gold coins
```
{% /tab %}
{% /tabs %}

### Unordered

{% tabs %}
{% tab label="Peview" %}
* 1st level of puns: 5 gold coins
* 2nd level of jokes: 10 gold coins
* 3rd level of one-liners : 20 gold coins
{% /tab %}
{% tab label="Code" %}
```md
* 1st level of puns: 5 gold coins
* 2nd level of jokes: 10 gold coins
* 3rd level of one-liners : 20 gold coins
```
{% /tab %}
{% /tabs %}
### Advanced

Since there are some limitations

#### Ordered List with lower alpha

{% tabs %}
{% tab label="Peview" %}
{% orderedlist type="lower-alpha" %}
* 1st level of puns: 5 gold coins
* 2nd level of jokes: 10 gold coins
* 3rd level of one-liners : 20 gold coins
{% /orderedlist %}
{% /tab %}
{% tab label="Code" %}
```md
{% orderedlist type="lower-alpha" %}
* 1st level of puns: 5 gold coins
* 2nd level of jokes: 10 gold coins
* 3rd level of one-liners : 20 gold coins
{% /orderedlist %}
```
{% /tab %}
{% /tabs %}

#### Ordered List with decimal and custom start

{% tabs %}
{% tab label="Peview" %}

{% orderedlist start="4" type="decimal" %}
* 1st level of puns: 5 gold coins
* 2nd level of jokes: 10 gold coins
* 3rd level of one-liners : 20 gold coins
{% /orderedlist %}

{% /tab %}
{% tab label="Code" %}
```md
{% orderedlist start="4" type="decimal" %}
* 1st level of puns: 5 gold coins
* 2nd level of jokes: 10 gold coins
* 3rd level of one-liners : 20 gold coins
{% /orderedlist %}
```
{% /tab %}
{% /tabs %}
