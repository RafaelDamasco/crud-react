import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from '@/components/ui/table'
import { UserTableRow } from './user-table-row'
import { UserTableFilters } from './user-table-filters'
import { UsersContext } from '@/contexts/userContext'
import { useContext } from 'react'

export function Users() {
  const { users } = useContext(UsersContext)
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Users</h1>
      <div className="space-y-2.5">
        <UserTableFilters />
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identifier</TableHead>
                <TableHead>User</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users?.map((user, index) => (
                <UserTableRow key={index} user={user} />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
