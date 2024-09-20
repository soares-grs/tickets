<script lang="ts" setup>
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
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
        <Button icon="pi pi-plus" class="mr-2" severity="success" text />
      </template>
    </Toolbar>
  </div>
</template>
