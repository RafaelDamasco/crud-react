import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { AccountMenu } from './account-menu'
import { UsersContext } from '@/contexts/userContext'
import userEvent from '@testing-library/user-event'
import { ReactNode } from 'react'

const customRender = (ui: ReactNode, { providerProps }) => {
  return render(
    <UsersContext.Provider {...providerProps}>
      <BrowserRouter>{ui}</BrowserRouter>
    </UsersContext.Provider>,
  )
}
const providerProps = {
  value: {
    authenticatedUser: {
      id: 1,
      name: 'Rafael',
      password: '123456',
      email: 'teste@teste.com',
      permission: 'USER',
      createdAt: new Date().toDateString(),
    },
  },
}

describe('AccountMenu', () => {
  it('should show user Welcome, username', () => {
    customRender(<AccountMenu />, { providerProps })
    const button = screen.getByRole('button', { name: /welcome,/i })

    expect(button).toHaveTextContent(`Welcome, Rafael`)
  })

  it('should show user info', async () => {
    customRender(<AccountMenu />, { providerProps })
    const button = screen.getByRole('button', { name: /welcome,/i })
    const user = userEvent.setup()

    await user.click(button)

    expect(screen.getByText('Rafael')).toBeInTheDocument()
    expect(screen.getByText('teste@teste.com')).toBeInTheDocument()
  })
})
