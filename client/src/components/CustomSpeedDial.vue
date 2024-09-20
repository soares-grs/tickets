<script lang="ts" setup>
import { ref } from 'vue';
import router from '@/router';
import SpeedDial from 'primevue/speeddial';

defineProps({
  direction: {
    type: String,
    default: 'up'
  }
})

const items = ref([
  {
    label: 'Update',
    icon: 'pi pi-refresh',
    command: () => {}
  },
  {
    label: 'Delete',
    icon: 'pi pi-trash',
    command: () => {}
  },
  {
    label: 'Upload',
    icon: 'pi pi-upload',
    command: () => {}
  },
  {
    label: 'Vue Website',
    icon: 'pi pi-external-link',
    command: () => {
      window.location.href = 'https://vuejs.org/'
    }
  },
  {
    label: 'Add',
    icon: 'pi pi-ticket',
    command: () => {
      router.push('/tickets')
    }
  }
])
</script>

<template>
  <div>
    <SpeedDial
      class="mb-8"
      :model="items"
      :radius="80"
      type="semi-circle"
      :direction="direction"
      style="position: absolute; left: calc(50% - 2rem); bottom: 0"
    />
  </div>
</template>

<style lang="scss" scoped></style>
