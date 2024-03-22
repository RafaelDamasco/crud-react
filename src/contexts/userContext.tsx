import { api } from '@/lib/axios'
import { createContext, useEffect, useState } from 'react'

export interface User {
  id: number
  name: string
  email: string
  permission: 'ADMIN' | 'USER'
  password: string
  createdAt: string
}

interface CreateUserInput {
  email: string
  name: string
  password: string
}
interface EditUserInput {
  email: string
  name: string
  password: string
  permission: 'ADMIN' | 'USER'
  createdAt: string
}

interface UsersProviderProps {
  children: React.ReactNode
}
interface UsersContextProps {
  users: User[]
  authenticatedUser: User
  getUsers: (query?: string) => Promise<void>
  createUser: (data: CreateUserInput) => Promise<void>
  deleteUser: (id: number) => Promise<void>
  updateUser: (id: number, data: EditUserInput) => Promise<void>
  signIn: (user: User) => void
  signOut: () => void
}
export const UsersContext = createContext({} as UsersContextProps)

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<User[]>([])
  const [authenticatedUser, setAuthenticatedUser] = useState<User>({} as User)

  async function getAuthenticatedUser() {
    const userAuth = sessionStorage.getItem('user-auth')
    const user = users.find((user: User) => user.email === userAuth)
    if (user) {
      signIn(user)
    }
  }

  const signIn = (user: User) => {
    const { email } = user
    sessionStorage.setItem('user-auth', email)
    setAuthenticatedUser(user)
  }

  const signOut = () => {
    sessionStorage.removeItem('user-auth')
    setAuthenticatedUser({} as User)
  }

  async function getUsers(query?: string) {
    const response = await api.get('users', {
      params: {
        name_like: query,
      },
    })
    setUsers(response.data)
  }

  useEffect(() => {
    getUsers()
  }, [setUsers])

  useEffect(() => {
    getAuthenticatedUser()
  }, [users])

  async function createUser(data: CreateUserInput) {
    const { email, name, password } = data

    const response = await api.post('users', {
      email,
      name,
      password,
      permission: 'USER',
      createdAt: new Date(),
    })
    setUsers((prev) => [...prev, response.data])
  }

  async function deleteUser(id: number) {
    await api.delete(`users/${id}`)
    setUsers((prev) => prev.filter((user) => user.id !== id))
  }

  async function updateUser(id: number, data: EditUserInput) {
    const { email, name, password, permission, createdAt } = data
    const response = await api.put(`users/${id}`, {
      email,
      name,
      password,
      permission,
      createdAt,
    })
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? response.data : user)),
    )
  }

  return (
    <UsersContext.Provider
      value={{
        users,
        authenticatedUser,
        getUsers,
        createUser,
        deleteUser,
        updateUser,
        signIn,
        signOut,
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}
