import { useNavigate, useParams } from 'react-router-dom'
import { useDeleteItemMutation, useGetItemQuery } from '../../store/itemsApi'
import { NotFoundPage } from '../NotFoundPage/NotFoundPage'
import { ItemUI } from '../../components/item/ItemUI'
import { useEditContext } from '../../store/context'
import { FormPage } from '../FormPage/FormPage'

export const ItemPage = () => {
  const { isEditing, setIsEditing, editItem, setEditItem } = useEditContext()
  const id = Number(useParams().id)
  const navigate = useNavigate()
  const { data: item, error, isLoading } = useGetItemQuery(id)
  const [deleteItem] = useDeleteItemMutation()

  if (isLoading) return <p>Загрузка...</p>
  if (error || !item) return <NotFoundPage />

  const handleDelete = async (e: React.MouseEvent) => {
    await deleteItem(item.id)
    navigate('/')
  }

  const editHandler = () => {
    setIsEditing(true)
    setEditItem(item)
    console.log('edit')
  }

  return isEditing ? (
    <FormPage />
  ) : (
    <ItemUI
      data={item}
      deleteHandler={handleDelete}
      editHandler={editHandler}
      pathName={`/item/${item.id}`}
      isFullView={true}
    />
  )
}
