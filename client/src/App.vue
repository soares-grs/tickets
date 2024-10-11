<script lang="ts" setup>
import Toast from 'primevue/toast'
import CustomMenu from './components/CustomMenu.vue'
import ConfirmDialog from 'primevue/confirmdialog';
</script>

<template>
  <CustomMenu />
  <RouterView />
  <Toast />
  <ConfirmDialog />
</template>

<style lang="scss" scoped></style>
