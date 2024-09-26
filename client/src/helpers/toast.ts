import { useToast as useToastPrimVue } from 'primevue/usetoast'

export const useToast = () => {
  const toast = useToastPrimVue()

  const showSuccess = (message: string, detail: string = '') => {
    toast.add({ severity: 'success', summary: message, detail: detail, life: 3000 })
  }

  const showError = (message: string, detail: any) => {
    toast.add({ severity: 'error', summary: message, detail: detail, life: 3000 })
  }

  return {
    showSuccess,
    showError
  }
}
