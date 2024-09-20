<script lang="ts" setup>
import { reactive } from 'vue'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import FloatLabel from 'primevue/floatlabel'
import Button from 'primevue/button'
import axios from 'axios'
import { useToast } from '@/helpers/toast'
import { type Ticket } from '@/globals/types'

const { showSuccess, showError } = useToast()

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
    showSuccess('Ticket criado com sucesso!', 'Vá para a tela de tickets para ver ele')
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
  }

  if (!ticket.description) {
    isInputValid.description = false
  }

  showError("Erro no envio", "Preencha todos os campos do formulário")
  return isInputValid.title && isInputValid.description
}
</script>

<template>
  <div>
    <form class="flex flex-col items-center gap-6">
      <FloatLabel>
        <label for="title">Título</label>
        <InputText :invalid="!isInputValid.title" id="title" v-model="ticket.title" />
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
      <Button @click="createTicket" label="Criar Ticket" />
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
