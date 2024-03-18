import { Button } from '@/components/ui/button'
import { TableRow, TableCell } from '@/components/ui/table'
import { X, Search, Edit } from 'lucide-react'

export function UserTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs">
          <Search className="size-3" />
          <span className="sr-only">User details</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        1020ss01o102s2oa
      </TableCell>
      <TableCell className="font-medium">Rafael Euclides Damasco</TableCell>
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
