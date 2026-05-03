import {
  QueryCache,
  QueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { env } from '@/lib/env'

interface RouterRef {
  navigate: (opts: { to: string, search?: Record<string, unknown> }) => void
  history: { location: { href: string } }
}

let routerRef: RouterRef | null = null

export function registerRouter(router: RouterRef) {
  routerRef = router
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        if (env.DEV)
          console.log({ failureCount, error })

        if (failureCount >= 0 && env.DEV)
          return false
        if (failureCount > 3 && env.PROD)
          return false

        return !(
          error instanceof AxiosError
          && [401, 403].includes(error.response?.status ?? 0)
        )
      },
      refetchOnWindowFocus: env.PROD,
      staleTime: 10 * 1000,
    },

  },
  queryCache: new QueryCache({
    onError: (error) => {
      if (!(error instanceof AxiosError))
        return

      if (error.response?.status === 401 && routerRef) {
        const redirect = routerRef.history.location.href
        routerRef.navigate({ to: '/', search: { redirect } })
      }
    },
  }),
})
