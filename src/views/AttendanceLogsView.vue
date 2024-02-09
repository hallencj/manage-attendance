<script setup>
import { reactive } from 'vue'
import calendar from '@/assets/svg/calendar.svg'
import no_payslip from '@/assets/svg/no-payslip.svg'
import BaseTableFooter from '@/components/base/BaseTableFooter.vue'

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

const items = reactive(
  [
    { id: '1234', name: 'Aguas, Ivy', date: '03/16/2022', time: '01:34 PM', in_out: 'IN', log_details: 'APP', location: '-', project_name: 'Notification...' },
    { id: '1234', name: 'Aguas, Ivy', date: '03/16/2022', time: '01:34 PM', in_out: 'OUT', log_details: 'APP', location: '-', project_name: 'Notification...' },
    { id: '1234', name: 'Aguas, Ivy', date: '03/16/2022', time: '01:34 PM', in_out: 'IN', log_details: 'APP', location: '-', project_name: 'Notification...' },
    { id: '1234', name: 'Aguas, Ivy', date: '03/16/2022', time: '01:34 PM', in_out: 'OUT', log_details: 'APP', location: '-', project_name: 'Notification...' },
    { id: '1234', name: 'Aguas, Ivy', date: '03/16/2022', time: '01:34 PM', in_out: 'IN', log_details: 'APP', location: '-', project_name: 'Notification...' },
    { id: '1234', name: 'Aguas, Ivy', date: '03/16/2022', time: '01:34 PM', in_out: 'OUT', log_details: 'APP', location: '-', project_name: 'Notification...' },
    { id: '1234', name: 'Aguas, Ivy', date: '03/16/2022', time: '01:34 PM', in_out: 'IN', log_details: 'APP', location: '-', project_name: 'Notification...' },
    { id: '1234', name: 'Aguas, Ivy', date: '03/16/2022', time: '01:34 PM', in_out: 'OUT', log_details: 'APP', location: '-', project_name: 'Notification...' },
    { id: '1234', name: 'Aguas, Ivy', date: '03/16/2022', time: '01:34 PM', in_out: 'IN', log_details: 'APP', location: '-', project_name: 'Notification...' },
    { id: '1234', name: 'Aguas, Ivy', date: '03/16/2022', time: '01:34 PM', in_out: 'OUT', log_details: 'APP', location: '-', project_name: 'Notification...' }
  ]
)
</script>

<template>
  <v-row 
    align="center" 
    dense
  >
    <v-col cols="auto">
      <v-img
        :src="calendar"
        height="16"
        width="16"
      />
    </v-col>
    
    <v-col>
      <p>Mar 01, 2022 - Mar 16, 2022</p>
    </v-col>
  </v-row>

  <v-card   
    class="mt-5"
    color="neutral-40"
    variant="outlined"
  >
    <v-data-table
      :headers="headers"
      :items="items"
    >
      <template #no-data>
        <v-sheet 
          class="justify-center d-flex"
          height="564"
        >
          <v-card-item>
            <v-img 
              :src="no_payslip"
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
        <BaseTableFooter />
      </template>
    </v-data-table>
  </v-card>
</template>

<style scoped>
.sub-text {
  font-size: 12px;
}
</style>