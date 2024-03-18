import { Button } from '@/components/ui/button'
import { TableRow, TableCell } from '@/components/ui/table'
import { User } from '@/contexts/userContext'
import { X, Search, Edit } from 'lucide-react'

interface UserTableRowProps {
  user: User
}
export function UserTableRow({ user }: UserTableRowProps) {
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
        <Button variant="ghost" size="xs">
          <Edit className="mr-2 size-3" />
          Edit
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-2 size-3" />
          Delete
        </Button>
      </TableCell>
    </TableRow>
  )
}
