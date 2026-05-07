import { z } from 'zod/v4'

interface Env {
  MODE: 'development' | 'production' | 'test'
}

const envSchema = z.object({
  MODE: z.enum(['development', 'production', 'test']),
}) satisfies z.ZodType<Env>

export const env: Env = envSchema.parse(import.meta.env)
