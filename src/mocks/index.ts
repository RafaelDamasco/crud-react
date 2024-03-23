import { env } from '@/env'
import { setupWorker } from 'msw/browser'
import { signInMock } from './sign-in-mock'
import { registerUserMock } from './register-user.mock'

export const worker = setupWorker(signInMock)

export async function enableMSW() {
  if (env.MODE !== 'test') return
  await worker.start()
}
