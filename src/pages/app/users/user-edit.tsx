import { Button } from '@/components/ui/button'
import {
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableRow, TableCell } from '@/components/ui/table'
import { User, UsersContext } from '@/contexts/userContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@radix-ui/react-label'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const editUserFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
})

type EditUserFormType = z.infer<typeof editUserFormSchema>
interface UserEditPros {
  user: User
  setOpenModal: (value: boolean) => void
}
export function UserEdit({ user, setOpenModal }: UserEditPros) {
  const { updateUser } = useContext(UsersContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<EditUserFormType>({
    resolver: zodResolver(editUserFormSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      password: user.password,
    },
  })

  async function handleEditUser(data: EditUserFormType) {
    const { email, name, password } = data
    const { permission, createdAt } = user
    try {
      await updateUser(user.id, {
        email,
        name,
        password,
        permission,
        createdAt,
      })
      toast.success('User updated successfully!')
      setOpenModal(false)
    } catch (error) {
      toast.error('Error when trying to update user')
    }
  }
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>User: {user?.name}</DialogTitle>
        <DialogDescription>Id: {user?.id}</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <form onSubmit={handleSubmit(handleEditUser)}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  <Label htmlFor="name">User</Label>
                </TableCell>
                <TableCell className="flex justify-end">
                  <Input id="name" type="text" {...register('name')} />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  <Label htmlFor="email">E-mail</Label>
                </TableCell>
                <TableCell className="flex justify-end">
                  <Input id="email" type="email" {...register('email')} />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  <Label htmlFor="password">Password</Label>
                </TableCell>
                <TableCell className="flex justify-end">
                  <Input
                    id="password"
                    type="password"
                    {...register('password')}
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            Edit
          </Button>
        </form>
      </div>
    </DialogContent>
  )
}
