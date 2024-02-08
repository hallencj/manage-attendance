<script setup>
import { reactive } from 'vue'

const menus = reactive([
  { title: 'My Requests', items: [] },
  { title: 'My Team', items: [] },
  { title: 'Company', items: [] },
  { title: 'Administration Tools', items: [] },
  { title: 'Maintenance', items: [] }
])
</script>

<template>
  <v-menu 
    v-for="menu in menus"
    :key="menu.title"  
  >
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        class="text-capitalize text-body-1 font-weight-regular"
        color="#DDDDDD"
      >
        {{ menu.title }}
        
        <v-icon 
          class="ml-1" 
          icon="fa:fas fa-caret-down"
          size="16"
        />
      </v-btn>
    </template>
  </v-menu>
</template>