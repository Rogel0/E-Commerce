import api from '@/api/api'
import type { Product } from '@/model/types'

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await api.get<Product[]>('/products')
  return res.data
}

export const createProduct = async (data: Product): Promise<Product[]> => {
  const res = await api.post('/products', data)
  return res.data
}

export const updateProduct = async (id: number, data: Product): Promise<Product> => {
  const res = await api.put(`/products/${id}`, data)
  return res.data
}

export const deleteProduct = async (id: number): Promise<void> => {
  await api.delete(`/products/${id}`)
}
