import { http, HttpResponse } from 'msw'

export const deleteUserMock = http.delete('/users/:id', async ({ params }) => {
  const { id } = params
  console.log('Deleting user with ID "%s"', id)
  return new HttpResponse(null, {
    status: 204,
  })
})
