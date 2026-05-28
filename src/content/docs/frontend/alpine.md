---
title: Alpine
slug: frontend/alpine
sidebar:
  order: 2
---

# Alpine.js

Alpine.js is a lightweight JavaScript framework for adding behavior directly in your HTML markup. Think of it as jQuery for the modern era, drop in one script tag and you're ready to go.

## Installation

To install Alpine, simply run this command:

```bash
npm install alpinejs
```

Then, initialize it in your JavaScript file:

```javascript
import Alpine from "alpinejs";

Alpine.start();
```

Start with the official [documentation](https://alpinejs.dev/start-here) to get familiar with the basics. Here's a simple dropdown component to show you what Alpine can do:

```html
<div x-data="{ open: false }">
  <button @click="open = ! open">Toggle</button>

  <div x-show="open" @click.outside="open = false">Contents...</div>
</div>
```

Here's a search input example:

```html
<div
  x-data="{
        search: '',
 
        items: ['foo', 'bar', 'baz'],
 
        get filteredItems() {
            return this.items.filter(
                i => i.startsWith(this.search)
            )
        }
    }"
>
  <input x-model="search" placeholder="Search..." />

  <ul>
    <template x-for="item in filteredItems" :key="item">
      <li x-text="item"></li>
    </template>
  </ul>
</div>
```
