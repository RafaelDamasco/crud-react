import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { UsersContext } from '@/contexts/userContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

const searchFormSchema = z.object({
  query: z.string().optional(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function UserTableFilters() {
  // @ts-ignore
  const [searchParams, setSearchParams] = useSearchParams()
  const { getUsers } = useContext(UsersContext)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })
  async function handleSearchUsers(data: SearchFormInputs) {
    setSearchParams(data.query ? { query: data.query } : {})
    await getUsers(data.query)
  }
  return (
    <form
      onSubmit={handleSubmit(handleSearchUsers)}
      className="flex items-center gap-2"
    >
      <Label htmlFor="query" className="text-sm font-semibold">
        Filters:
      </Label>
      <Input
        id="query"
        placeholder="User name"
        className="h-8 w-[320px]"
        {...register('query')}
      />

      <Button
        type="submit"
        variant="secondary"
        size="xs"
        disabled={isSubmitting}
      >
        <Search className="mr-2 size-4" />
        Filter results
      </Button>
    </form>
  )
}
