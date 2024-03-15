import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home/home'
import { SignIn } from './pages/auth/sign-in'
import { AuthLayout } from './layout/auth'
import { SignUp } from './pages/auth/sign-up'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
