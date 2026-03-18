# Lucky Media Developer Guidelines

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Developer guidelines and documentation for Lucky Media. A comprehensive guide covering company culture, best practices, roadmaps, version control, design, frontend and backend technologies, testing, and deployment.

## Project Structure

```
.
├── public/           # Static assets (favicon, robots.txt)
├── src/
│   ├── assets/       # Images, SVGs
│   ├── components/   # Custom Astro components
│   ├── content/      # Markdown documentation
│   │   └── docs/
│   ├── overrides/    # Starlight component overrides
│   ├── styles/       # Global CSS
│   ├── types/        # TypeScript types
│   └── utils/        # Utility functions
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`       |
| `npm run build`   | Build for production to `./dist/`           |
| `npm run preview` | Preview the production build locally        |

## Tech Stack

- [Astro](https://astro.build) with [Starlight](https://starlight.astro.build)
- [Tailwind CSS](https://tailwindcss.com) v4
- [Alpine.js](https://alpinejs.dev) for interactive UI

## Contributing

Documentation lives in `src/content/docs/`. Add or edit `.md` files to update the guide. Each file is exposed as a route based on its path. Use `_meta.yml` in directories to configure sidebar order and labels.
