import { createRouter } from '@tanstack/react-router'
import { queryClient, registerRouter } from '@/lib/query-client'
import { routeTree } from '@/routeTree.gen'

export const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
})

registerRouter(router)

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
