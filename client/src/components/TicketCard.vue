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
        <Card style="width: 25rem; overflow: hidden">
          <template #title>{{ title }}</template>
          <template #content>
            <p class="m-0">
              {{ description }}
            </p>
          </template>
          <template #footer>
            <div class="flex gap-4 mt-1">
              <Button label="Arquivar" severity="secondary" outlined class="w-full" />
              <Button label="Concluir" class="w-full" />
            </div>
          </template>
        </Card>
    </div>
</template>
