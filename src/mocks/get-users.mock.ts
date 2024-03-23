import { User } from '@/contexts/userContext'
import { http, HttpResponse } from 'msw'

export const getUsersMock = http.get<never, never, User[]>('/users', () => {
  const user: User = {
    email: 'ana@ana.com',
    name: 'ana',
    password: '',
    createdAt: new Date().toISOString(),
    permission: 'ADMIN',
    id: 1,
  }

  return HttpResponse.json([user])
})
