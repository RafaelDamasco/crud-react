import { User2Icon } from 'lucide-react'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export function AuthLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    const userAuth = sessionStorage.getItem('user-auth')

    !userAuth ? navigate('/sign-in') : navigate('/')
  }, [])
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <User2Icon className="size-5" />
          <span className="font-semibold">CRUD</span>
        </div>
        <div className="m-auto">Softplan</div>
        <footer className="text-sm">
          Todos os direitos reservados &copy; {new Date().getFullYear()}
        </footer>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
