<script setup>
import { useRoute } from 'vue-router'
import TheSidebarNavigation from './TheSidebarNavigation.vue'
import TheSidebarFilter from './TheSidebarFilter.vue'

const route = useRoute()
</script>

<template>
  <v-navigation-drawer width="354">
    <TheSidebarNavigation />
    
    <v-divider />
      
    <TheSidebarFilter v-if="route.name !== 'exported-files'" />
  </v-navigation-drawer>
</template>

