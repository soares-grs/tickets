<script lang="ts" setup>
import axios from 'axios'
import { reactive } from 'vue'
import { useToast } from '@/helpers/toast'
import { useConfirm } from 'primevue/useconfirm'
import { type Ticket } from '@/globals/types'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import FloatLabel from 'primevue/floatlabel'
import Button from 'primevue/button'
import ConfirmPopup from 'primevue/confirmpopup'

const emit = defineEmits(['created'])

const { showSuccess, showError } = useToast()
const confirm = useConfirm()

const ticket = reactive<Ticket>({
  title: '',
  description: ''
})

const isInputValid = reactive({
  title: true,
  description: true
})

async function createTicket() {
  if (!validateForm()) return

  try {
    await axios.post(`${import.meta.env.VITE_BASE_URL}/ticket`, ticket)
    showSuccess('Ticket criado com sucesso!', 'Você pode visualizar ele na tela de tickets')
    emit('created')
  } catch (erro) {
    showError('Não foi possível criar o ticket', erro)
  } finally {
    clearForm()
  }
}

function clearForm() {
  ticket.title = ''
  ticket.description = ''
  isInputValid.description = true
  isInputValid.title = true
}

function validateForm() {
  if (!ticket.title) {
    isInputValid.title = false
    showError('Erro no envio', 'Preencha o campo "título"')
  }

  if (!ticket.description) {
    isInputValid.description = false
    showError('Erro no envio', 'Preencha o campo "descrição"')
  }

  return isInputValid.title && isInputValid.description
}

const confirmCreateTicket = (event: any) => {
  confirm.require({
    target: event.currentTarget,
    message: 'Certeza que deseja criar um novo ticket?',
    icon: 'pi pi-exclamation-triangle',
    rejectProps: {
      label: 'Não',
      severity: 'danger',
      outlined: true
    },
    acceptProps: {
      label: 'Sim'
    },
    accept: () => {
      createTicket()
    },
    reject: () => {}
  })
}
</script>

<template>
  <div>
    <form class="flex flex-col items-center gap-8">
      <FloatLabel>
        <label for="title">Título</label>
        <InputText
          class="w-[340px]"
          :invalid="!isInputValid.title"
          id="title"
          v-model="ticket.title"
        />
      </FloatLabel>
      <FloatLabel>
        <label for="description">Descrição</label>
        <Textarea
          :invalid="!isInputValid.description"
          v-model="ticket.description"
          id="description"
          rows="5"
          cols="30"
        />
      </FloatLabel>
      <ConfirmPopup></ConfirmPopup>
      <Button @click="confirmCreateTicket($event)" label="Criar Ticket" />
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
