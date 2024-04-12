import { useContext } from 'react'
import { UsersContext } from '@/contexts/userContext'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { SignInForm, SignInFormType } from './sign-in-form'

export function SignIn() {
  const navigate = useNavigate()
  const { signIn } = useContext(UsersContext)

  async function handleSignIn(data: SignInFormType) {
    try {
      await signIn(data.email, data.password)
      toast.success('User signed in successfully!')
      navigate('/')
    } catch (error) {
      toast.error('E-mail or password incorrect!')
    }
  }
  return (
    <>
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <h1 className="text-2xl font-semibold tracking-tight text-center">
            Sign In
          </h1>
          <SignInForm handleSignIn={handleSignIn} />
        </div>
      </div>
    </>
  )
}
