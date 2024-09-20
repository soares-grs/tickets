<script lang="ts" setup>
import { ref } from 'vue'
import Toast from 'primevue/toast'
import Menubar from 'primevue/menubar';
import router from './router';

const items = ref([
  {
    label: 'Início',
    icon: 'pi pi-home',
    command: () => {
      router.push('/')
    }
  },
  {
    label: 'Tickets',
    icon: 'pi pi-ticket',
    command: () => {
      router.push('/tickets')
    }
  },
  {
    label: 'E-mail',
    icon: 'pi pi-envelope',
    disabled: true
  }
])
</script>

<template>
  <Menubar :model="items" />
  <RouterView />
  <Toast />
</template>

<style lang="scss" scoped></style>
