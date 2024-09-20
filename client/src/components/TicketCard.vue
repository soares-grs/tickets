<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'

defineProps({
  title: {
    type: String,
    default: 'Título'
  },
  description: {
    type: String,
    default: 'Descrição'
  }
})
</script>

<template>
  <div>
    <Card class="p-2">
      <template #title>{{ title }}</template>
      <template #content>
        <p class="">
          {{ description }}
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button severity="info" icon="pi pi-pen-to-square" outlined class="w-full" />
          <Button severity="danger" icon="pi pi-trash" outlined class="w-full" />
        </div>
      </template>
    </Card>
  </div>
</template>
