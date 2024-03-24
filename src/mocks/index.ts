import { env } from '@/env'
import { setupWorker } from 'msw/browser'
import { registerUserMock } from './registerUser.mock'
import { getUsersMock } from './getUsers.mock'
import { updateUserMock } from './updateUser.mock'
import { deleteUserMock } from './deleteUser.mock'
import { signInMock } from './signIn.mock'

export const worker = setupWorker(
  signInMock,
  registerUserMock,
  getUsersMock,
  updateUserMock,
  deleteUserMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') return
  await worker.start()
}
