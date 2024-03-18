import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import './global.css'
import { UsersProvider } from './contexts/userContext'
import { Toaster } from 'sonner'

export function App() {
  return (
    <UsersProvider>
      <Toaster richColors />
      <RouterProvider router={router} />
    </UsersProvider>
  )
}
