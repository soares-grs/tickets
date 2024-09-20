<script lang="ts" setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import TicketForm from './TicketForm.vue'

const visible = ref<boolean>(false)
</script>

<template>
  <div class="card flex justify-center">
    <Button icon="pi pi-plus" @click="visible = true" class="mr-2" severity="success" text />
    <Dialog v-model:visible="visible" modal header="Criar Ticket" :style="{ width: '25rem' }">
      <TicketForm @created="visible = false" />
    </Dialog>
  </div>
</template>
