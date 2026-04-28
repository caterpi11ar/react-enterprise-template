import type { FC } from 'react'
import { RouterProvider as TanstackRouterProvider } from '@tanstack/react-router'
import { router } from '@/lib/router'

export const RouterProvider: FC = () => {
  return <TanstackRouterProvider router={router} />
}
