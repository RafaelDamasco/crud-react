import { render } from '@testing-library/react'
import { NavLink } from './nav-link'
import { MemoryRouter } from 'react-router-dom'

describe('NavLink', () => {
  it('should highlight the nav link when is the current page link', () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/users']}>{children}</MemoryRouter>
          )
        },
      },
    )
    expect(wrapper.getByText('Home').dataset.current).toEqual('false')
    expect(wrapper.getByText('Users').dataset.current).toEqual('true')
  })
})
