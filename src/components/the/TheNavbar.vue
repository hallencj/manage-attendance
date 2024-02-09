<script setup>
import { useRouter } from 'vue-router'
import transparent_logo from '@/assets/svg/transparent-logo.svg'
import TheNavbarMenus from './TheNavbarMenus.vue'
import TheNavbarSearch from './TheNavbarSearch.vue'
import TheNavbarUser from './TheNavbarUser.vue'

const router = useRouter()

function goToHome() {
  router.push(
    { 
      path: '/', 
      query: {}
    }
  )
}
</script>

<template>
  <v-app-bar 
    color="#333333" 
    height="76"
  >
    <v-sheet 
      color="transparent" 
      width="250"
    >
      <v-img 
        :src="transparent_logo" 
        @click="goToHome()" 
        class="cursor-pointer"
        height="38.14" 
      />
    </v-sheet>

    <v-spacer />

    <TheNavbarMenus />
    <TheNavbarSearch />
    <TheNavbarUser />
  </v-app-bar>
</template>