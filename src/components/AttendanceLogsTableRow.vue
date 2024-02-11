<script setup>
defineProps(
  {
    item: {
      type: Object,
      default() {
        return {
          name: String,
          id: String,
          date: String,
          time: String,
          in_out: String,
          log_details: String,
          location: String,
          project_name: String
        }
      }
    }
  }
)
</script>

<template>
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

<style scoped>
.sub-text {
  font-size: 12px;
}
</style>