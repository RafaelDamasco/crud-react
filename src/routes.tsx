import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home/home'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <SignIn /> },
])
