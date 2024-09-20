<script lang="ts" setup>
import Toolbar from 'primevue/toolbar'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import TicketCreateDialog from '@/components/TicketCreateDialog.vue';
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
      <template #center>
        <TicketCreateDialog/>
      </template>
    </Toolbar>
  </div>
</template>
