/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WithnavImport } from './routes/_withnav'
import { Route as IndexImport } from './routes/index'
import { Route as WithnavSnakeIndexImport } from './routes/_withnav/snake/index'
import { Route as WithnavShortsIndexImport } from './routes/_withnav/shorts/index'
import { Route as WithnavRecipesIndexImport } from './routes/_withnav/recipes/index'
import { Route as WithnavJtHatIndexImport } from './routes/_withnav/jt-hat/index'
import { Route as WithnavIscolderthanIndexImport } from './routes/_withnav/iscolderthan/index'
import { Route as WithnavGamesIndexImport } from './routes/_withnav/games/index'
import { Route as WithnavRecipesSlugImport } from './routes/_withnav/recipes/$slug'

// Create/Update Routes

const WithnavRoute = WithnavImport.update({
  id: '/_withnav',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const WithnavSnakeIndexRoute = WithnavSnakeIndexImport.update({
  path: '/snake/',
  getParentRoute: () => WithnavRoute,
} as any)

const WithnavShortsIndexRoute = WithnavShortsIndexImport.update({
  path: '/shorts/',
  getParentRoute: () => WithnavRoute,
} as any)

const WithnavRecipesIndexRoute = WithnavRecipesIndexImport.update({
  path: '/recipes/',
  getParentRoute: () => WithnavRoute,
} as any)

const WithnavJtHatIndexRoute = WithnavJtHatIndexImport.update({
  path: '/jt-hat/',
  getParentRoute: () => WithnavRoute,
} as any)

const WithnavIscolderthanIndexRoute = WithnavIscolderthanIndexImport.update({
  path: '/iscolderthan/',
  getParentRoute: () => WithnavRoute,
} as any)

const WithnavGamesIndexRoute = WithnavGamesIndexImport.update({
  path: '/games/',
  getParentRoute: () => WithnavRoute,
} as any)

const WithnavRecipesSlugRoute = WithnavRecipesSlugImport.update({
  path: '/recipes/$slug',
  getParentRoute: () => WithnavRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_withnav': {
      id: '/_withnav'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof WithnavImport
      parentRoute: typeof rootRoute
    }
    '/_withnav/recipes/$slug': {
      id: '/_withnav/recipes/$slug'
      path: '/recipes/$slug'
      fullPath: '/recipes/$slug'
      preLoaderRoute: typeof WithnavRecipesSlugImport
      parentRoute: typeof WithnavImport
    }
    '/_withnav/games/': {
      id: '/_withnav/games/'
      path: '/games'
      fullPath: '/games'
      preLoaderRoute: typeof WithnavGamesIndexImport
      parentRoute: typeof WithnavImport
    }
    '/_withnav/iscolderthan/': {
      id: '/_withnav/iscolderthan/'
      path: '/iscolderthan'
      fullPath: '/iscolderthan'
      preLoaderRoute: typeof WithnavIscolderthanIndexImport
      parentRoute: typeof WithnavImport
    }
    '/_withnav/jt-hat/': {
      id: '/_withnav/jt-hat/'
      path: '/jt-hat'
      fullPath: '/jt-hat'
      preLoaderRoute: typeof WithnavJtHatIndexImport
      parentRoute: typeof WithnavImport
    }
    '/_withnav/recipes/': {
      id: '/_withnav/recipes/'
      path: '/recipes'
      fullPath: '/recipes'
      preLoaderRoute: typeof WithnavRecipesIndexImport
      parentRoute: typeof WithnavImport
    }
    '/_withnav/shorts/': {
      id: '/_withnav/shorts/'
      path: '/shorts'
      fullPath: '/shorts'
      preLoaderRoute: typeof WithnavShortsIndexImport
      parentRoute: typeof WithnavImport
    }
    '/_withnav/snake/': {
      id: '/_withnav/snake/'
      path: '/snake'
      fullPath: '/snake'
      preLoaderRoute: typeof WithnavSnakeIndexImport
      parentRoute: typeof WithnavImport
    }
  }
}

// Create and export the route tree

interface WithnavRouteChildren {
  WithnavRecipesSlugRoute: typeof WithnavRecipesSlugRoute
  WithnavGamesIndexRoute: typeof WithnavGamesIndexRoute
  WithnavIscolderthanIndexRoute: typeof WithnavIscolderthanIndexRoute
  WithnavJtHatIndexRoute: typeof WithnavJtHatIndexRoute
  WithnavRecipesIndexRoute: typeof WithnavRecipesIndexRoute
  WithnavShortsIndexRoute: typeof WithnavShortsIndexRoute
  WithnavSnakeIndexRoute: typeof WithnavSnakeIndexRoute
}

const WithnavRouteChildren: WithnavRouteChildren = {
  WithnavRecipesSlugRoute: WithnavRecipesSlugRoute,
  WithnavGamesIndexRoute: WithnavGamesIndexRoute,
  WithnavIscolderthanIndexRoute: WithnavIscolderthanIndexRoute,
  WithnavJtHatIndexRoute: WithnavJtHatIndexRoute,
  WithnavRecipesIndexRoute: WithnavRecipesIndexRoute,
  WithnavShortsIndexRoute: WithnavShortsIndexRoute,
  WithnavSnakeIndexRoute: WithnavSnakeIndexRoute,
}

const WithnavRouteWithChildren =
  WithnavRoute._addFileChildren(WithnavRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof WithnavRouteWithChildren
  '/recipes/$slug': typeof WithnavRecipesSlugRoute
  '/games': typeof WithnavGamesIndexRoute
  '/iscolderthan': typeof WithnavIscolderthanIndexRoute
  '/jt-hat': typeof WithnavJtHatIndexRoute
  '/recipes': typeof WithnavRecipesIndexRoute
  '/shorts': typeof WithnavShortsIndexRoute
  '/snake': typeof WithnavSnakeIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof WithnavRouteWithChildren
  '/recipes/$slug': typeof WithnavRecipesSlugRoute
  '/games': typeof WithnavGamesIndexRoute
  '/iscolderthan': typeof WithnavIscolderthanIndexRoute
  '/jt-hat': typeof WithnavJtHatIndexRoute
  '/recipes': typeof WithnavRecipesIndexRoute
  '/shorts': typeof WithnavShortsIndexRoute
  '/snake': typeof WithnavSnakeIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_withnav': typeof WithnavRouteWithChildren
  '/_withnav/recipes/$slug': typeof WithnavRecipesSlugRoute
  '/_withnav/games/': typeof WithnavGamesIndexRoute
  '/_withnav/iscolderthan/': typeof WithnavIscolderthanIndexRoute
  '/_withnav/jt-hat/': typeof WithnavJtHatIndexRoute
  '/_withnav/recipes/': typeof WithnavRecipesIndexRoute
  '/_withnav/shorts/': typeof WithnavShortsIndexRoute
  '/_withnav/snake/': typeof WithnavSnakeIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/recipes/$slug'
    | '/games'
    | '/iscolderthan'
    | '/jt-hat'
    | '/recipes'
    | '/shorts'
    | '/snake'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/recipes/$slug'
    | '/games'
    | '/iscolderthan'
    | '/jt-hat'
    | '/recipes'
    | '/shorts'
    | '/snake'
  id:
    | '__root__'
    | '/'
    | '/_withnav'
    | '/_withnav/recipes/$slug'
    | '/_withnav/games/'
    | '/_withnav/iscolderthan/'
    | '/_withnav/jt-hat/'
    | '/_withnav/recipes/'
    | '/_withnav/shorts/'
    | '/_withnav/snake/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  WithnavRoute: typeof WithnavRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  WithnavRoute: WithnavRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_withnav"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_withnav": {
      "filePath": "_withnav.tsx",
      "children": [
        "/_withnav/recipes/$slug",
        "/_withnav/games/",
        "/_withnav/iscolderthan/",
        "/_withnav/jt-hat/",
        "/_withnav/recipes/",
        "/_withnav/shorts/",
        "/_withnav/snake/"
      ]
    },
    "/_withnav/recipes/$slug": {
      "filePath": "_withnav/recipes/$slug.tsx",
      "parent": "/_withnav"
    },
    "/_withnav/games/": {
      "filePath": "_withnav/games/index.tsx",
      "parent": "/_withnav"
    },
    "/_withnav/iscolderthan/": {
      "filePath": "_withnav/iscolderthan/index.tsx",
      "parent": "/_withnav"
    },
    "/_withnav/jt-hat/": {
      "filePath": "_withnav/jt-hat/index.tsx",
      "parent": "/_withnav"
    },
    "/_withnav/recipes/": {
      "filePath": "_withnav/recipes/index.tsx",
      "parent": "/_withnav"
    },
    "/_withnav/shorts/": {
      "filePath": "_withnav/shorts/index.tsx",
      "parent": "/_withnav"
    },
    "/_withnav/snake/": {
      "filePath": "_withnav/snake/index.tsx",
      "parent": "/_withnav"
    }
  }
}
ROUTE_MANIFEST_END */
