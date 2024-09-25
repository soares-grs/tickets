<script lang="ts" setup>
import Toolbar from 'primevue/toolbar'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import TicketViewMenuCustomSplitButton from './TicketViewMenuCustomSplitButton.vue'

const emit = defineEmits(['export', 'search', 'ticketCreated'])
</script>

<template>
  <div>
    <Toolbar>
      <template #start>
        <IconField>
          <InputIcon>
            <i class="pi pi-search" />
          </InputIcon>
          <InputText @input="emit('search', $event.target.value)" placeholder="Buscar" />
        </IconField>
      </template>
      <template #end>
        <TicketViewMenuCustomSplitButton
          @ticket-created="emit('ticketCreated')"
          @export="emit('export')"
        />
      </template>
    </Toolbar>
  </div>
</template>
