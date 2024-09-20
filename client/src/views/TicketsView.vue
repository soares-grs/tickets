<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { type TicketResponse } from '@/globals/types'
import axios from 'axios'
import TicketCard from '@/components/TicketCard.vue'
import ScrollPanel from 'primevue/scrollpanel'
import Timeline from 'primevue/timeline'
import TicketViewMenu from '@/components/TicketViewMenu.vue'

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
  <div class="flex flex-col justify-center items-center gap-2 mt-12">
    <TicketViewMenu />
    <ScrollPanel style="width: 50%; height: 660px" class="p-5">
      <Timeline align="alternate" :value="tickets">
        <template #content="slotProps">
          <TicketCard
            :title="slotProps.item.title"
            :description="slotProps.item.description"
            :date="slotProps.item?.dateCreated"
          />
        </template>
      </Timeline>
    </ScrollPanel>
  </div>
</template>

<style lang="scss" scoped></style>
