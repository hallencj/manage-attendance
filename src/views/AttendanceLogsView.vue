<script setup>
import { watch, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import dummy_logs from '@/assets/json/dummy-logs.json'
import BaseTableLoader from '@/components/base/BaseTableLoader.vue'
import BaseTableNoData from '@/components/base/BaseTableNoData.vue'
import BaseTableFooter from '@/components/base/BaseTableFooter.vue'
import AttendanceLogsHeader from '@/components/AttendanceLogsHeader.vue'
import AttendanceLogsTableRow from '@/components/AttendanceLogsTableRow.vue'

const is_filtered = ref(false)
const tbl_headers = reactive(
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
const tbl_loading = ref(true)
const tbl_items = ref([])
const total_items = ref(0)
const total_pages = ref(1)
const route = useRoute()

watch(() => route.query, () => fetchAttendanceLogs(), { deep: true, immediate: true })

function fetchAttendanceLogs() {
  // Fetch API
  tbl_loading.value = true

  setTimeout(() => { // To MIMIC
    if (route.query.date_from && route.query.date_to) {
      is_filtered.value = true
      tbl_items.value = dummy_logs
      total_pages.value = 13
      total_items.value = 123
    } else {
      is_filtered.value = false
      tbl_items.value = []
      total_pages.value = 1
      total_items.value = 0
    }

    tbl_loading.value = false
  }, 2000)
}
</script>

<template>
  <AttendanceLogsHeader :is_filtered="is_filtered" />

  <v-card   
    class="mt-5"
    color="neutral-40"
    variant="outlined"
  >
    <v-data-table
      :loading="tbl_loading"
      :headers="tbl_items.length ? tbl_headers : []"
      :items="tbl_items"
      loading-text=""
    >
      <template #no-data>
        <BaseTableNoData 
          title="No attendance logs to show"
          description="<p>Get started by searching for the logs</p>"
        />
      </template>

      <template #loader>
        <BaseTableLoader />
      </template>

      <template #item="{ item }">
        <AttendanceLogsTableRow :item="item" />
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