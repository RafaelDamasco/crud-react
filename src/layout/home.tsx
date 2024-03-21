import { Header } from '@/components/header'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export function HomeLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    const userAuth = sessionStorage.getItem('user-auth')

    !userAuth ? navigate('/sign-in') : navigate('/')
  }, [])
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />
      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  )
}
