import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import './global.css'

export function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
