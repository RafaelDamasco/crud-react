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
import { UserEdit } from '@/pages/app/users/user-edit'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { useState } from 'react'

export function AccountMenu() {
  const { signOut, getAuthenticatedUser } = useAuth()
  const authenticatedUser = getAuthenticatedUser()
  const [openModal, setOpenModal] = useState<boolean>(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex select-none items-center gap-2"
        >
          Welcome, {authenticatedUser?.name}
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>{authenticatedUser?.name}</span>
          <span className="text-xs font-normal text-muted-foreground">
            {authenticatedUser?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Dialog>
            <DialogTrigger
              onClick={(event) => event.stopPropagation()}
              className="flex items-center"
            >
              <UserCog className="mr-2 size-4" />
              <span>Edit User</span>
            </DialogTrigger>

            <UserEdit user={authenticatedUser!} setOpenModal={setOpenModal} />
          </Dialog>
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
