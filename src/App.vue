<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/the/TheNavbar.vue'
import TheSidebar from './components/the/TheSidebar.vue'
</script>

<template>
  <v-layout>
    <TheNavbar />
    <TheSidebar />

    <v-main class="ma-4">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<style src="@/assets/css/global.scss"></style>