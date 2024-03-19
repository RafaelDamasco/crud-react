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
  getUsers: (query?: string) => Promise<void>
  createUser: (data: CreateUserInput) => Promise<void>
  deleteUser: (id: number) => Promise<void>
  updateUser: (id: number, data: EditUserInput) => Promise<void>
}
export const UsersContext = createContext({} as UsersContextProps)

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<User[]>([])

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
  }, [])

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
      value={{ users, getUsers, createUser, deleteUser, updateUser }}
    >
      {children}
    </UsersContext.Provider>
  )
}
