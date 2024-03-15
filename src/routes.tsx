import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home/home'
import { SignIn } from './pages/auth/sign-in'
import { AuthLayout } from './layout/auth'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/login', element: <SignIn /> }],
  },
])
