import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/app/home/home'
import { SignIn } from './pages/auth/sign-in'
import { AuthLayout } from './layout/auth'
import { HomeLayout } from './layout/home'
import { Users } from './pages/app/users/users'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/users', element: <Users /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/sign-in', element: <SignIn /> }],
  },
])
