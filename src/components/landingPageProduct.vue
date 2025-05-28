<template>
  <!-- <el-tabs>
    <el-tab-pane label="New"> -->
  <el-container
    style="padding-top: 40px; padding-right: 20%; padding-left: 20%; padding-bottom: 20px"
  >
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
  <!-- </el-tab-pane>
  </el-tabs> -->
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useProducts } from '@/composables/useProduct'
const { products, fetchAll } = useProducts()

onMounted(() => {
  fetchAll()
})
</script>

<style scoped>
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
  object-fit: contain;
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

.rate {
  display: flex;
  gap: 10px;
  align-items: center;
}

.rate h3 {
  font-size: 0.8em;
}

.category {
  font-size: 0.8em;
  font-weight: 800;
  color: #b1b1b1;
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  color: #63bcef;
}
</style>
