import { RouterProvider as TanstackRouterProvider } from '@tanstack/react-router'
import { router } from '@/lib/router'

export function RouterProvider() {
  return <TanstackRouterProvider router={router} />
}
