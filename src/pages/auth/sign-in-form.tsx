import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export type SignInFormType = z.infer<typeof signInFormSchema>

interface SignInFormProps {
  handleSignIn: (data: SignInFormType) => void
}
export function SignInForm({ handleSignIn }: SignInFormProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInFormType>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  return (
    <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
      <div className="space-y-2">
        <Label htmlFor="email">Your e-mail</Label>
        <Input id="email" type="text" {...register('email')} />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Your password</Label>
        <Input id="password" type="password" {...register('password')} />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
      <Button className="w-full" type="submit" disabled={isSubmitting}>
        Enter
      </Button>
    </form>
  )
}
