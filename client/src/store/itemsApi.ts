import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../constants'
import { Item } from '../types/types'

export const itemsApi = createApi({
  reducerPath: 'itemsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Items'],
  endpoints: (builder) => ({
    getItems: builder.query<Item[], void>({
      query: () => '/items',
      providesTags: [{ type: 'Items', id: 'LIST' }],
    }),
    getItem: builder.query<Item, number>({
      query: (id) => `/items/${id}`,
      providesTags: (result, error, id) => [{ type: 'Items', id }],
    }),
    createItem: builder.mutation({
      query: (newItem) => ({
        url: '/items',
        method: 'POST',
        body: newItem,
      }),
      invalidatesTags: [{ type: 'Items', id: 'LIST' }],
    }),
    updateItem: builder.mutation({
      query: ({ id, ...updatedItem }) => ({
        url: `/items/${id}`,
        method: 'PUT',
        body: updatedItem,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Items', id },
        { type: 'Items', id: 'LIST' },
      ],
    }),
    deleteItem: builder.mutation({
      query: (id) => ({
        url: `/items/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Items', id: 'LIST' }],
    }),
  }),
})

export const {
  useGetItemsQuery,
  useGetItemQuery,
  useCreateItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
} = itemsApi
