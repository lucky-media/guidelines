# Alpine.js
Alpine is a rugged, minimal tool for composing behavior directly in your markup. Think of it like jQuery for the modern web. Plop in a script tag and get going.

## Installation
In order to install Alpine you have to run this command:
```bash
npm install alpinejs
```
Then in your Javascript file you have to initialize it:

```javascript
import Alpine from 'alpinejs'
 
Alpine.start()
```

In order to learn Alpine and its basics their [documentation](https://alpinejs.dev/start-here) is a great start. Below is a sample demo for a dropdown component:

```html
<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle</button>
 
    <div x-show="open" @click.outside="open = false">Contents...</div>
</div>
```

Also below is a search input:

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
    <input x-model="search" placeholder="Search...">
 
    <ul>
        <template x-for="item in filteredItems" :key="item">
            <li x-text="item"></li>
        </template>
    </ul>
</div>
```