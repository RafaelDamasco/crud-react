import { Home, Users } from 'lucide-react'
import { Separator } from './ui/separator'
import { NavLink } from './nav-link'
import { AccountMenu } from './account-menu'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        Softplan
        <Separator orientation="vertical" className="h-6" />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="size-4" />
            Home
          </NavLink>
          <NavLink to="/users">
            <Users className="size-4" />
            Users
          </NavLink>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
