<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import download_svg from '@/assets/svg/download.svg'
import download_green_svg from '@/assets/svg/download-green.svg'
import TheSidebarFilterDateRange from './TheSidebarFilterDateRange.vue'
import TheSidebarFilterFilters from './TheSidebarFilterFilters.vue'

const filters_value = ref(
  {
    company: 'Sprout Solutions',
    department: 'All',
    location: 'All',
    employee: 'All'
  }
)
const filters_value_holder = ref(null)
const disabled_buttons = ref(true)

const router = useRouter()

function handleFilters(data) {
  filters_value_holder.value = data

  if (data.company && data.department && data.location && data.employee) {
    disabled_buttons.value = false
  } else {
    disabled_buttons.value = true
  }
}

function search() {
  filters_value.value = Object.assign({}, filters_value_holder.value)

  router.push(
    {
      path: '/manage-attendance/attendance-logs',
      query: {
        date_from: '03/29/2022',
        date_to: '03/29/2022',
        ...filters_value.value
      }
    }
  )
}
</script>

<template>
  <v-card
    class="pa-6"
    variant="flat"
  >
    <TheSidebarFilterDateRange />
    <TheSidebarFilterFilters 
      :filters_value="filters_value"
      @handle-filters="handleFilters($event)"  
    />
  </v-card>

  <v-divider />

  <v-card
    class="pa-6"
    variant="flat"
  >
    <v-btn 
      :disabled="disabled_buttons"
      :color="disabled_buttons ? 'neutral-90' : 'green-300'"
      @click="search()"
      class="text-capitalize mb-3"
      variant="flat"
      height="48"
      block
    >
      <template #prepend>
        <v-icon 
          icon="fa:fas fa-search" 
          size="14" 
        />
      </template>
      
      Search
    </v-btn>

    <v-btn 
      :disabled="disabled_buttons"
      :color="disabled_buttons ? 'neutral-80' : 'green-300'"
      class="text-capitalize"
      variant="outlined"
      height="48"
      block
    >
      <template #prepend>
        <v-img 
          :src="disabled_buttons ? download_svg : download_green_svg"
          class="export-icon"
          height="16"
          width="16"
        />
      </template>

      <span :class="disabled_buttons ? 'text-neutral-80' : 'text-green-300'">Export</span>
    </v-btn>
  </v-card>
</template>

<style scoped>
:deep(.filter-title) {
  letter-spacing: 0.04em;
  margin-bottom: 20px;
}

.export-icon {
  opacity: 0.4;
}
</style>