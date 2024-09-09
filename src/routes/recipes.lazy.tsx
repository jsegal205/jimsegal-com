import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/recipes')({
  component: () => <div>Hello /recipes!</div>
})