import type { InitModule } from './types'
import chunkErrorHandler from './chunk-error-handler'
import reactScan from './react-scan'

export async function initialize() {
  const modules: InitModule[] = [
    chunkErrorHandler,
    reactScan,
  ]

  for (const mod of modules) {
    await mod()
  }
}
