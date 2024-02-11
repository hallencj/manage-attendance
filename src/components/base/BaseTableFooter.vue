<script setup>
import { computed } from 'vue'
import BaseTableFooterItemsPerPage from './BaseTableFooterItemsPerPage.vue'
import BaseTableFooterPagination from './BaseTableFooterPagination.vue'

const props = defineProps(
  {
    total_pages: Number,
    total_items: Number
  }
)

const showing_of_text = computed(() => {
  return `Showing ${props.total_items ? '1  - 10' : 0 } of ${props.total_items ? props.total_items : 0 }`
})
</script>

<template>
  <v-divider />

  <v-row 
    class="py-5 px-4" 
    justify="space-between"
    align="center"
  >
    <v-col 
      class="align-center d-flex" 
      cols="auto"
    >
      <BaseTableFooterItemsPerPage />
    </v-col>

    <v-col cols="auto">
      <BaseTableFooterPagination :total_pages="total_pages" />
    </v-col>

    <v-col cols="auto">
      <span class="text-neutral-400">{{ showing_of_text }}</span>
    </v-col>
  </v-row>
</template>