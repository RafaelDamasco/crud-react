import { User } from '@/contexts/userContext'
import { http, HttpResponse } from 'msw'

export const updateUserMock = http.put<never, User>(
  '/users/:id',
  async ({ request }) => {
    const { name } = await request.json()
    if (name === 'Rafael') {
      return new HttpResponse(null, {
        status: 204,
      })
    } else {
      return new HttpResponse(null, {
        status: 400,
      })
    }
  },
)
