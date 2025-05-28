<template>
  <Header />
  <el-container class="hero-section">
    <el-row align="middle" justify="space-between" style="width: 100%">
      <el-col>
        <h4 style="font-size: 0.7em; color: #bec2c7">Starting at</h4>
        <h1>The best tablet Collection 2025</h1>
        <h3 style="font-family: var(--secondary-font)">
          Exclusive offer <span style="color: yellow">-35%</span>off this week
        </h3>
        <el-button>Shop Now</el-button>
      </el-col>
    </el-row>
  </el-container>

  <el-container style="padding-top: 40px; padding-right: 20%; padding-left: 20%">
    <div class="product-container">
      <el-card v-for="product in products" :key="product.id">
        <div class="image-container">
          <img class="product-image" :src="product.image" alt="" />
        </div>
        <template #footer>
          <div class="footer">
            <h3 class="category">{{ product.category }}</h3>
            <h2 class="title">{{ product.title }}</h2>
            <div class="rate">
              <el-rate :model-value="product.rating.rate" disabled size="small"></el-rate>
              <h3>{{ `(${product.rating.count} Review)` }}</h3>
            </div>
            <div class="bottom">
              <h2 class="price">₱{{ product.price }}</h2>
              <el-icon class="add"><ShoppingCart color="green" :size="20" /></el-icon>
            </div>
          </div>
        </template>
      </el-card>
    </div>
  </el-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useProducts } from '@/composables/useProduct'
import Header from '@/components/headerComponent.vue'
import { ShoppingCart } from '@element-plus/icons-vue'

const { products, fetchAll } = useProducts()

onMounted(() => {
  fetchAll()
})
</script>

<style scoped>
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  color: #63bcef;
}

.category {
  font-size: 0.8em;
  font-weight: 800;
  color: #b1b1b1;
}

.hero-section {
  background-color: #d9f1e7;
  min-height: 400px;
  margin-top: 30px;
}

.rate {
  display: flex;
  gap: 10px;
  align-items: center;
}

.rate h3 {
  font-size: 0.8em;
}

.product-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.image-container {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
}

.title {
  font-size: 0.8em;
}

.footer {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.add:hover {
  scale: 1.3;
  cursor: pointer;
}

/* .el-card {
  width: 400px;
  height: 500px;
  min-height: 400px;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
} */
</style>
