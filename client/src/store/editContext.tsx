import React, { createContext, useContext, useState } from 'react'
import { Item } from '../types/types'

interface EditContextType {
  isEditing: boolean
  setIsEditing: (editing: boolean) => void
  editItem: Item | null
  setEditItem: (item: Item | null) => void
}

const EditContext = createContext<EditContextType | null>(null)

export const EditProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editItem, setEditItem] = useState<Item | null>(null)

  return (
    <EditContext.Provider
      value={{ isEditing, setIsEditing, editItem, setEditItem }}
    >
      {children}
    </EditContext.Provider>
  )
}

export const useEditContext = () => {
  const context = useContext(EditContext)
  if (!context) {
    throw new Error('useEditContext must be used within an EditProvider')
  }
  return context
}
