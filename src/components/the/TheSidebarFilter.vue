<script setup>
import TheSidebarFilterDateRange from './TheSidebarFilterDateRange.vue'
import TheSidebarFilterFilters from './TheSidebarFilterFilters.vue'
</script>

<template>
  <v-card
    class="pa-6"
    variant="flat"
  >
    <TheSidebarFilterDateRange />
    <TheSidebarFilterFilters />
  </v-card>
</template>

<style scoped>
:deep(.filter-title) {
  letter-spacing: 0.04em;
  margin-bottom: 20px;
}
</style>