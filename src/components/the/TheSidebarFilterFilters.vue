<script setup>
import { watch, reactive, ref } from 'vue'
import building_svg from '@/assets/svg/building.svg'
import persons_svg from '@/assets/svg/persons.svg'
import location_svg from '@/assets/svg/location.svg'
import person_svg from '@/assets/svg/person.svg'
import dummy_filters_json from '@/assets/json/dummy-filters.json'

const props = defineProps(
  {
    filters_value: {
      type: Object,
      default() {
        return {
          company: String,
          department: String,
          location: String,
          employee: [String, Array]
        }
      }
    }
  }
)
const emit = defineEmits(['handleFilters'])

const filters = reactive(
  {
    Company: building_svg,
    Department: persons_svg,
    Location: location_svg,
    Employee: person_svg
  }
)
const companies = reactive(dummy_filters_json)
const departments = ref([])
const locations = ref([])
const employees = ref([])
const hide_filters = ref(true)
const selected_filters = ref(Object.assign({}, props.filters_value))

watch(() => props.filters_value, () => hide_filters.value = true, { deep: true })
watch(selected_filters, (new_value) => emit('handleFilters', new_value), { deep: true, immediate: true })

function toggleFilters() {
  hide_filters.value = !hide_filters.value

  if (hide_filters.value) {
    selected_filters.value = Object.assign({}, props.filters_value)
    getFiltersList()
  }
}

function hiddenFiltersText(key) {
  const employee_value = selected_filters.value[key.toLocaleLowerCase()]
  
  if (key === 'Employee' && Array.isArray(employee_value)) {
    return `${employee_value.length} Selected`
  }

  return employee_value
}

function getFiltersList() {
  companies.forEach(element => {
    if (element.company === selected_filters.value.company) {
      departments.value = element.departments.length ? ['All', ...element.departments] : []
      locations.value = element.locations.length ? ['All', ...element.locations] : []
      employees.value = element.employees.length ? ['All', ...element.employees] : []
    }
  })
}

function handleCompanyFilter(data) {
  // Clear value
  selected_filters.value.department = null
  selected_filters.value.location = null
  selected_filters.value.employee = null

  if (data) {
    selected_filters.value.company = data.company

    // Set selected filter value
    if (!data.locations.length) selected_filters.value.location = 'No Location'
    if (!data.employees.length) selected_filters.value.employee = 'No Employee'

    getFiltersList()
  } else {
    departments.value = []
    locations.value = []
    employees.value = []
  }
}

function handleDepartmentFilter() {
  selected_filters.value.location = locations.value.length ? null : 'No Location'
  selected_filters.value.employee = employees.value.length ? null : 'No Employee'
}

function handleLocationFilter() {
  selected_filters.value.employee = employees.value.length ? null : 'No Employee'
}

function handleEmployeeFilter(data) {
  if (data.length === 0) selected_filters.value.employee = null

  // Clear other value if 'All' is selected
  if (data[data.length - 1] === 'All') {
    selected_filters.value.employee = 'All'
    return
  }

  // Remove 'All' in selected value after selecting other value
  if (data.length > 1 && data.includes('All')) {
    const index = data.findIndex(element => element === 'All')
    selected_filters.value.employee.splice(index, 1)
  }
}

function employeeSelectionText(title) {
  if (employees.value.length === 0) return 'No Employee'

  if (title === 'No Location') return title
  
  if (title === 'All') return `${employees.value.length - 1} Selected`

  if (selected_filters.value.employee) return `${selected_filters.value.employee.length} Selected`
}

getFiltersList()
</script>

<template>
  <v-row 
    class="mb-1"
    justify="space-between" 
    align="center"
  >
    <v-col>
      <h4 class="text-neutral-400 filter-title ma-0">FILTERS</h4>
    </v-col>

    <v-col cols="auto">
      <v-btn 
        @click="toggleFilters()"
        class="text-capitalize px-1"
        color="blue-300"
        variant="text" 
        density="compact"
      >
        {{ hide_filters ? 'Show All' : 'Hide All' }}
      </v-btn>
    </v-col>
  </v-row>

  <template v-if="hide_filters">
    <v-list
      class="mt-0 pa-0" 
      density="compact"
    >
      <v-list-item 
        v-for="(icon, key) in filters"
        class="px-0"
      >
        <template v-slot:prepend>
          <v-img 
            :src="icon"
            height="16"
            width="16"
          />
        </template>
  
        <v-list-item-title class="text-neutral-400 text-uppercase ml-2">{{ hiddenFiltersText(key) }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </template>

  <template v-else>
    <v-autocomplete
      v-model="selected_filters.company"
      :items="companies"
      :label="selected_filters.company ? 'Company' : ''"
      @update:model-value="handleCompanyFilter($event)"
      item-title="company"
      placeholder="Select Company"
      menu-icon="$expand"
      variant="outlined"
      base-color="neutral-80"
      color="neutral-80"
      height="48"
      return-object
    />

    <v-autocomplete
      v-model="selected_filters.department"
      :items="departments"
      :label="selected_filters.department ? 'Department' : ''"
      :disabled="!selected_filters.company"
      @update:model-value="handleDepartmentFilter()"
      placeholder="Select Department"
      menu-icon="$expand"
      variant="outlined"
      base-color="neutral-80"
      color="neutral-80"
      height="48"
    />

    <v-autocomplete
      v-model="selected_filters.location"
      :items="locations"
      :label="selected_filters.location ? 'Location' : ''"
      :disabled="!selected_filters.department || !locations.length"
      @update:model-value="handleLocationFilter()"
      placeholder="Select Location"
      menu-icon="$expand"
      variant="outlined"
      base-color="neutral-80"
      color="neutral-80"
      height="48"
    />

    <v-select
      v-model="selected_filters.employee"
      :items="employees"
      :label="selected_filters.employee ? 'Employee' : ''"
      :disabled="(!selected_filters.location && locations.length > 0) || (!selected_filters.location && !employees.length) || !employees.length"
      @update:model-value="handleEmployeeFilter($event)"
      placeholder="Select Employee"
      menu-icon="$expand"
      variant="outlined"
      base-color="neutral-80"
      color="neutral-80"
      height="48"
      hide-details
      multiple
    >
      <template #selection="{ item, index }">
        <span v-if="index < 1">{{ employeeSelectionText(item.title) }}</span>
      </template>

      <template #prepend-item>
        <v-text-field 
          class="px-3 pt-2 pb-3"
          label="Search"
          append-inner-icon="fa:fas fa-search"
          variant="outlined"
          base-color="neutral-80"
          color="neutral-80"
          density="compact"
          hide-details
        />

        <v-divider color="neutral-80" />
      </template>
    </v-select>
  </template>
</template>