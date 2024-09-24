<script lang="ts" setup>
import Toast from 'primevue/toast'
import CustomMenu from './components/CustomMenu.vue'
</script>

<template>
  <CustomMenu />
  <RouterView />
  <Toast />
</template>

<style lang="scss" scoped></style>
