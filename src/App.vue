<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/the/TheNavbar.vue'
import TheSidebar from './components/the/TheSidebar.vue'
</script>

<template>
  <v-layout>
    <TheNavbar />
    <TheSidebar />
    <RouterView />
  </v-layout>
</template>