import { render, screen } from '@testing-library/react'
import { SignInForm } from './sign-in-form'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

const handleSignIn = vi.fn()

describe('SignInForm', () => {
  it('should show sign in page correctly', () => {
    render(<SignInForm handleSignIn={handleSignIn} />, {
      wrapper: BrowserRouter,
    })

    const inputEmail = screen.getByLabelText(/e-mail/i)
    const inputPassword = screen.getByLabelText(/password/i)
    const button = screen.getByRole('button', { name: /enter/i })

    expect(inputEmail).toBeVisible()
    expect(inputPassword).toBeVisible()
    expect(button).toBeVisible()
  })

  it('should show error message when fields are empty', async () => {
    render(<SignInForm handleSignIn={handleSignIn} />, {
      wrapper: BrowserRouter,
    })
    const button = screen.getByRole('button', { name: /enter/i })

    const user = userEvent.setup()
    await user.click(button)

    expect(screen.getByText('Invalid email')).toBeVisible()

    expect(
      screen.getByText('String must contain at least 6 character(s)'),
    ).toBeVisible()
  })

  it('should type into email and password fields and submit the form', async () => {
    render(<SignInForm handleSignIn={handleSignIn} />, {
      wrapper: BrowserRouter,
    })
    const mockEmail = 'teste@teste.com'
    const mockPassword = '123456'
    const inputEmail = screen.getByLabelText(/e-mail/i)
    const inputPassword = screen.getByLabelText(/password/i)
    const button = screen.getByRole('button', { name: /enter/i })

    const user = userEvent.setup()
    await user.type(inputEmail, mockEmail)
    await user.type(inputPassword, mockPassword)
    await user.click(button)

    expect(screen.queryByText('Invalid email')).not.toBeInTheDocument()
    expect(
      screen.queryByText('String must contain at least 6 character(s)'),
    ).not.toBeInTheDocument()
    expect(inputEmail).toHaveValue(mockEmail)
    expect(inputPassword).toHaveValue(mockPassword)
    expect(handleSignIn).toHaveBeenCalledTimes(1)
    expect(handleSignIn).toHaveBeenCalledWith(
      {
        email: mockEmail,
        password: mockPassword,
      },
      expect.anything(),
    )
  })
})
