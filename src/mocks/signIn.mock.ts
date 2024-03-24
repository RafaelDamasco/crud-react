import { SignInFormType } from '@/pages/auth/sign-in'
import { http, HttpResponse } from 'msw'

export const signInMock = http.post<never, SignInFormType>(
  '/login',
  async ({ request }) => {
    const { email, password } = await request.json()

    if (email === 'ana@ana.com' && password === 'ana123') {
      localStorage.setItem('status', '200')
      return new HttpResponse(null, {
        status: 200,
      })
    }
    return new HttpResponse(null, { status: 401 })
  },
)
