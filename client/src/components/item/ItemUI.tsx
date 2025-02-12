import { Link } from 'react-router-dom'
import { Item } from '../../types/types'
import { FIELD_LABELS, MOCK_IMAGE_URL } from '../../constants'

type ItemUIProps = {
  data: Item
  deleteHandler: (e: React.MouseEvent) => void
  editHandler: () => void
  pathName: string
  isFullView?: boolean
}

export const ItemUI = ({
  data,
  deleteHandler,
  editHandler,
  pathName,
  isFullView,
}: ItemUIProps) => {
  return (
    <>
      {!isFullView && (
        <div className="h-full flex flex-col bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 p-4">
          <img
            src={data.image || MOCK_IMAGE_URL}
            alt={data.name || 'Здесь должно быть изображение товара'}
            className="w-full max-w-full h-40 object-cover rounded-md mb-3 flex-shrink-0"
          />
          <div className="flex-grow mb-3">
            <h3 className="text-lg font-semibold text-gray-900">{data.name}</h3>
            <p className="text-sm text-gray-600">{data.location}</p>
            <p className="text-sm text-gray-600">{data.type}</p>
          </div>

          <Link
            to={pathName}
            className="mt-auto px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md w-full text-center"
          >
            Открыть
          </Link>
        </div>
      )}

      {isFullView && (
        <div className="p-4 shadow-md bg-white w-full h-full flex flex-col justify-center items-center text-center flex-1 space-y-3">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {data.name}
          </h2>

          <div className="space-y-2 text-gray-700">
            <img
              src={data.image || MOCK_IMAGE_URL}
              alt={data.name || 'Изображение товара'}
              className="w-full max-w-full h-40 object-cover rounded-md mb-3 flex-shrink-0"
            />
            {Object.entries(data)
              .filter(
                ([key]) => key !== 'id' && key !== 'name' && key !== 'image'
              )
              .map(([key, value]) => (
                <p key={key} className="text-sm">
                  <span className="font-medium">
                    {FIELD_LABELS[key] || key}:
                  </span>{' '}
                  {String(value)}
                </p>
              ))}
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={editHandler}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Редактировать
            </button>
            <button
              onClick={(e) => deleteHandler(e)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Удалить
            </button>
          </div>
        </div>
      )}
    </>
  )
}
