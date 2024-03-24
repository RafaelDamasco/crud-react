import { User } from '@/contexts/userContext'
import { http, HttpResponse } from 'msw'

const userAdmin: User = {
  email: 'ana@ana.com',
  name: 'ana',
  password: '',
  createdAt: new Date().toISOString(),
  permission: 'ADMIN',
  id: 1,
}
const user: User[] = Array.from({ length: 10 }, (_, index) => {
  return {
    email: `user${index}@user.com`,
    name: `User ${index}`,
    password: `userpassword${index}`,
    createdAt: new Date().toISOString(),
    permission: 'USER',
    id: index + 2,
  }
})

export const getUsersMock = http.get('/users', async ({ request }) => {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('name_like')

  let filteredUsers = [userAdmin, ...user]
  if (query) {
    filteredUsers = filteredUsers.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase()),
    )
  }
  return HttpResponse.json(filteredUsers)
})
