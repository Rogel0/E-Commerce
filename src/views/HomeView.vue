<template>
  <el-header>
    <el-row
      align="middle"
      justify="space-between"
      style="width: 100%; padding-top: 25px; padding-right: 7%; padding-left: 7%"
    >
      <el-col :span="2" class="centered-col">
        <el-text class="logo-title">MatStore</el-text>
      </el-col>
      <el-col :span="6" class="centered-col">
        <el-input
          v-model="searchInput"
          style="max-width: 600px"
          placeholder="Please input"
          class="input-with-select"
        >
          <template #prepend>
            <el-select
              v-model="selectedCategory"
              placeholder="All Categories"
              style="width: 140px"
              size="large"
            >
              <el-option label="All Categories" value="" />
              <el-option v-for="cat in categories" :key="cat" :label="cat" :value="cat" />
            </el-select>
          </template>
        </el-input>
      </el-col>
      <el-col :span="2" style="text-align: right" class="centered-col">
        <el-select placeholder="Your Location" style="width: 180px" size="large" class="box-shadow">
          <template #prefix>
            <el-icon><Location /></el-icon>
          </template>
          <el-option prop="ph" value="ph">Phillipine</el-option>
        </el-select>
      </el-col>
      <el-col :span="6" class="centered-col">
        <el-button :icon="HelpFilled" text>Compare</el-button>
        <el-badge :value="2"><el-button :icon="Star" text>Wishlist</el-button></el-badge>
        <el-badge :value="12"
          ><el-button :icon="ShoppingCart" @click="toggleCartDrawer" text>Cart</el-button></el-badge
        >
        <el-dropdown v-if="userStore.token">
          <el-button :icon="Avatar" text>Account</el-button>
          <template #dropdown>
            <el-dropdown-item @click="onLogout"> Logout </el-dropdown-item>
          </template>
        </el-dropdown>
        <el-button v-else :icon="Avatar" text @click="toggleLoginDialog">Login</el-button>
      </el-col>
    </el-row>
  </el-header>
  <CartDrawerComponent v-model:modelValue="isOpenCart" />
  <AuthLoginComponent v-model:modelValue="isOpen" />
  <HeroSectionComponent />
  <LandingPageProduct :selectedCategory="selectedCategory" :search="debouncedSearch" />
</template>

<script setup lang="ts">
import AuthLoginComponent from '@/components/authLoginComponent.vue'
import HeroSectionComponent from '@/components/heroSectionComponent.vue'
import LandingPageProduct from '@/components/landingPageProduct.vue'
import { Avatar, HelpFilled, Location, ShoppingCart, Star } from '@element-plus/icons-vue'
import { ref, computed, onMounted, watch } from 'vue'
import { useUserStore } from '@/stores/useUserStore'
import { ElLoading } from 'element-plus'
import CartDrawerComponent from '@/components/cartDrawerComponent.vue'
import { fetchProducts } from '@/api/services/productService'

const userStore = useUserStore()

const isOpen = ref(false)
const isOpenCart = ref(false)
const selectedCategory = ref('')

const toggleCartDrawer = () => {
  isOpenCart.value = !isOpenCart.value
}

const toggleLoginDialog = () => {
  isOpen.value = !isOpen.value
}

const onLogout = () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Registering...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loading.close()
  }, 2000)
  setTimeout(() => {
    userStore.handleLogout()
  }, 2000)
}

// Dynamic category dropdown logic
const { products, getProducts } = fetchProducts()
const categories = computed(() => {
  const set = new Set<string>()
  products.value.forEach((p) => set.add(p.category))
  return Array.from(set)
})
onMounted(() => {
  getProducts()
})

const searchInput = ref('')
const debouncedSearch = ref('')
let searchTimeout: ReturnType<typeof setTimeout> | null = null

watch(searchInput, (val) => {
  if (searchTimeout) clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    debouncedSearch.value = val
  }, 400)
})
</script>

<style scoped>
.el-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: #fff;
  height: 80px;
}

.logo-title {
  color: #39b97e;
  font-weight: 800;
  font-size: 2em;
}

.input-with-select {
  box-shadow: 2px 2px 8px 0 #39b97e33;
}

.box-shadow {
  box-shadow:
    0 2px 8px 0 rgba(57, 185, 126, 0.12),
    0 1.5px 4px 0 rgba(40, 41, 40, 0.1);
}

:deep(.el-select__selected-item) {
  color: #39b97e;
}

.centered-col {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
