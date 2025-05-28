import { ref } from 'vue'
import { fetchProducts } from '@/api/services/productService'
import type { Product } from '@/model/types'

export const useProducts = () => {
  const products = ref<Product[]>([])
  const loading = ref(false)

  const fetchAll = async () => {
    loading.value = true
    products.value = await fetchProducts()
    loading.value = false
  }

  return { products, fetchAll }
}
