import type { InitModule } from './types'
import { env } from '@/lib/env'

const initialize: InitModule = async () => {
  if (env.MODE === 'development') {
    const { start } = await import('react-scan')
    start()
    console.log('React Scan initialized')
  }
}

export default initialize
