<script setup>
import TheSidebarNavigation from './TheSidebarNavigation.vue'
import TheSidebarFilter from './TheSidebarFilter.vue'
import TheSidebarAction from './TheSidebarAction.vue'
</script>

<template>
  <v-navigation-drawer width="354">
    <TheSidebarNavigation />
    
    <v-divider />
    
    <TheSidebarFilter />

    <v-divider />

    <TheSidebarAction />
  </v-navigation-drawer>
</template>

