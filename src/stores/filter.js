import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', () => {
  const count = ref(0)

  const enable_button = computed(() => count.value * 2)

  function search() {
    count.value++
  }

  return { 
    count, 
    enable_button, 
    search 
  }
})
