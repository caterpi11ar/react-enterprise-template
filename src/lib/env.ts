import { z } from 'zod/v4'

interface Env {
  MODE: 'development' | 'production' | 'test'
  DEV: boolean
  PROD: boolean
  VITE_CLERK_PUBLISHABLE_KEY?: string
}

const envSchema = z.object({
  MODE: z.enum(['development', 'production', 'test']),
  DEV: z.boolean(),
  PROD: z.boolean(),
  VITE_CLERK_PUBLISHABLE_KEY: z.string().optional(),
}) satisfies z.ZodType<Env>

export const env: Env = envSchema.parse(import.meta.env)
