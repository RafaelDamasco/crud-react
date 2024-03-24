import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { User } from '@/contexts/userContext'
import { format } from 'date-fns'

interface UserDetailsProps {
  user: User
}

export function UserDetails({ user }: UserDetailsProps) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>User: {user?.name}</DialogTitle>
        <DialogDescription>Id: {user?.id}</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Permissions
              </TableCell>
              <TableCell className="flex justify-end">
                {user.permission}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">User</TableCell>
              <TableCell className="flex justify-end">{user.name}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">{user.email}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Created At
              </TableCell>
              <TableCell className="flex justify-end">
                {format(user.createdAt, 'd/MM/y')}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </DialogContent>
  )
}
