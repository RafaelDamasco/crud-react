import { api } from '@/lib/axios'
import { createContext, useEffect, useState } from 'react'

export interface User {
  id: number
  name: string
  email: string
  password: string
  createdAt: string
}

interface CreateUserInput {
  email: string
  name: string
  password: string
}

interface UsersProviderProps {
  children: React.ReactNode
}
interface UsersContextProps {
  users: User[]
  getUsers: () => Promise<void>
  createUser: (data: CreateUserInput) => Promise<void>
}
export const UsersContext = createContext({} as UsersContextProps)

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<User[]>([])

  async function getUsers() {
    const response = await api.get('users')
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
      createdAt: new Date(),
    })
    setUsers((prev) => [...prev, response.data])
  }

  return (
    <UsersContext.Provider value={{ users, getUsers, createUser }}>
      {children}
    </UsersContext.Provider>
  )
}
