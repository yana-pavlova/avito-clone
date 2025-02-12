import { useEffect, useState } from 'react'
import { useGetItemsQuery } from '../../store/itemsApi'
import { Item } from '../../types/types'
import { ItemUI } from '../../components/item/ItemUI'
import { useSearchContext } from '../../store/searchContext'

export const ListPage = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const { data: items, error, isLoading } = useGetItemsQuery()

  const { searchInput } = useSearchContext()

  const filteredItems =
    items?.filter((el) => {
      return el.name.toLowerCase().includes(searchInput.toLowerCase().trim())
    }) || []

  const itemsPerPage = 5
  const totalPages = filteredItems.length
    ? Math.ceil(filteredItems.length / itemsPerPage)
    : 1

  const displayedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [totalPages])

  if (isLoading) return <p>загружаем данные...</p>
  if (error) return <p>Ошибка при получении данных с сервера</p>

  return (
    <div className="w-full mt-6 mb-4 px-4 flex flex-col flex-grow gap-4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 auto-rows-fr">
        {displayedItems?.map((item: Item) => (
          <article key={item.id} className="h-full flex flex-col">
            <ItemUI data={item} pathName={`/item/${item.id}`} />
          </article>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center justify-center gap-1 w-full overflow-hidden">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
          className="px-3 py-1 text-sm border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-200"
        >
          &lt;&lt;
        </button>

        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-3 py-1 text-sm border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-200"
          style={{ cursor: 'pointer' }}
        >
          &lt;
        </button>

        <span className="px-3 py-1 text-sm text-gray-700 font-medium">
          {currentPage} из {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-3 py-1 text-sm border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-200"
        >
          &gt;
        </button>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(totalPages)}
          className="px-3 py-1 text-sm border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-200"
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  )
}
