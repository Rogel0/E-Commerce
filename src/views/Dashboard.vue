<template>
  <div>
    <h3>Manage Users</h3>
    <form @submit.prevent="addUser">
      <input v-model="newUser" placeholder="Enter user name" />
      <button type="submit">Add User</button>
    </form>
    <el-table :data="users" style="width: 100%">
      <el-table-column prop="name" label="User Name" width="200"></el-table-column>
      <el-table-column label="Actions" width="200">
        <template #default="{ row, $index }">
          <button @click="removeUser($index)">Remove</button>
        </template>
      </el-table-column>
    </el-table>

    <h3>Manage Products</h3>
    <form @submit.prevent="addProduct">
      <input v-model="newProduct.name" placeholder="Product Name" />
      <input v-model="newProduct.price" placeholder="Product Price" type="number" />
      <button type="submit">Add Product</button>
    </form>
    <el-table :data="products" style="width: 100%">
      <el-table-column prop="name" label="Product Name" width="200"></el-table-column>
      <el-table-column prop="price" label="Product Price" width="200"></el-table-column>
      <el-table-column label="Actions" width="200">
        <template #default="{ row, $index }">
          <button @click="removeProduct($index)">Remove</button>
          <button @click="editProduct($index)">Edit</button>
        </template>
      </el-table-column>
    </el-table>

    <div style="margin-top: 20px; text-align: right">
      <button @click="onLogout">Logout</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElLoading } from 'element-plus'
import { useUserStore } from '@/stores/useUserStore'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const newUser = ref('')
const users = ref<string[]>([])
const newProduct = ref({ name: '', price: 0 })
const products = ref<{ name: string; price: number }[]>([])
const route = useRouter()

onMounted(() => {
  const storedUsers = localStorage.getItem('users')
  const storedProducts = localStorage.getItem('products')
  if (storedUsers) users.value = JSON.parse(storedUsers)
  if (storedProducts) products.value = JSON.parse(storedProducts)
})

const addUser = () => {
  if (newUser.value.trim()) {
    users.value.push(newUser.value)
    localStorage.setItem('users', JSON.stringify(users.value))
    newUser.value = ''
  }
}

const removeUser = (index: number) => {
  users.value.splice(index, 1)
  localStorage.setItem('users', JSON.stringify(users.value))
}

const addProduct = () => {
  if (newProduct.value.name.trim() && newProduct.value.price > 0) {
    products.value.push({ ...newProduct.value })
    localStorage.setItem('products', JSON.stringify(products.value))
    newProduct.value = { name: '', price: 0 }
  }
}

const removeProduct = (index: number) => {
  products.value.splice(index, 1)
  localStorage.setItem('products', JSON.stringify(products.value))
}

const editProduct = (index: number) => {
  const product = products.value[index]
  const updatedName = prompt('Enter new name:', product.name)
  const updatedPrice = prompt('Enter new price:', product.price.toString())
  if (updatedName && updatedPrice) {
    products.value[index] = { name: updatedName, price: parseFloat(updatedPrice) }
    localStorage.setItem('products', JSON.stringify(products.value))
  }
}

const onLogout = () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Logging out...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loading.close()
    userStore.handleLogout()
    route.push('/')
  }, 2000)
}
</script>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
form {
  margin-bottom: 16px;
}
input {
  margin-right: 8px;
}
button {
  margin-left: 8px;
}
</style>
