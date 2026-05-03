import type { FC } from 'react'
import { MultiProvider } from '@/components/multi-provider'

import { QueryProvider } from '@/providers/query-provider'
import { RouterProvider } from '@/providers/router-provider'

const App: FC = () => {
  const providers = [
    <QueryProvider key="query" />,
  ]

  return (
    <MultiProvider providers={providers}>
      <RouterProvider />
    </MultiProvider>
  )
}

export default App
