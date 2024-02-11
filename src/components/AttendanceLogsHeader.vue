<script setup>
import { reactive, ref } from 'vue'
import calendar_svg from '@/assets/svg/calendar.svg'

defineProps(
  {
    is_filtered: {
      type: Boolean,
      default: false
    }
  }
)

const button_group = reactive(['Active Logs', 'Deleted Logs'])
const toggled_window = ref(button_group[0]) 
</script>

<template>
  <v-row 
    align="center" 
    dense
  >
    <v-col cols="auto">
      <v-img
        :src="calendar_svg"
        height="16"
        width="16"
      />
    </v-col>
    
    <v-col>
      <p>{{ is_filtered ? 'Mar 01, 2022 - Mar 16, 2022' : 'Date Range' }}</p>
    </v-col>

    <v-col 
      v-if="!is_filtered" 
      cols="auto"
    >
      <v-btn 
        v-for="button in button_group"
        :key="button"
        :color="toggled_window === button ? 'green-300' : ''"
        @click="toggled_window = button"
        class="button-group"
        height="30"
        variant="flat" 
      >
        <template #append>
          <v-icon 
            v-show="toggled_window === button"
            class="pl-2 pr-3"
            icon="fa:fas fa-check" 
            size="12" 
          />
        </template>

        {{ button }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
@use '@/assets/css/theme.module.scss' as theme;

.button-group {
  border: 1px solid theme.$green-300;
  color: theme.$green-300;
  font-size: 12px;
  padding: 0 8px;
  text-transform: capitalize;

  &:first-of-type {
    border-radius: 4px 0 0 4px !important;
  }

  &:last-of-type {
    border-radius: 0 4px 4px 0 !important;
  }
}
</style>