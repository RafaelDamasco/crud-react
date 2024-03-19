import { User, UsersContext } from '@/contexts/userContext'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function useAuth() {
  const { users } = useContext(UsersContext)
  const navigate = useNavigate()

  useEffect(() => {
    const userAuth = sessionStorage.getItem('user-auth')
    if (!userAuth) {
      navigate('/sign-in')
    }
  }, [])

  const getAuthenticatedUser = (): User | null => {
    const userAuth = sessionStorage.getItem('user-auth')
    const user = users.find((user: User) => user.email === userAuth)
    return user || null
  }

  const signOut = () => {
    sessionStorage.removeItem('user-auth')
    navigate('/sign-in')
  }

  return {
    isAuthenticated: !!sessionStorage.getItem('user-auth'),
    signOut,
    getAuthenticatedUser,
  }
}
