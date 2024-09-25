<script lang="ts" setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import TicketForm from './TicketForm.vue'
import SplitButton from 'primevue/splitbutton'

const emit = defineEmits(['export', 'ticketCreated'])

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

function handleNewTicketCreated() {
  visible.value = false
  emit('ticketCreated')
}
</script>

<template>
  <div class="card flex justify-center">
    <SplitButton severity="success" label="Novo" @click="visible = true" :model="items" />
    <Dialog v-model:visible="visible" modal header="Criar Ticket" :style="{ width: '25rem' }">
      <TicketForm @created="handleNewTicketCreated" />
    </Dialog>
  </div>
</template>
