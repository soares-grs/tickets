<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { TicketResponse } from '@/globals/types'
import axios from 'axios'
import FormTicket from '@/components/TicketForm.vue'
import Fieldset from 'primevue/fieldset'

const tickets = ref<TicketResponse[]>([])

onMounted(async () => {
  await getAllTickets()
})

async function getAllTickets() {
  const { data: ticketsResponse } = await axios.get(`${import.meta.env.VITE_BASE_URL}/ticket`)
  tickets.value = ticketsResponse
}
</script>

<template>
  <div>
    <div class="flex mt-16 flex-col justify-center items-center gap-6">
      <Fieldset legend="Criar um novo ticket">
        <div class="p-8">
          <FormTicket />
        </div>
      </Fieldset>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
