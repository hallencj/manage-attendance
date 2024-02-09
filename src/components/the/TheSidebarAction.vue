<script setup>
import download from '@/assets/svg/download.svg'
</script>

<template>
  <v-card
    class="pa-6"
    variant="flat"
  >
    <v-btn 
      class="text-capitalize mb-3"
      color="green-300"
      variant="flat"
      height="48"
      block
    >
      <template #prepend>
        <v-icon icon="fa:fas fa-search" size="14"></v-icon>
      </template>
      
      Search
    </v-btn>

    <v-btn 
      class="text-capitalize"
      color="neutral-40"
      variant="outlined"
      height="48"
      block
    >
      <template #prepend>
        <v-img 
          :src="download"
          class="export-icon"
          height="16"
          width="16"
        />
      </template>

      <span class="text-neutral-40">Export</span>
    </v-btn>
  </v-card>
</template>

<style scoped>
.export-icon {
  opacity: 0.4;
}
</style>