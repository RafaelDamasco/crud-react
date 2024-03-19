import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { DropdownMenu, DropdownMenuContent } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { ChevronDown, LogOut, UserCog } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'

export function AccountMenu() {
  const { signOut, getAuthenticatedUser } = useAuth()
  const user = getAuthenticatedUser()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex select-none items-center gap-2"
        >
          Welcome, {user?.name}
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>{user?.name}</span>
          <span className="text-xs font-normal text-muted-foreground">
            {user?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center ">
          <UserCog className="mr-2 size-4" />
          <span>Edit User</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={signOut}
          className="dark:text-0 flex items-center text-rose-500 cursor-pointer"
        >
          <LogOut className="mr-2 size-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
