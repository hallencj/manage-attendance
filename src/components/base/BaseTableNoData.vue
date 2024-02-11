<script setup>
import no_payslip_svg from '@/assets/svg/no-payslip.svg'

defineProps(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
)
</script>

<template>
  <v-sheet 
    class="justify-center d-flex"
    height="564"
  >
    <v-card-item>
      <v-img 
        :src="no_payslip_svg"
        height="144"
      />
      <h2>{{ title }}</h2>
      <div v-html="description"></div>
    </v-card-item>
  </v-sheet>
</template>