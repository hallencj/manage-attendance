<script setup>
import BaseTableFooterItemsPerPage from './BaseTableFooterItemsPerPage.vue'
import BaseTableFooterPagination from './BaseTableFooterPagination.vue'
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
      <BaseTableFooterPagination />
    </v-col>

    <v-col cols="auto">
      <span class="text-neutral-400">Showing 0 of 0</span>
    </v-col>
  </v-row>
</template>