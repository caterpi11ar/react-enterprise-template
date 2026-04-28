import {
  QueryCache,
  QueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'sonner'
import { env } from '@/lib/env'
import { handleServerError } from '@/lib/handle-server-error'
import { useAuthStore } from '@/stores/auth-store'

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
    mutations: {
      onError: (error) => {
        handleServerError(error)

        if (error instanceof AxiosError) {
          if (error.response?.status === 304) {
            toast.error('Content not modified!')
          }
        }
      },
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          toast.error('Session expired!')
          useAuthStore.getState().auth.reset()
          if (routerRef) {
            const redirect = routerRef.history.location.href
            routerRef.navigate({ to: '/sign-in', search: { redirect } })
          }
        }
        if (error.response?.status === 500) {
          toast.error('Internal Server Error!')
          if (env.PROD && routerRef) {
            routerRef.navigate({ to: '/500' })
          }
        }
        if (error.response?.status === 403) {
          // routerRef?.navigate({ to: '/forbidden' })
        }
      }
    },
  }),
})
