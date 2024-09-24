<script lang="ts" setup>
import { ref } from 'vue'
import router from '@/router'
import Menubar from 'primevue/menubar'

const items = ref([
  {
    label: 'Início',
    icon: 'pi pi-home',
    command: () => {
      router.push('/')
    }
  },
  {
    label: 'Tickets',
    icon: 'pi pi-ticket',
    command: () => {
      router.push('/tickets')
    }
  },
  {
    label: 'E-mail',
    icon: 'pi pi-envelope',
    disabled: true
  }
])
</script>

<template>
  <Menubar :model="items">
    <template #start>
      <img class="w-8 h-8" src="../assets/ticket.png" alt="Tickets Logo" />
    </template>
    <template #item="{ item, props, hasSubmenu, root }">
      <a v-ripple class="flex items-center" v-bind="props.action">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
        <span
          v-if="item.shortcut"
          class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
          >{{ item.shortcut }}</span
        >
        <i
          v-if="hasSubmenu"
          :class="[
            'pi pi-angle-down',
            { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }
          ]"
        ></i>
      </a>
    </template>
    <template #end>
      <div class="flex items-center gap-2">
        <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />
        <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
      </div>
    </template>
  </Menubar>
</template>
