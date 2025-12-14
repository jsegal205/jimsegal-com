# jimsegal.com

Portfolio for all things Jim. Please enjoy yourself.

## Prerequisites

This project uses [asdf](https://asdf-vm.com/) for version management. The `.tool-versions` file specifies the required Node.js and pnpm versions.

Install asdf and the required plugins:

```sh
# Install asdf (see https://asdf-vm.com/guide/getting-started.html)

# Add plugins
asdf plugin add nodejs
asdf plugin add pnpm

# Install versions from .tool-versions
asdf install
```

## Setup

Install dependencies:

```sh
pnpm install
```

## Development

Start the development server:

```sh
pnpm run dev
```

Then navigate to the route provided in console (usually http://localhost:5173).

## Common Commands

```sh
# Build for production
pnpm run build

# Preview production build locally
pnpm run preview

# Run linter
pnpm run lint

# Format code with Prettier
pnpm run prettier

# Check Prettier formatting without making changes
pnpm run check-prettier

# Install dependencies (frozen lockfile for CI)
pnpm run ci
```

## Live site

You can view up to date `main` branch changes at [https://jimsegal.com](https://jimsegal.com)

## History of jimsegal.com

I have had the domain and putting up interesting (to me) projects here since 2013 (maybe longer, but that was the oldest commit I could find). In true software tradition, I had built a frankenstien of a website and supporting services.

The following was the daily driver of jimsegal.com from [Aug 28, 2013](https://github.com/jsegal205/jimsegal.com/commit/302102c7c1d69a2bbfafd30b2c9579124c9ffc79).

- [landing page and some others](https://github.com/jsegal205/jimsegal.com) - vanilla html, javascript, css, deployed through aws s3 bucket
- [projects.jimsegal.com](https://github.com/jsegal205/jimsegal-projects) - react SPA, javascript, deployed through github pages
- [api.jimsegal.com](https://github.com/jsegal205/jimsegal-api) - node, express, javascript, deployed through heroku
- [railway-admin.jimsegal.com](https://github.com/jsegal205/jimsegal-admin) - headless cms by [strapi.io](https://strapi.io/), deployed through railway.app

I knew this was a mess and needed to be consolidated. I knew this had to be rewritten.

Previous attempts to rewrite:

- One of my attemps to was actually a long running feature branch:

  - [https://github.com/jsegal205/jimsegal.com/pull/32](https://github.com/jsegal205/jimsegal.com/pull/32)

- Additional rewrite in elixir until I realized I don't need all the overhead of a full server and database for what I'm doing with the site now.
  - [https://github.com/jsegal205/jimsegalcom](https://github.com/jsegal205/jimsegalcom)
