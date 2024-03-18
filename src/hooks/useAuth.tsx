import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function useAuth() {
  const navigate = useNavigate()

  useEffect(() => {
    const userAuth = sessionStorage.getItem('user-auth')
    if (!userAuth) {
      navigate('/sign-in')
    }
  }, [])

  const signOut = () => {
    sessionStorage.removeItem('user-auth')
    navigate('/sign-in')
  }

  return {
    isAuthenticated: !!sessionStorage.getItem('user-auth'),
    signOut,
  }
}
