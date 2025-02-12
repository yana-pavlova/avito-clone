import { useCallback, useEffect, useState } from 'react'
import { useDeleteItemMutation, useGetItemsQuery } from '../../store/itemsApi'
import { Item } from '../../types/types'
import { ItemUI } from '../../components/item/ItemUI'

export const ListPage = () => {
  const [deleteItem] = useDeleteItemMutation()
  const { data: items, error, isLoading } = useGetItemsQuery()
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const totalPages = items ? Math.ceil(items.length / itemsPerPage) : 1
  const handleDelete = useCallback(
    (id: number) => () => deleteItem(id),
    [deleteItem]
  )

  const editHandler = () => {
    console.log('edit')
  }

  if (isLoading) return <p>Создание объявления...</p>
  if (error) return <p>Ошибка при создании</p>

  const displayedItems = items?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="w-full mt-6 mb-4 px-4 flex flex-col flex-grow gap-4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 auto-rows-fr">
        {displayedItems?.map((item: Item) => (
          <article key={item.id} className="h-full flex flex-col">
            <ItemUI
              data={item}
              deleteHandler={handleDelete(item.id)}
              editHandler={editHandler}
              pathName={`/item/${item.id}`}
            />
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
