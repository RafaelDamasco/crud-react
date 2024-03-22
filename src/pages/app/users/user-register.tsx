import { Button } from '@/components/ui/button'
import { DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { UsersContext } from '@/contexts/userContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const signUpFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
})

type SignUpFormType = z.infer<typeof signUpFormSchema>

export function UserRegister() {
  const { createUser, users } = useContext(UsersContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })
  async function handleCreateNewUser(data: SignUpFormType) {
    const { email, name, password } = data

    if (users.some((user) => user.email === email)) {
      toast.error('Email already in use')
      return
    }
    try {
      await createUser({ email, name, password })
      reset()
      toast.success('User registered successfully!')
    } catch (error) {
      toast.error('Error when trying to register')
    }
  }
  return (
    <DialogContent>
      <h1 className="text-2xl font-semibold tracking-tight text-center">
        Create account
      </h1>
      <form className="space-y-4" onSubmit={handleSubmit(handleCreateNewUser)}>
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" {...register('name')} />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" {...register('email')} />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" {...register('password')} />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <Button className="w-full" type="submit" disabled={isSubmitting}>
          Finish Sign Up
        </Button>
        <p className="text-m leading-rtext-muted-foreground px-6 text-center text-sm">
          By continuing you agree to our{' '}
          <a className="underline underline-offset-4" href="">
            terms of service{' '}
          </a>
          and{' '}
          <a className="underline underline-offset-4" href="">
            privacy policies
          </a>
        </p>
      </form>
    </DialogContent>
  )
}
