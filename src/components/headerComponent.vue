<template>
  <el-header>
    <el-row
      align="middle"
      justify="space-between"
      style="width: 100%; padding-top: 30px; padding-right: 7%; padding-left: 7%"
    >
      <el-col :span="2" class="centered-col">
        <el-text class="logo-title">MatStore</el-text>
      </el-col>
      <el-col :span="6" class="centered-col">
        <el-input style="max-width: 600px" placeholder="Please input" class="input-with-select">
          <template #prepend>
            <el-select placeholder="All Categories" style="width: 140px" size="large">
              <el-option label="Restaurant" value="1" />
              <el-option label="Order No." value="2" />
              <el-option label="Tel" value="3" />
            </el-select>
          </template>
        </el-input>
      </el-col>
      <el-col :span="2" style="text-align: right" class="centered-col">
        <el-select placeholder="Your Location" style="width: 180px" size="large" class="box-shadow">
          <template #prefix>
            <el-icon><Location /></el-icon>
          </template>
          <el-option>Phillipine</el-option>
        </el-select>
      </el-col>
      <el-col :span="6" class="centered-col">
        <el-button :icon="HelpFilled" text>Compare</el-button>
        <el-badge :value="2"><el-button :icon="Star" text>Wishlist</el-button></el-badge>
        <el-badge :value="12"><el-button :icon="ShoppingCart" text>Cart</el-button></el-badge>
        <el-button :icon="Avatar" text>Account</el-button>
      </el-col>
    </el-row>
  </el-header>
</template>

<script setup lang="ts">
import { Avatar, HelpFilled, Location, ShoppingCart, Star } from '@element-plus/icons-vue'
</script>

<style scoped>
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
