import type { Context } from 'react'
import { useContext } from 'react'

export default function useGuaranteedContext<T>(
  contextType: Context<T | null>,
  debugContextName?: string,
): T {
  const context = useContext(contextType)
  if (context === null) {
    throw new Error(
      `useGuaranteedContext got null for contextType${debugContextName != undefined ? `: '${debugContextName}'` : ''
      }`,
    )
  }
  return context
}
