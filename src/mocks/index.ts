import { env } from '@/env'
import { setupWorker } from 'msw/browser'
import { signInMock } from './sign-in-mock'
import { registerUserMock } from './register-user.mock'
import { getUsersMock } from './get-users.mock'
import { updateUserMock } from './updateUser.mock'

export const worker = setupWorker(
  signInMock,
  registerUserMock,
  getUsersMock,
  updateUserMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') return
  await worker.start()
}