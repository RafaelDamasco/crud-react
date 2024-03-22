import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { Button } from './ui/button'
import { useState } from 'react'

interface PaginationProps {
  currentPage: number
  setCurrentPage: (page: number) => void
  perPage: number
  totalItems: number
}

export function Pagination({
  currentPage,
  setCurrentPage,
  perPage,
  totalItems,
}: PaginationProps) {
  // eslint-disable-next-line
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const pages = Math.ceil(totalItems / perPage) || 1
  const goToFirstPage = () => {
    setCurrentPage(1)
    setItemsPerPage(5)
  }

  const goToPreviousPage = () => {
    const newPage = Math.max(currentPage - 1, 1)
    setCurrentPage(newPage)
    setItemsPerPage((prev) => prev - 5)
  }

  const goToNextPage = () => {
    const newPage = currentPage + 1
    setCurrentPage(newPage)
    setItemsPerPage((prev) => prev + 5)
  }

  const goToLastPage = () => {
    setCurrentPage(pages)
    setItemsPerPage(pages * 5)
  }
  return (
    <div className="flex items-center justify-between">
      <span>Total of {totalItems} item(s)</span>
      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Page {currentPage} of {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="size-8 p-0"
            onClick={goToFirstPage}
            disabled={currentPage === 1}
          >
            <ChevronsLeft className="size-4" />
            <span className="sr-only">First page</span>
          </Button>
          <Button
            variant="outline"
            className="size-8 p-0"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="size-4" />
            <span className="sr-only">Previous page</span>
          </Button>
          <Button
            variant="outline"
            className="size-8 p-0"
            onClick={goToNextPage}
            disabled={currentPage === pages}
          >
            <ChevronRight className="size-4" />
            <span className="sr-only">Next page</span>
          </Button>
          <Button
            variant="outline"
            className="size-8 p-0"
            onClick={goToLastPage}
            disabled={currentPage === pages}
          >
            <ChevronsRight className="size-4" />
            <span className="sr-only">Last page</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
