import { User } from '@/contexts/userContext'
import { http, HttpResponse } from 'msw'

export const registerUserMock = http.post<never, User>(
  'register',
  async ({ request }) => {
    const { name } = await request.json()
    if (name === 'Rafael Euclides Damasco') {
      const user: User = {
        id: 20,
        name: 'Rafael Euclides Damasco',
        email: 'rafael@example.com',
        password: '',
        createdAt: new Date().toISOString(),
        permission: 'ADMIN',
      }
      return HttpResponse.json(
        { user },
        {
          status: 201,
        },
      )
    } else {
      return new HttpResponse(null, {
        status: 400,
      })
    }
  },
)
