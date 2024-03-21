import { User, UsersContext } from '@/contexts/userContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export function useAuth() {
  const { users } = useContext(UsersContext)
  const navigate = useNavigate()

  const getAuthenticatedUser = (): User | null => {
    const userAuth = sessionStorage.getItem('user-auth')
    const user = users.find((user: User) => user.email === userAuth)
    return user || null
  }

  const signIn = (email: string) => {
    sessionStorage.setItem('user-auth', email)
    navigate('/')
  }

  const signOut = () => {
    sessionStorage.removeItem('user-auth')
    navigate('/sign-in')
  }

  return {
    isAuthenticated: !!sessionStorage.getItem('user-auth'),
    getAuthenticatedUser,
    signIn,
    signOut,
  }
}
