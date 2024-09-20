<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { TicketResponse } from '@/globals/types'
import axios from 'axios'
import router from '@/router'
import FormTicket from '@/components/TicketForm.vue'
import Fieldset from 'primevue/fieldset'
import Carousel from 'primevue/carousel'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Message from 'primevue/message'

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
    <div class="flex h-screen flex-col justify-center items-center gap-6">
      <Fieldset legend="Criar um novo ticket">
        <div class="p-8">
          <FormTicket />
        </div>
      </Fieldset>
      <Divider />
      <Button severity="secondary" type="button" label="Tickets dessa semana" icon="pi pi-ticket" @click="router.push('/tickets')" />
      <section class="flex justify-center w-1/2">
        <Carousel
          class="w-full"
          :value="tickets"
          :numVisible="3"
          :numScroll="1"
          circular
          :autoplayInterval="3000"
        >
          <template #item="slotProps">
            <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4">
              <div class="mb-4 font-medium">{{ slotProps.data.title }}</div>
              <div class="flex justify-between items-center">
                <div class="mt-0 font-semibold text-xl">{{ slotProps.data.description }}</div>
                <span>
                  <Button icon="pi pi-eye" severity="secondary" outlined />
                </span>
              </div>
            </div>
          </template>
        </Carousel>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
