import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home/home/home'
import { SignIn } from './pages/auth/sign-in'
import { AuthLayout } from './layout/auth'
import { SignUp } from './pages/auth/sign-up'
import { HomeLayout } from './layout/home'
import { Users } from './pages/home/users/users'

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
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
