<script setup>
import { reactive, ref } from 'vue'
import building_svg from '@/assets/svg/building.svg'
import persons_svg from '@/assets/svg/persons.svg'
import location_svg from '@/assets/svg/location.svg'
import person_svg from '@/assets/svg/person.svg'

const filters = reactive(
  {
    company: {
      icon: building_svg,
      text: 'Company',
      items: ['Sprout Solutions']
    },
    department: {
      icon: persons_svg,
      text: 'Department',
      items: ['All']
    },
    location: {
      icon: location_svg,
      text: 'Location',
      items: ['All']
    },
    employee: {
      icon: person_svg,
      text: 'Employee',
      items: ['All']
    }
  }
)

const hide_filters = ref(true)
const filters_value = ref(
  {
    company: 'Sprout Solutions',
    department: 'All',
    location: 'All',
    employee: 'All'
  }
)
</script>

<template>
  <v-row 
    class="mb-1"
    justify="space-between" 
    align="center"
  >
    <v-col>
      <h4 class="text-neutral-400 filter-title ma-0">FILTERS</h4>
    </v-col>

    <v-col cols="auto">
      <v-btn 
        @click="hide_filters = !hide_filters"
        class="text-capitalize px-1"
        color="blue-300"
        variant="text" 
        density="compact"
      >
        {{ hide_filters ? 'Show All' : 'Hide All' }}
      </v-btn>
    </v-col>
  </v-row>

  <template v-if="hide_filters">
    <v-list
      class="mt-0 pa-0" 
      density="compact"
    >
      <v-list-item 
        v-for="(filter, key) in filters"
        class="px-0"
      >
        <template v-slot:prepend>
          <v-img 
            :src="filter.icon"
            height="16"
            width="16"
          />
        </template>
  
        <v-list-item-title class="text-neutral-400 text-uppercase ml-2">{{ filters_value[key] }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </template>

  <template v-else>
    <v-autocomplete
      v-for="(filter, key) in filters"
      v-model="filters_value[key]"
      :items="filter.items"
      :label="filter.text"
      menu-icon="$expand"
      variant="outlined"
      base-color="neutral-80"
      color="neutral-80"
      height="48"
    />
  </template>
</template>