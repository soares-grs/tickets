<script lang="ts" setup>
import Toolbar from 'primevue/toolbar'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import TicketViewMenuCustomSplitButton from './TicketViewMenuCustomSplitButton.vue'

const emit = defineEmits(['export'])
</script>

<template>
  <div>
    <Toolbar>
      <template #start>
        <IconField>
          <InputIcon>
            <i class="pi pi-search" />
          </InputIcon>
          <InputText placeholder="Buscar" />
        </IconField>
      </template>
      <template #end>
        <TicketViewMenuCustomSplitButton @export="emit('export')" />
      </template>
    </Toolbar>
  </div>
</template>
