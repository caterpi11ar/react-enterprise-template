import type { InitModule } from './types'

const RETRY_KEY = 'chunk-error-retry-count'
const MAX_RETRIES = 3

const initialize: InitModule = () => {
  window.addEventListener('vite:preloadError', (event) => {
    event.preventDefault()

    const retryCount = Number(sessionStorage.getItem(RETRY_KEY) ?? 0)

    if (retryCount < MAX_RETRIES) {
      sessionStorage.setItem(RETRY_KEY, String(retryCount + 1))
      window.location.reload()
    }
  })

  sessionStorage.removeItem(RETRY_KEY)
}

export default initialize
