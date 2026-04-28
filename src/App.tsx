import type { FC } from 'react'
import { MultiProvider } from '@/components/multi-provider'
import { DirectionProvider } from '@/context/direction-provider'
import { FontProvider } from '@/context/font-provider'
import { ThemeProvider } from '@/context/theme-provider'
import { QueryProvider } from '@/providers/query-provider'
import { RouterProvider } from '@/providers/router-provider'

const App: FC = () => {
  const providers = [
    <QueryProvider key="query" />,
    <ThemeProvider key="theme" />,
    <FontProvider key="font" />,
    <DirectionProvider key="direction" />,
  ]

  return (
    <MultiProvider providers={providers}>
      <RouterProvider />
    </MultiProvider>
  )
}

export default App
