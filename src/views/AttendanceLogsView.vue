<script setup>
import { watch, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import calendar_svg from '@/assets/svg/calendar.svg'
import no_payslip_svg from '@/assets/svg/no-payslip.svg'
import dummy_logs from '@/assets/json/dummy-logs.json'
import BaseTableFooter from '@/components/base/BaseTableFooter.vue'

const hide_button_group = ref(false)
const button_group = reactive(['Active Logs', 'Deleted Logs'])
const headers = reactive(
  [
    { title: 'NAME', key: 'name', sortable: false },
    { title: 'DATE', key: 'date', sortable: false },
    { title: 'TIME', key: 'time', sortable: false },
    { title: 'IN/OUT', key: 'in_out', sortable: false },
    { title: 'LOG DETAILS', key: 'log_details', sortable: false },
    { title: 'LOCATION', key: 'location', sortable: false },
    { title: 'PROJECT NAME', key: 'project_name', sortable: false },
    { title: '', key: '', sortable: false }
  ]
)
const items = ref([])
const total_items = ref(0)
const total_pages = ref(1)
const show_window = ref(button_group[0])
const route = useRoute()

watch(() => route.query, () => fetchAttendanceLogs(), { deep: true, immediate: true })

function fetchAttendanceLogs() {
  if (route.query.date_from && route.query.date_to) {
    hide_button_group.value = true
    items.value = dummy_logs
    total_pages.value = 13
    total_items.value = 123
  } else {
    hide_button_group.value = false
    items.value = []
    total_pages.value = 1
    total_items.value = 0
  }
}
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
      <p v-if="hide_button_group">Mar 01, 2022 - Mar 16, 2022</p>
      <p v-else>Date Range</p>
    </v-col>

    <v-col 
      v-if="!hide_button_group" 
      cols="auto"
    >
      <v-btn 
        v-for="button in button_group"
        :key="button"
        :color="show_window === button ? 'green-300' : ''"
        @click="show_window = button"
        class="button-group"
        height="30"
        variant="flat" 
      >
        <template #append>
          <v-icon 
            v-show="show_window === button"
            class="pl-2 pr-3"
            icon="fa:fas fa-check" 
            size="12" 
          />
        </template>

        {{ button }}
      </v-btn>
    </v-col>
  </v-row>

  <v-card   
    class="mt-5"
    color="neutral-40"
    variant="outlined"
  >
    <v-data-table
      :headers="items.length ? headers : []"
      :items="items"
    >
      <template #no-data>
        <v-sheet 
          class="justify-center d-flex"
          height="564"
        >
          <v-card-item>
            <v-img 
              :src="no_payslip_svg"
              height="144"
            />
            <h2>No attendance logs to show</h2>
            <p>Get started by searching for the logs</p>
          </v-card-item>
        </v-sheet>
      </template>

      <template #item="{ item }">
        <tr class="text-neutral-800">
          <td>
            <h4>{{ item.name }}</h4>
            <small class="text-neutral-90 sub-text">{{ item.id }}</small>
          </td>
          
          <td>{{ item.date }}</td>
          <td>{{ item.time }}</td>

          <td :class="item.in_out === 'IN' ? 'text-blue-300' : 'text-orange-300'">{{ item.in_out }}</td>

          <td>
            <v-sheet
              class="rounded-sm justify-center d-flex"
              color="neutral-40"
              width="33"
              height="16"
            >
              <span class="sub-text">{{ item.log_details }}</span>
            </v-sheet>
          </td>

          <td>
            <h4>{{ item.location }}</h4>
            <small class="text-neutral-90 font-italic sub-text">Notes</small>
          </td>

          <td>
            <h4>{{ item.project_name }}</h4>
            <small class="text-neutral-90 sub-text">NS</small>
          </td>

          <td>
            <v-btn
              class="mb-3"
              color="green-300"
              icon="fa:fas fa-edit" 
              size="12"
              variant="plain"
            />
          </td>
        </tr>
      </template>
      
      <template #bottom>
        <BaseTableFooter 
          :total_pages="total_pages"
          :total_items="total_items"
        />
      </template>
    </v-data-table>
  </v-card>
</template>

<style lang="scss" scoped>
@use '@/assets/css/theme.module.scss' as theme;

.sub-text {
  font-size: 12px;
}

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