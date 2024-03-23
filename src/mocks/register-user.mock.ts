import { User } from '@/contexts/userContext'
import { http, HttpResponse } from 'msw'

export const registerUserMock = http.post<never, User>(
  'register',
  async ({ request }) => {
    const { name } = await request.json()
    if (name === 'Rafael Euclides Damasco') {
      return new HttpResponse(null, {
        status: 201,
      })
    } else {
      return new HttpResponse(null, {
        status: 400,
      })
    }
  },
)
