<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/the/TheNavbar.vue'
import TheSidebar from './components/the/TheSidebar.vue'
</script>

<template>
  <v-layout>
    <TheNavbar />
    <TheSidebar />

    <v-main class="ma-7">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<style>
@import '@/assets/css/global.scss';
@import '@/assets/css/overwrite.scss';
</style>