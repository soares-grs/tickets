<script lang="ts" setup>
import FormTicket from '@/components/TicketForm.vue'
import Fieldset from 'primevue/fieldset'
</script>

<template>
  <div>
    <div class="flex h-screen justify-center items-center">
      <Fieldset legend="Criar um novo ticket">
        <div class="p-8">
          <FormTicket />
        </div>
      </Fieldset>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
