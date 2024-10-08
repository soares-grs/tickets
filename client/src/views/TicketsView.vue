<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { type TicketResponse } from '@/globals/types'
import axios from 'axios'
import TicketViewMenu from '@/components/TicketViewMenu.vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { formatDate } from '@/helpers/date'
import { useConfirm } from 'primevue/useconfirm'
import ConfirmDialog from 'primevue/confirmdialog'
import { useToast } from '@/helpers/toast'

const confirm = useConfirm()
const { showError, showSuccess } = useToast()

const datatable = ref()
const tickets = ref<TicketResponse[]>([])
const filteredTickets = ref<TicketResponse[]>([])
const selectedTickets = ref([])

onMounted(async () => {
  await getAllTickets()
})

const exportCSV = () => {
  datatable.value.exportCSV()
}

async function getAllTickets() {
  const { data: ticketsResponse } = await axios.get(`${import.meta.env.VITE_BASE_URL}/ticket`)
  tickets.value = ticketsResponse
  filteredTickets.value = tickets.value
}

function filterTickets(inputSearch: string) {
  if (!inputSearch) {
    filteredTickets.value = tickets.value
    return
  }

  filteredTickets.value = tickets.value.filter(
    (ticket) =>
      ticket.description.toLowerCase().includes(inputSearch.toLowerCase()) ||
      ticket.title.toLowerCase().includes(inputSearch.toLowerCase())
  )
}

const removeTicket = async (ticketId: number) => {
  try {
    await axios.delete(`${import.meta.env.VITE_BASE_URL}/ticket/${ticketId}`)
    showSuccess('Ticket removido com sucesso!')
  } catch (e) {
    showError('Não foi possível remover o ticket', e)
  } finally {
    await getAllTickets()
  }
}

const confirmTicketRemotion = (ticketId: number) => {
  confirm.require({
    message: 'Tem certeza que deseja remover este ticket?',
    header: 'Remoção Ticket',
    icon: 'pi pi-exclamation-triangle',
    rejectProps: {
      label: 'Cancelar',
      severity: 'secondary',
      outlined: true
    },
    acceptProps: {
      label: 'Sim'
    },
    accept: () => {
      removeTicket(ticketId)
    },
    reject: () => {}
  })
}
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-6 mt-12">
    <DataTable
      ref="datatable"
      v-model:selection="selectedTickets"
      paginator
      :rows="10"
      :value="filteredTickets"
      dataKey="id"
      tableStyle="min-width: 50rem"
    >
      <template #header>
        <TicketViewMenu
          @search="(inputSearch: string) => filterTickets(inputSearch)"
          @export="exportCSV"
          @ticket-created="getAllTickets"
        />
      </template>
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="title" header="Título"></Column>
      <Column field="description" header="Descrição"></Column>
      <Column field="dateCreated" header="Data criação">
        <template #body="{ data }">
          {{ formatDate(data.dateCreated) }}
        </template>
      </Column>
      <template #empty>
        <span class="flex items-center gap-4">
          Nenhum ticket encontrado
          <i
            v-tooltip="'Para criar um novo ticket basta clicar no botão \u0022Novo\u0022'"
            class="pi pi-info-circle cursor-pointer"
          ></i>
        </span>
      </template>
      <Column>
        <template #body="{ data }">
          <i
            @click="confirmTicketRemotion(data.id)"
            class="mr-2 cursor-pointer text-red-500 hover:text-red-400 transition ease-linear duration-100 pi pi-trash"
          ></i>
        </template>
      </Column>
    </DataTable>
  </div>
  <ConfirmDialog></ConfirmDialog>
</template>
