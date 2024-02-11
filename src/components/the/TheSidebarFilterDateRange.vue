<script setup>
import { ref } from 'vue'

const date_from = ref('03/29/2022')
const date_to = ref('03/29/2022')
</script>

<template>
  <h4 class="text-neutral-400 filter-title">DATE RANGE</h4>

  <v-text-field
    v-model="date_from"
    variant="outlined"
    base-color="neutral-80"
    color="neutral-80"
    height="48"
    readonly
  >
    <template #label>
      <span class="text-neutral-80 text-label">Date From</span>
    </template>

    <template #append-inner>
      <v-icon 
        color="$neutral-80" 
        icon="fa:far fa-calendar" 
        size="13" 
      />
    </template>
  </v-text-field>

  <v-text-field
    v-model="date_to"
    variant="outlined"
    base-color="neutral-80"
    color="neutral-80"
    height="48"
    readonly
  >
    <template #label>
      <span class="text-neutral-80 text-label">Date To</span>
    </template>

    <template #append-inner>
      <v-icon 
        color="$neutral-80" 
        icon="fa:far fa-calendar" 
        size="13" 
      />
    </template>
  </v-text-field>
</template>