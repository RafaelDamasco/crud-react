import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

export function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <h1>Hello world</h1>
    </div>
  )
}
