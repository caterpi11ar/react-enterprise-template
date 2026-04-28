import { SignIn } from '@clerk/react'
import { createFileRoute } from '@tanstack/react-router'
import { Skeleton } from '@/components/ui/skeleton'

export const Route = createFileRoute('/clerk/(auth)/sign-in')({
  component: () => (
    <SignIn
      initialValues={{
        emailAddress: 'your_mail+caterpi11ar@gmail.com',
      }}
      fallback={<Skeleton className="h-120 w-100" />}
    />
  ),
})
