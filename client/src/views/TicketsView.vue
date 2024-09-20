<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { type TicketResponse } from '@/globals/types'
import TicketCard from '@/components/TicketCard.vue'

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
  <div class="flex flex-col justify-center items-center gap-2">
    <span v-for="ticket in tickets" :key="ticket.id" class="mt-6">
      <TicketCard :title="ticket.title" :description="ticket.description" />
    </span>
  </div>
</template>

<style lang="scss" scoped></style>
