import { render } from '@testing-library/react'
import { Pagination } from './pagination'
import { userEvent } from '@testing-library/user-event'

const onPageChangeCallback = vi.fn()

describe('Pagination', () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear()
  })
  it('should render page number and total of items correctly', () => {
    const wrapper = render(
      <Pagination
        currentPage={1}
        setCurrentPage={() => {}}
        perPage={5}
        totalItems={10}
      />,
    )
    expect(wrapper.getByText('Total of 10 item(s)')).toBeInTheDocument()
    expect(wrapper.getByText('Page 1 of 2')).toBeInTheDocument()
  })

  it('should be able to navigate to the next page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        currentPage={1}
        setCurrentPage={onPageChangeCallback}
        perPage={5}
        totalItems={10}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', { name: 'Next page' })

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(2)
  })

  it('should be able to navigate to the previous page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        currentPage={2}
        setCurrentPage={onPageChangeCallback}
        perPage={5}
        totalItems={10}
      />,
    )

    const previousPageButton = wrapper.getByRole('button', {
      name: 'Previous page',
    })

    await user.click(previousPageButton)
    expect(onPageChangeCallback).toHaveBeenCalledWith(1)
  })

  it('should be able to navigate to the first page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        currentPage={3}
        setCurrentPage={onPageChangeCallback}
        perPage={5}
        totalItems={15}
      />,
    )

    const firstPageButton = wrapper.getByRole('button', {
      name: 'First page',
    })

    await user.click(firstPageButton)
    expect(onPageChangeCallback).toHaveBeenCalledWith(1)
  })

  it('should be able to navigate to the last page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        currentPage={1}
        setCurrentPage={onPageChangeCallback}
        perPage={5}
        totalItems={15}
      />,
    )

    const lastPageButton = wrapper.getByRole('button', {
      name: 'Last page',
    })
    await user.click(lastPageButton)
    expect(onPageChangeCallback).toHaveBeenCalledWith(3)
  })
})
