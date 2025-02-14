import { useNavigate, useParams } from 'react-router-dom'
import { useDeleteItemMutation, useGetItemQuery } from '../../store/itemsApi'
import { NotFoundPage } from '../NotFoundPage/NotFoundPage'
import { ItemUI } from '../../components/item/ItemUI'
import { useEditContext } from '../../store/editContext'
import { FormPage } from '../FormPage/FormPage'
import { useEffect } from 'react'
import { BackButton } from '../../components/back-button/BackButton'

export const ItemPage = () => {
  const { isEditing, setIsEditing, setEditItem } = useEditContext()
  const id = Number(useParams().id)
  const navigate = useNavigate()
  const { data: item, error, isLoading } = useGetItemQuery(id)
  const { refetch } = useGetItemQuery(id, { skip: isEditing })
  const [deleteItem] = useDeleteItemMutation()

  useEffect(() => {
    setIsEditing(false)
  }, [])

  useEffect(() => {
    if (!isEditing) {
      refetch()
    }
  }, [isEditing])

  if (isLoading) return <p>Загрузка...</p>
  if (error || !item) return <NotFoundPage />

  const handleDelete = async (e: React.MouseEvent) => {
    await deleteItem(item.id)
    navigate('/')
  }

  const editHandler = () => {
    setIsEditing(true)
    setEditItem(item)
  }

  return isEditing ? (
    <FormPage />
  ) : (
    <>
      <ItemUI
        data={item}
        deleteHandler={handleDelete}
        editHandler={editHandler}
        pathName={`/item/${item.id}`}
        isFullView={true}
      />
      <BackButton onClick={() => navigate('/list')} />
    </>
  )
}
