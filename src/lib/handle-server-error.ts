import { AxiosError } from 'axios'
import { toast } from 'sonner'
import { env } from '@/lib/env'

export function handleServerError(error: unknown) {
  if (env.DEV) {
    console.log(error)
  }

  let errMsg = 'Something went wrong!'

  if (
    error
    && typeof error === 'object'
    && 'status' in error
    && Number(error.status) === 204
  ) {
    errMsg = 'No content.'
  }

  if (error instanceof AxiosError) {
    const title = error.response?.data?.title
    if (typeof title === 'string' && title.length > 0) {
      errMsg = title
    }
  }

  toast.error(errMsg)
}
