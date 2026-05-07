import type { PropsWithChildren } from 'react'
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useState } from 'react'
import { env } from '@/lib/env'
import { router } from '@/lib/router'

export function QueryProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient({
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

        if (error.response?.status === 401) {
          const redirect = router.history.location.href
          router.navigate({ to: '/', search: { redirect } })
        }
      },
    }),
  }))

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
