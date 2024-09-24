<script lang="ts" setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import TicketForm from './TicketForm.vue'
import SplitButton from 'primevue/splitbutton'

const emit = defineEmits(['export'])

const visible = ref<boolean>(false)

const items = [
  {
    label: 'Exportar',
    icon: 'pi pi-external-link',
    command: () => {
      emit('export')
    }
  }
]
</script>

<template>
  <div class="card flex justify-center">
    <SplitButton severity="success" label="Novo" @click="visible = true" :model="items" />
    <Dialog v-model:visible="visible" modal header="Criar Ticket" :style="{ width: '25rem' }">
      <TicketForm @created="visible = false" />
    </Dialog>
  </div>
</template>
