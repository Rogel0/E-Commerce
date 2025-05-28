<template>
  <el-dialog
    v-model="props.modelValue"
    @close="emit('update:visible', false)"
    align-center
    width="500"
  >
  </el-dialog>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits(['update:visible'])
</script>

<style scoped></style>
