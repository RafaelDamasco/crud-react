import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableRow, TableCell } from '@/components/ui/table'
import { User, UsersContext } from '@/contexts/userContext'
import { X, Search, Edit } from 'lucide-react'
import { useContext, useState } from 'react'
import { UserEdit } from './user-edit'

interface UserTableRowProps {
  user: User
}
export function UserTableRow({ user }: UserTableRowProps) {
  const { deleteUser, authenticatedUser } = useContext(UsersContext)
  const [openModal, setOpenModal] = useState<boolean>(false)

  async function handleDeleteUser(id: number) {
    await deleteUser(id)
  }

  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs">
          <Search className="size-3" />
          <span className="sr-only">User details</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">{user.id}</TableCell>
      <TableCell className="font-medium">{user.name}</TableCell>
      <TableCell>
        {authenticatedUser?.permission === 'ADMIN' && (
          <Dialog open={openModal} onOpenChange={setOpenModal}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="xs">
                <Edit className="mr-2 size-3" />
                Edit
              </Button>
            </DialogTrigger>

            <UserEdit user={user} setOpenModal={setOpenModal} />
          </Dialog>
        )}
      </TableCell>
      <TableCell>
        {authenticatedUser?.permission === 'ADMIN' &&
          user.permission !== 'ADMIN' && (
            <Button
              variant="ghost"
              size="xs"
              onClick={() => handleDeleteUser(user.id)}
            >
              <X className="mr-2 size-3" />
              Delete
            </Button>
          )}
      </TableCell>
    </TableRow>
  )
}
