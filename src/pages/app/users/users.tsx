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
import { useContext, useState } from 'react'
import { Button } from '@/components/ui/button'
import { UserPlusIcon } from 'lucide-react'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { UserRegister } from './user-register'
import { Pagination } from '@/components/pagination'

export function Users() {
  const { users } = useContext(UsersContext)
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 5
  const startIndex = (currentPage - 1) * perPage
  const endIndex = startIndex + perPage
  const usersOnCurrentPage = users.slice(startIndex, endIndex)

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Users</h1>
      <div className="space-y-2.5">
        <div className="flex justify-between">
          <UserTableFilters />
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <UserPlusIcon className="mr-2 size-4" />
                Add User
              </Button>
            </DialogTrigger>
            <UserRegister />
          </Dialog>
        </div>
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
              {usersOnCurrentPage.map((user) => (
                <UserTableRow
                  key={`${user.id}-${user.name}-${user.email}`}
                  user={user}
                />
              ))}
            </TableBody>
          </Table>
        </div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          perPage={perPage}
          totalItems={users.length}
        />
      </div>
    </div>
  )
}
