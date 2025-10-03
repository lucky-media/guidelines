---
title: Alpine
slug: frontend/alpine
sidebar:
  order: 2
---

# Alpine.js

Meet Alpine.js, your sturdy, minimalist ally for crafting behavior effortlessly within your markup. Imagine it as the modern version of jQuery – one script tag and you're good to go.

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

Kickstart your Alpine.js mastery with their [documentation](https://alpinejs.dev/start-here) for fundamental knowledge. Check out this sample dropdown component for a taste of what's possible:

```html
<div x-data="{ open: false }">
  <button @click="open = ! open">Toggle</button>

  <div x-show="open" @click.outside="open = false">Contents...</div>
</div>
```

And feast your eyes on this elegant search input:

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
