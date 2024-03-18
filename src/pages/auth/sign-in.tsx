import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { Link, useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { UsersContext } from '@/contexts/userContext'
import { toast } from 'sonner'

const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type SignInFormType = z.infer<typeof signInFormSchema>

export function SignIn() {
  const { users } = useContext(UsersContext)
  const navigate = useNavigate()

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
  async function handleSignIn(data: SignInFormType) {
    try {
      let userExists = false
      let passwordCorrect = false

      users.forEach((user) => {
        if (user.email === data.email) {
          userExists = true
          if (user.password === data.password) {
            passwordCorrect = true
          }
        }
      })

      if (userExists) {
        if (passwordCorrect) {
          toast.success('User signed in successfully!')
          sessionStorage.setItem('user-auth', data.email)
          navigate('/')
        } else {
          toast.error('Wrong password')
        }
      } else {
        toast.error('Wrong email')
      }
    } catch (error) {
      toast.error('Error')
    }
  }
  return (
    <>
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-up">Register</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <h1 className="text-2xl font-semibold tracking-tight text-center">
            Sign In
          </h1>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Your e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
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
        </div>
      </div>
      <h1>SignIn</h1>
    </>
  )
}
