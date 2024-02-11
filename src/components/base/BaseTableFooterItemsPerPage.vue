<script setup>
import { reactive, ref } from 'vue'

const selected_items_per_page = ref(10)
const items_per_page = reactive([10, 20, 50])
</script>

<template>
  <span class="text-neutral-400">Items per page</span>

  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        class="text-capitalize text-body-1 font-weight-regular pa-0 ml-2"
        variant="outlined"
        color="neutral-60"
        height="24"
      >
        <span class="text-neutral-400">{{ selected_items_per_page }}</span>
        
        <v-icon 
          class="ml-4" 
          color="neutral-400"
          icon="fa:fas fa-chevron-down"
          size="16"
        />
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="item in items_per_page"
        :key="item"
        @click="selected_items_per_page = item"
      >
        {{ item }}
      </v-list-item>
    </v-list>
  </v-menu>
</template>