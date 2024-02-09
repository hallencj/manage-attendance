<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import calendar_outlined from '@/assets/svg/calendar-outlined.svg'
import download from '@/assets/svg/download.svg'

const navigations = reactive(
  [
    { icon: calendar_outlined, title: 'Attendance Logs', link: '/manage-attendance/attendance-logs' },
    { icon: download, title: 'Exported Files', link: '/manage-attendance/exported-files' }
  ]
)
const route = useRoute()
</script>

<template>
  <v-card
    class="pa-6"
    variant="flat"
  >
    <h1 class="mb-2">Manage Attendance</h1>
    <p class="manage-attendance-description">Attendance management is where you can generate, add, edit, and export the logs of the employees.</p>
    
    <v-btn 
      v-for="navigation in navigations"
      :key="navigation.link"
      :to="navigation.link"
      :color="route.fullPath === navigation.link ? 'success' : ''"
      class="text-capitalize justify-start"
      height="48"
      variant="flat" 
      block
    >
      <template #prepend>
        <v-img 
          :src="navigation.icon"
          height="16"
          width="16"
        />
      </template>

      <span class="navigation-buttons text-neutral-500">{{ navigation.title }}</span>
    </v-btn>
  </v-card>
</template>

<style scoped>
.manage-attendance-description {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 20px;
}

.navigation-buttons {
  font-weight: 500;
  font-size: 16px;
  margin-left: 5px;
}
</style>